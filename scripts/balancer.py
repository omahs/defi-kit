from defi_protocols.functions import get_contract, get_symbol, get_node, get_decimals
from defi_protocols.constants import ETHEREUM, ZERO_ADDRESS
from defi_protocols.Balancer import (VAULT, ABI_VAULT, get_gauge_addresses) 
# thegraph queries
from gql import gql, Client
from gql.transport.requests import RequestsHTTPTransport
import eth_abi
from lib.dump import dump

BALANCER_QUERIES = '0xE39B5e3B6D74016b2F6A9673D7d7493B6DF549d5'

# ABI Balancer Queries - queryExit, queryJoin
ABI_BALANCER_QUERIES = '[{"inputs":[{"internalType":"bytes32","name":"poolId","type":"bytes32"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"components":[{"internalType":"contract IAsset[]","name":"assets","type":"address[]"},{"internalType":"uint256[]","name":"minAmountsOut","type":"uint256[]"},{"internalType":"bytes","name":"userData","type":"bytes"},{"internalType":"bool","name":"toInternalBalance","type":"bool"}],"internalType":"struct IVault.ExitPoolRequest","name":"request","type":"tuple"}],"name":"queryExit","outputs":[{"internalType":"uint256","name":"bptIn","type":"uint256"},{"internalType":"uint256[]","name":"amountsOut","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"}, {"inputs":[{"internalType":"bytes32","name":"poolId","type":"bytes32"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"components":[{"internalType":"contract IAsset[]","name":"assets","type":"address[]"},{"internalType":"uint256[]","name":"maxAmountsIn","type":"uint256[]"},{"internalType":"bytes","name":"userData","type":"bytes"},{"internalType":"bool","name":"fromInternalBalance","type":"bool"}],"internalType":"struct IVault.JoinPoolRequest","name":"request","type":"tuple"}],"name":"queryJoin","outputs":[{"internalType":"uint256","name":"bptOut","type":"uint256"},{"internalType":"uint256[]","name":"amountsIn","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"}]'

# LP Token ABI - getPoolId, POOL_ID, decimals, getMainToken, version, name
ABI_LPTOKEN = '[{"inputs":[],"name":"getPoolId","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}, {"inputs":[],"name":"POOL_ID","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}, {"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}, {"inputs":[],"name":"getMainToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}, {"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}, {"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]'

#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# subgraph_query_pools
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
def subgraph_query_pools():

    result = []
    skip = 0
    while True:
    # Initialize subgraph
        subgraph_url = "https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2"
        balancer_transport=RequestsHTTPTransport(
            url=subgraph_url,
            verify=True,
            retries=3
        )
        client = Client(transport=balancer_transport)

        query_string = '''
        query {{
        pools(where: {{totalLiquidity_gte: 1000}}, first: {first}, skip: {skip}) {{
            id
            address
            poolTypeVersion
            poolType
        }}
        }}
        '''
        num_pools_to_query = 1000
        formatted_query_string = query_string.format(first=num_pools_to_query, skip=skip)
        response = client.execute(gql(formatted_query_string))
        result.extend(response['pools'])

        if len(response['pools']) < 1000:
            break
        else:
            skip = 1000

    return result


#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# subgraph_query_pool_type
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
def subgraph_query_pool_type(pool_id):

    # Initialize subgraph
    subgraph_url = "https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2"
    balancer_transport=RequestsHTTPTransport(
        url=subgraph_url,
        verify=True,
        retries=3
    )
    client = Client(transport=balancer_transport)

    query_string = '''
    query {{
    pool(id: {pool_id}) {{
        poolType
    }}
    }}
    '''
    formatted_query_string = query_string.format(pool_id="\""+pool_id+"\"")
    response = client.execute(gql(formatted_query_string))

    return response['pool']['poolType']


#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# is_deprecated
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
def is_deprecated(pool_id, lptoken_address, pool_tokens, blockchain, web3):

    amounts = []

    for pool_token in pool_tokens:
        if pool_token != lptoken_address:
            amounts.append(10**get_decimals(pool_token, blockchain, web3=web3))

    join_kind = 1 # EXACT_TOKENS_IN_FOR_BPT_OUT
    minimum_bpt = 0
    abi = ['uint256', 'uint256[]', 'uint256']
    data = [join_kind, amounts, minimum_bpt]
    user_data = '0x' + eth_abi.encode(abi, data).hex()

    balancer_queries = get_contract(BALANCER_QUERIES, ETHEREUM, abi=ABI_BALANCER_QUERIES)

    try:
        join_pool = balancer_queries.functions.queryJoin(pool_id, ZERO_ADDRESS, ZERO_ADDRESS, [pool_tokens, amounts, user_data, False]).call()
    except Exception as e:
        print(str(e) + ': ' + pool_id)
        return True
    
    if join_pool[0] == 0:
        return True
    else:
        return False


#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# add_pool_tokens
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
def add_pool_tokens(vault_contract, pool_id, lptoken_address, pool_tokens_array, blockchain, web3):
    
    pool_tokens_data = vault_contract.functions.getPoolTokens(pool_id).call()
    pool_tokens = pool_tokens_data[0]

    for i in range(len(pool_tokens)):
            
        if pool_tokens[i] == lptoken_address:
            continue

        pool_token_address = pool_tokens[i]
        pool_token_symbol = get_symbol(pool_token_address, blockchain)

        pool_token_contract = get_contract(pool_token_address, blockchain, web3=web3, abi=ABI_LPTOKEN)
        try:
            token_pool_id = '0x' + pool_token_contract.functions.getPoolId().call().hex()
        except:
            try:
                token_pool_id = '0x' + pool_token_contract.functions.POOL_ID().call().hex()
            except:
                token_pool_id = '0x'
        
        if token_pool_id != '0x':
            pool_tokens_array.append({
                'address': pool_token_address,
                'symbol': pool_token_symbol,
                'id': token_pool_id,
            })

            pool_token_type = subgraph_query_pool_type(token_pool_id)
            
            try:
                pool_token_version = pool_token_contract.functions.version().call()
            except:
                pool_token_version = None
            
            pool_token_name = pool_token_contract.functions.name().call()

            # pool_token_version != None filters out old bb-a-USD pools and 'bao' not in pool_token_name.lower() filters out bao pools
            if any(pool_token_type in itype for itype in ['ComposableStable', 'GearboxLinear']) and pool_token_version != None and 'bao' not in pool_token_name.lower():
                add_pool_tokens(vault_contract, token_pool_id, pool_token_address, pool_tokens_array, blockchain, web3)
            else:
                try:
                    underlying_token = pool_token_contract.functions.getMainToken().call()
                    underlying_token_contract = get_contract(underlying_token, blockchain, web3=web3, abi=ABI_LPTOKEN)
                    try:
                        underlying_token_pool_id = '0x' + underlying_token_contract.functions.getPoolId().call().hex()
                    except:
                        underlying_token_pool_id = None

                    pool_tokens_array.append({
                        'address': underlying_token,
                        'symbol': get_symbol(underlying_token, blockchain, web3=web3),
                        'id': underlying_token_pool_id
                    })
                
                except:
                    pass
        else:
            pool_tokens_array.append({
                'address': pool_token_address,
                'symbol': pool_token_symbol,
                'id': token_pool_id,
            })


#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# transactions_data
#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
def transactions_data(blockchain):

    result = []

    web3 = get_node(blockchain)

    pools = subgraph_query_pools()

    vault_contract = get_contract(VAULT, blockchain, web3=web3, abi=ABI_VAULT)
    
    j = 0
    deprecated = 0
    print(len(pools))
    for pool in pools:
        lptoken_address = vault_contract.functions.getPool(pool['id']).call()[0]

        pool_tokens_data = vault_contract.functions.getPoolTokens(pool['id']).call()
        pool_tokens = pool_tokens_data[0]

        if is_deprecated(pool['id'], lptoken_address, pool_tokens, blockchain, web3):
            deprecated += 1
            continue

        try:
            gauge_address = get_gauge_addresses(blockchain, 'latest', web3, lptoken_address)[0]
        except:
            gauge_address = None
        
        pool_name = get_symbol(lptoken_address, blockchain, web3=web3)
        
        pool_tokens_array = []
        add_pool_tokens(vault_contract, pool['id'], lptoken_address, pool_tokens_array, blockchain, web3)
        
        result.append({
            'bpt': lptoken_address,
            'id': pool['id'],
            'name': pool_name, 
            'type': pool['poolType'],
            'gauge': gauge_address,
            'tokens': pool_tokens_array
        })

        print(j)
        j += 1
    
    print(deprecated)
    
    dump(result, 'balancer')


transactions_data(ETHEREUM)

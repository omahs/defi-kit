import { Permission, c } from "zodiac-roles-sdk"
import { allow } from "zodiac-roles-sdk/kit"

import { Pool, Token } from "./types"
import { allowErc20Approve } from "../../erc20"
import { contracts } from "../../../eth-sdk/config"

const BAL = "0xba100000625a3754423978a60c9317c58a424e3D"
const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
const B_80BAL_20WETH = "0x5c6Ee304399DBdB9C8Ef030aB642B10820DB8F56"
const B_80BAL_20WETH_PID =
  "0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014"
const bb_a_USD_v1 = "0x7B50775383d3D6f0215A8F290f2C9e2eEBBEceb2"
const bb_a_USD_v2 = "0xA13a9247ea42D743238089903570127DdA72fE44"
const bb_a_USD_v3 = "0xfeBb0bbf162E64fb9D0dfe186E517d84C395f016"
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"

export const deposit = (pool: Pool, tokens: readonly Token[] = pool.tokens) => {
  const tokenAddresses = pool.tokens
    .map((token) => token.address)
    .filter((address) => tokens.some((token) => token.address === address))

  const tokenPoolIds = (pool.tokens as readonly Token[])
    .filter(
      (token) =>
        tokens.some((t) => token.address === t.address) &&
        token.id !== null &&
        token.id !== "0x"
    )
    .map((token) => token.id)

  const permissions: Permission[] = [
    ...allowErc20Approve(tokenAddresses, [contracts.mainnet.balancer.vault]),

    allow.mainnet.balancer.vault.joinPool(
      pool.id,
      c.avatar,
      c.avatar
      // No need to scope assets since they are given by the pool id
      // {
      // assets: tokens.map((token) => token.address.toLowerCase()).sort(),
      // }
    ),

    allow.mainnet.balancer.vault.exitPool(
      pool.id,
      c.avatar,
      c.avatar
      // No need to scope assets since they are given by the pool id
      // {
      //   assets: tokens.map((token) => token.address.toLowerCase()).sort(),
      // }
    ),
  ]

  if (tokenPoolIds.length > 0) {
    permissions.push(
      allow.mainnet.balancer.vault.swap(
        { poolId: c.or(...(tokenPoolIds as [string, string, ...string[]])) },
        { recipient: c.avatar, sender: c.avatar }
      ),

      allow.mainnet.balancer.vault.setRelayerApproval(
        c.avatar,
        contracts.mainnet.balancer.relayer
      ),

      allow.mainnet.balancer.relayer.multicall(
        c.every(
          c.or(
            c.calldataMatches(
              allow.mainnet.balancer.relayerLibrary.joinPool(
                pool.id,
                undefined,
                c.avatar,
                c.avatar
                // No need to scope assets since they are given by the pool id
                // {
                //   assets: pool.tokens
                //     .map((token) => token.address.toLowerCase())
                //     .sort(),
                // }
              )
            ),

            c.calldataMatches(
              // TODO update to next function
              allow.mainnet.balancer.relayerLibrary.exitPool(
                pool.id,
                undefined,
                c.avatar,
                c.avatar
                // No need to scope assets since they are given by the pool id
                // {
                //   assets: pool.tokens
                //     .map((token) => token.address.toLowerCase())
                //     .sort(),
                // }
              )
            ),

            c.calldataMatches(
              // TODO update to next function
              allow.mainnet.balancer.relayerLibrary.swap(
                {
                  poolId: c.or(
                    ...(tokenPoolIds as [string, string, ...string[]])
                  ),
                },
                { recipient: c.avatar, sender: c.avatar }
              )
            )
          )
        )
      )
    )
  }

  return permissions
}

export const stake = (pool: Pool) => {
  const permissions: Permission[] = []

  if (pool.gauge) {
    permissions.push(
      ...allowErc20Approve([pool.bpt], [pool.gauge]),
      {
        ...allow.mainnet.balancer.gauge["deposit(uint256)"],
        targetAddress: pool.gauge,
      },
      {
        ...allow.mainnet.balancer.gauge["withdraw(uint256)"],
        targetAddress: pool.gauge,
      },
      {
        ...allow.mainnet.balancer.gauge["claim_rewards()"],
        targetAddress: pool.gauge,
      },
      allow.mainnet.balancer.minter.mint(pool.gauge)
    )
  }

  return permissions
}

export const lock = (): Permission[] => {
  return [
    ...allowErc20Approve([BAL, WETH], [contracts.mainnet.balancer.vault]),
    ...allowErc20Approve([B_80BAL_20WETH], [contracts.mainnet.balancer.vebal]),
    allow.mainnet.balancer.vault.joinPool(
      B_80BAL_20WETH_PID,
      c.avatar,
      c.avatar
    ),
    allow.mainnet.balancer.vault.exitPool(
      B_80BAL_20WETH_PID,
      c.avatar,
      c.avatar
    ),
    allow.mainnet.balancer.vebal.create_lock(),
    allow.mainnet.balancer.vebal.increase_amount(),
    allow.mainnet.balancer.vebal.increase_unlock_time(),
    allow.mainnet.balancer.vebal.withdraw(),
    allow.mainnet.balancer.fee_distributor.claimToken(
      c.avatar,
      c.or(BAL, bb_a_USD_v1, bb_a_USD_v2, bb_a_USD_v3, USDC)
    ),
    allow.mainnet.balancer.fee_distributor.claimTokens(c.avatar, [
      BAL,
      bb_a_USD_v1,
      bb_a_USD_v2,
      bb_a_USD_v3,
      USDC,
    ]),
  ]
}

export const swap = (
  pool: Pool,
  sell: Token[] | undefined,
  buy: Token[] | undefined
) => {
  const result: Permission[] = []

  return result
}

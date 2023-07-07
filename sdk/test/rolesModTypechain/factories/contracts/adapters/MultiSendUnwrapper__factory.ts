/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MultiSendUnwrapper,
  MultiSendUnwrapperInterface,
} from "../../../contracts/adapters/MultiSendUnwrapper";

const _abi = [
  {
    inputs: [],
    name: "MalformedBody",
    type: "error",
  },
  {
    inputs: [],
    name: "MalformedHeader",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsupportedMode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "unwrap",
    outputs: [
      {
        components: [
          {
            internalType: "enum Enum.Operation",
            name: "operation",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dataLocation",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dataSize",
            type: "uint256",
          },
        ],
        internalType: "struct UnwrappedTransaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610845806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c7a7b63514610030575b600080fd5b61004361003e366004610525565b610059565b60405161005091906105e7565b60405180910390f35b6060841561007a5760405163ad6e405560e01b815260040160405180910390fd5b600182600181111561008e5761008e6105d1565b146100ac5760405163ad6e405560e01b815260040160405180910390fd5b6100b684846100da565b60006100c285856101a6565b90506100cf8585836102a6565b979650505050505050565b6346c07f8560e11b6100ec828461067c565b6001600160e01b0319161461011457604051631a751fb760e11b815260040160405180910390fd5b602061012382600481866106ac565b61012c916106d6565b1461014a57604051631a751fb760e11b815260040160405180910390fd5b600061015982602481866106ac565b610162916106d6565b90508161017861017383604061070a565b6104dc565b61018390600461070a565b146101a157604051631a751fb760e11b815260040160405180910390fd5b505050565b600060445b826101b782602061070a565b101561027f5760006101cb848381886106ac565b6101d49161071d565b60f81c905060018111156101fa57604051629ec3f960e31b815260040160405180910390fd5b6000858561020985603561070a565b6102149282906106ac565b61021d916106d6565b9050848161022c85605561070a565b610236919061070a565b111561025457604051629ec3f960e31b815260040160405180910390fd5b61025f81605561070a565b610269908461070a565b9250836102758161074b565b94505050506101ab565b8160000361029f57604051629ec3f960e31b815260040160405180910390fd5b5092915050565b60608167ffffffffffffffff8111156102c1576102c1610764565b60405190808252806020026020018201604052801561032e57816020015b61031b6040805160a08101909152806000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8152602001906001900390816102df5790505b509050604460005b838110156104d35761034a858381896106ac565b6103539161071d565b60f81c6001811115610367576103676105d1565b8382815181106103795761037961077a565b6020026020010151600001906001811115610396576103966105d1565b908160018111156103a9576103a96105d1565b9052506103b760018361070a565b91506103c5858381896106ac565b6103ce91610790565b60601c8382815181106103e3576103e361077a565b6020908102919091018101516001600160a01b0390921691015261040860148361070a565b9150610416858381896106ac565b61041f916106d6565b60001c8382815181106104345761043461077a565b60200260200101516040018181525050602082610451919061070a565b915060006104618684818a6106ac565b61046a916106d6565b905061047760208461070a565b92508284838151811061048c5761048c61077a565b60200260200101516060018181525050808483815181106104af576104af61077a565b6020908102919091010151608001526104c8818461070a565b925050600101610336565b50509392505050565b6000602060016104ec848361070a565b6104f691906107c3565b61050091906107d6565b61050b9060206107f8565b92915050565b80356002811061052057600080fd5b919050565b60008060008060006080868803121561053d57600080fd5b85356001600160a01b038116811461055457600080fd5b945060208601359350604086013567ffffffffffffffff8082111561057857600080fd5b818801915088601f83011261058c57600080fd5b81358181111561059b57600080fd5b8960208285010111156105ad57600080fd5b6020830195508094505050506105c560608701610511565b90509295509295909350565b634e487b7160e01b600052602160045260246000fd5b60208082528251828201819052600091906040908185019086840185805b8381101561066e57825180516002811061062d57634e487b7160e01b84526021600452602484fd5b8652808801516001600160a01b0316888701528681015187870152606080820151908701526080908101519086015260a09094019391860191600101610605565b509298975050505050505050565b6001600160e01b031981358181169160048510156106a45780818660040360031b1b83161692505b505092915050565b600080858511156106bc57600080fd5b838611156106c957600080fd5b5050820193919092039150565b8035602083101561050b57600019602084900360031b1b1692915050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561050b5761050b6106f4565b6001600160f81b031981358181169160018510156106a45760019490940360031b84901b1690921692915050565b60006001820161075d5761075d6106f4565b5060010190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6bffffffffffffffffffffffff1981358181169160148510156106a45760149490940360031b84901b1690921692915050565b8181038181111561050b5761050b6106f4565b6000826107f357634e487b7160e01b600052601260045260246000fd5b500490565b808202811582820484141761050b5761050b6106f456fea2646970667358221220b8751f684abc6ab86eb5554015c2e2debdfc1b82d0c8fd3700c7c22e18acf20464736f6c63430008110033";

type MultiSendUnwrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultiSendUnwrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultiSendUnwrapper__factory extends ContractFactory {
  constructor(...args: MultiSendUnwrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MultiSendUnwrapper> {
    return super.deploy(overrides || {}) as Promise<MultiSendUnwrapper>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MultiSendUnwrapper {
    return super.attach(address) as MultiSendUnwrapper;
  }
  override connect(signer: Signer): MultiSendUnwrapper__factory {
    return super.connect(signer) as MultiSendUnwrapper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiSendUnwrapperInterface {
    return new utils.Interface(_abi) as MultiSendUnwrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiSendUnwrapper {
    return new Contract(address, _abi, signerOrProvider) as MultiSendUnwrapper;
  }
}

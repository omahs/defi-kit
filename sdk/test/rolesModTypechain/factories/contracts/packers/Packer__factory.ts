/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Packer,
  PackerInterface,
} from "../../../contracts/packers/Packer";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "parent",
            type: "uint8",
          },
          {
            internalType: "enum ParameterType",
            name: "paramType",
            type: "ParameterType",
          },
          {
            internalType: "enum Operator",
            name: "operator",
            type: "Operator",
          },
          {
            internalType: "bytes",
            name: "compValue",
            type: "bytes",
          },
        ],
        internalType: "struct ConditionFlat[]",
        name: "conditionsFlat",
        type: "tuple[]",
      },
    ],
    name: "pack",
    outputs: [
      {
        internalType: "bytes",
        name: "buffer",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61086e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063806362d21461003a575b600080fd5b61004d610048366004610601565b610063565b60405161005a919061073e565b60405180910390f35b606061006e82610188565b6100778261024d565b67ffffffffffffffff81111561008f5761008f61050d565b6040519080825280601f01601f1916602001820160405280156100b9576020820181803683370190505b50825190915060006100cc8260026107a2565b6100d79060206107b9565b905060005b828110156101805761010884828784815181106100fb576100fb6107cc565b60200260200101516102c5565b601085828151811061011c5761011c6107cc565b602002602001015160400151601f811115610139576101396107e2565b10610170576101628483878481518110610155576101556107cc565b6020026020010151610376565b61016d6020836107b9565b91505b610179816107f8565b90506100dc565b505050919050565b805160005b818110156102485760108382815181106101a9576101a96107cc565b602002602001015160400151601f8111156101c6576101c66107e2565b1480156101da57506101d883826103c1565b155b156102385760008382815181106101f3576101f36107cc565b602002602001015160600151905060008151905060208201915060208103825281858481518110610226576102266107cc565b60200260200101516060018190525050505b610241816107f8565b905061018d565b505050565b805160009061025d6002826107a2565b915060005b818110156102be57601084828151811061027e5761027e6107cc565b602002602001015160400151601f81111561029b5761029b6107e2565b106102ae576102ab6020846107b9565b92505b6102b7816107f8565b9050610262565b5050919050565b60006102d26002846107a2565b9050816000015160f81b8482815181106102ee576102ee6107cc565b60200101906001600160f81b031916908160001a9053508160400151601f81111561031b5761031b6107e2565b60208301516005906006811115610334576103346107e2565b60ff16901b1760f81b846103498360016107b9565b81518110610359576103596107cc565b60200101906001600160f81b031916908160001a90535050505050565b600060108260400151601f811115610390576103906107e2565b146103a85781606001516103a390610811565b6103b5565b8160600151805190602001205b93909201929092525050565b6000808383815181106103d6576103d66107cc565b6020026020010151602001519050600160068111156103f7576103f76107e2565b816006811115610409576104096107e2565b03610418576001915050610507565b600281600681111561042c5761042c6107e2565b148061044957506004816006811115610447576104476107e2565b145b8061046557506005816006811115610463576104636107e2565b145b15610474576000915050610507565b835160006104838560016107b9565b90505b818110156104ff5760008682815181106104a2576104a26107cc565b6020026020010151600001519050858160ff1610156104c157506104ef565b858160ff1611156104d257506104ff565b6104dc87836103c1565b6104ed576000945050505050610507565b505b6104f8816107f8565b9050610486565b506001925050505b92915050565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156105465761054661050d565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156105755761057561050d565b604052919050565b80356020811061058c57600080fd5b919050565b600082601f8301126105a257600080fd5b813567ffffffffffffffff8111156105bc576105bc61050d565b6105cf601f8201601f191660200161054c565b8181528460208386010111156105e457600080fd5b816020850160208301376000918101602001919091529392505050565b6000602080838503121561061457600080fd5b823567ffffffffffffffff8082111561062c57600080fd5b818501915085601f83011261064057600080fd5b8135818111156106525761065261050d565b8060051b61066185820161054c565b918252838101850191858101908984111561067b57600080fd5b86860192505b83831015610731578235858111156106995760008081fd5b86016080818c03601f19018113156106b15760008081fd5b6106b9610523565b8983013560ff811681146106cd5760008081fd5b8152604083810135600781106106e35760008081fd5b828c015260606106f485820161057d565b8383015292840135928984111561070d57600091508182fd5b61071b8f8d86880101610591565b9083015250845250509186019190860190610681565b9998505050505050505050565b600060208083528351808285015260005b8181101561076b5785810183015185820160400152820161074f565b506000604082860101526040601f19601f8301168501019250505092915050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176105075761050761078c565b808201808211156105075761050761078c565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b60006001820161080a5761080a61078c565b5060010190565b80516020808301519190811015610832576000198160200360031b1b821691505b5091905056fea2646970667358221220e3012a5c57ab8977d80f889467b7b7d244dd67b696fb4ba81353bbb11eae251964736f6c63430008110033";

type PackerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PackerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Packer__factory extends ContractFactory {
  constructor(...args: PackerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Packer> {
    return super.deploy(overrides || {}) as Promise<Packer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Packer {
    return super.attach(address) as Packer;
  }
  override connect(signer: Signer): Packer__factory {
    return super.connect(signer) as Packer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PackerInterface {
    return new utils.Interface(_abi) as PackerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Packer {
    return new Contract(address, _abi, signerOrProvider) as Packer;
  }
}

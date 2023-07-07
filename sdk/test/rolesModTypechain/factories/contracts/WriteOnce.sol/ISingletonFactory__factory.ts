/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISingletonFactory,
  ISingletonFactoryInterface,
} from "../../../contracts/WriteOnce.sol/ISingletonFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "initCode",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ISingletonFactory__factory {
  static readonly abi = _abi;
  static createInterface(): ISingletonFactoryInterface {
    return new utils.Interface(_abi) as ISingletonFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISingletonFactory {
    return new Contract(address, _abi, signerOrProvider) as ISingletonFactory;
  }
}

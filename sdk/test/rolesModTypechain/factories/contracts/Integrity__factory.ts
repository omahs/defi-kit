/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Integrity, IntegrityInterface } from "../../contracts/Integrity";

const _abi = [
  {
    inputs: [],
    name: "NotBFS",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "UnsuitableChildCount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "UnsuitableChildTypeTree",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "UnsuitableCompValue",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "UnsuitableParameterType",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "UnsuitableParent",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsuitableRootNode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "UnsupportedOperator",
    type: "error",
  },
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
        name: "conditions",
        type: "tuple[]",
      },
    ],
    name: "enforce",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61165e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063783a90471461003a575b600080fd5b61004d6100483660046113c5565b61004f565b005b610058816100a4565b60005b81518110156100975761008782828151811061007957610079611501565b602002602001015182610149565b6100908161152d565b905061005b565b506100a181610686565b50565b6000805b82518110156100f457808382815181106100c4576100c4611501565b60200260200101516000015160ff16036100e4576100e18261152d565b91505b6100ed8161152d565b90506100a8565b5080600114158061012757508160008151811061011357610113611501565b60200260200101516000015160ff16600014155b1561014557604051632f48858160e21b815260040160405180910390fd5b5050565b604082015160208301516060840151600083601f81111561016c5761016c611546565b036101a2576060850151511561019d57604051632d6ee65d60e21b8152600481018590526024015b60405180910390fd5b61067f565b600183601f8111156101b6576101b6611546565b101580156101d65750600383601f8111156101d3576101d3611546565b11155b156102375760008260068111156101ef576101ef611546565b146102105760405163de10075b60e01b815260048101859052602401610194565b6060850151511561019d57604051632d6ee65d60e21b815260048101859052602401610194565b600583601f81111561024b5761024b611546565b0361030457600382600681111561026457610264611546565b141580156102845750600482600681111561028157610281611546565b14155b80156102a25750600582600681111561029f5761029f611546565b14155b80156102c0575060068260068111156102bd576102bd611546565b14155b156102e15760405163de10075b60e01b815260048101859052602401610194565b80511561019d57604051632d6ee65d60e21b815260048101859052602401610194565b600683601f81111561031857610318611546565b14806103355750600783601f81111561033357610333611546565b145b806103515750600883601f81111561034f5761034f611546565b145b1561038c5760045b82600681111561036b5761036b611546565b146102e15760405163de10075b60e01b815260048101859052602401610194565b600f83601f8111156103a0576103a0611546565b036103ac576001610359565b601083601f8111156103c0576103c0611546565b036104915760018260068111156103d9576103d9611546565b141580156103f9575060028260068111156103f6576103f6611546565b14155b80156104175750600382600681111561041457610414611546565b14155b80156104355750600482600681111561043257610432611546565b14155b156104565760405163de10075b60e01b815260048101859052602401610194565b8051158061047057506020815161046d919061155c565b15155b1561019d57604051632d6ee65d60e21b815260048101859052602401610194565b601183601f8111156104a5576104a5611546565b14806104c25750601283601f8111156104c0576104c0611546565b145b806104de5750601383601f8111156104dc576104dc611546565b145b806104fa5750601483601f8111156104f8576104f8611546565b145b1561055a5760015b82600681111561051457610514611546565b146105355760405163de10075b60e01b815260048101859052602401610194565b805160201461019d57604051632d6ee65d60e21b815260048101859052602401610194565b601583601f81111561056e5761056e611546565b036105c857600182600681111561058757610587611546565b141580156105a7575060028260068111156105a4576105a4611546565b14155b156105355760405163de10075b60e01b815260048101859052602401610194565b601683601f8111156105dc576105dc611546565b0361060657805160201461019d57604051632d6ee65d60e21b815260048101859052602401610194565b601c83601f81111561061a5761061a611546565b03610626576001610502565b601d83601f81111561063a5761063a611546565b14806106575750601e83601f81111561065557610655611546565b145b15610663576000610502565b604051630a7d7b8960e41b815260048101859052602401610194565b5050505050565b805160015b81811015610710578281815181106106a5576106a5611501565b60200260200101516000015160ff16836001836106c2919061157e565b815181106106d2576106d2611501565b60200260200101516000015160ff16111561070057604051638484738160e01b815260040160405180910390fd5b6107098161152d565b905061068b565b5060005b8181101561081357601d83828151811061073057610730611501565b602002602001015160400151601f81111561074d5761074d611546565b14806107875750601e83828151811061076857610768611501565b602002602001015160400151601f81111561078557610785611546565b145b80156107e257506005838483815181106107a3576107a3611501565b60200260200101516000015160ff16815181106107c2576107c2611501565b60200260200101516020015160068111156107df576107df611546565b14155b1561080357604051631d40413960e11b815260048101829052602401610194565b61080c8161152d565b9050610714565b50600061081f83610c9e565b905060005b8351811015610b7057600084828151811061084157610841611501565b60200260200101519050600083838151811061085f5761085f611501565b602002602001015190506000600681111561087c5761087c611546565b8260200151600681111561089257610892611546565b0361096e57601d8260400151601f8111156108af576108af611546565b14806108d05750601e8260400151601f8111156108ce576108ce611546565b145b80156108df5750604081015115155b156109005760405163f3379ddd60e01b815260048101849052602401610194565b60018260400151601f81111561091857610918611546565b1015801561093c575060038260400151601f81111561093957610939611546565b11155b156109695780604001516000036109695760405163f3379ddd60e01b815260048101849052602401610194565b610b5b565b60018260200151600681111561098657610986611546565b14806109a757506002826020015160068111156109a5576109a5611546565b145b156109d2576040810151156109695760405163f3379ddd60e01b815260048101849052602401610194565b6003826020015160068111156109ea576109ea611546565b1480610a0b5750600582602001516006811115610a0957610a09611546565b145b80610a2b5750600682602001516006811115610a2957610a29611546565b145b15610a585780604001516000036109695760405163f3379ddd60e01b815260048101849052602401610194565b600482602001516006811115610a7057610a70611546565b14610a7d57610a7d611597565b8060400151600003610aa55760405163f3379ddd60e01b815260048101849052602401610194565b60068260400151601f811115610abd57610abd611546565b1480610ade575060078260400151601f811115610adc57610adc611546565b145b8015610aef57508060400151600114155b15610b105760405163f3379ddd60e01b815260048101849052602401610194565b60088260400151601f811115610b2857610b28611546565b148015610b3a57506101008160400151115b15610b5b5760405163f3379ddd60e01b815260048101849052602401610194565b50508080610b689061152d565b915050610824565b5060005b8351811015610c54576000848281518110610b9157610b91611501565b602002602001015190506001601f811115610bae57610bae611546565b8160400151601f811115610bc457610bc4611546565b10158015610be8575060038160400151601f811115610be557610be5611546565b11155b80610c085750600481602001516006811115610c0657610c06611546565b145b8015610c3157506001838381518110610c2357610c23611501565b602002602001015160400151115b15610c4157610c41858385610df3565b5080610c4c8161152d565b915050610b74565b506000610c6384600084610eac565b9050600581516006811115610c7a57610c7a611546565b14610c9857604051632f48858160e21b815260040160405180910390fd5b50505050565b805160609080610cb057610cb0611597565b806001600160401b03811115610cc857610cc86112d4565b604051908082528060200260200182016040528015610d1d57816020015b610d0a60405180606001604052806000815260200160008152602001600081525090565b815260200190600190039081610ce65790505b50915060001982600081518110610d3657610d36611501565b60209081029190910101515260015b81811015610dec57600019838281518110610d6257610d62611501565b60200260200101516000018181525050600083858381518110610d8757610d87611501565b60200260200101516000015160ff1681518110610da657610da6611501565b60200260200101519050600019816000015103610dc1578181525b610dcc8260016115ad565b602082018190528151610dde9161157e565b604090910152600101610d45565b5050919050565b6000818381518110610e0757610e07611501565b60200260200101516000015190506000828481518110610e2957610e29611501565b60200260200101516020015190506000826001610e4691906115ad565b90505b81811015610ea457610e5d86848387611134565b158015610e735750610e7186848387611161565b155b15610e94576040516303a3183b60e61b815260048101869052602401610194565b610e9d8161152d565b9050610e49565b505050505050565b6040805180820190915260008152606060208201526000848481518110610ed557610ed5611501565b602002602001015190506001601f811115610ef257610ef2611546565b8160400151601f811115610f0857610f08611546565b10158015610f2c575060038160400151601f811115610f2957610f29611546565b11155b15610f8e576000838581518110610f4557610f45611501565b60200260200101516040015111610f5e57610f5e611597565b610f8685848681518110610f7457610f74611501565b60200260200101516000015185610eac565b91505061112d565b602081015182906006811115610fa657610fa6611546565b90816006811115610fb957610fb9611546565b815250506000838581518110610fd157610fd1611501565b602002602001015160400151111561112b576000838581518110610ff757610ff7611501565b6020908102919091010151519050600060048360200151600681111561101f5761101f611546565b146110475784868151811061103657611036611501565b602002602001015160200151611071565b84868151811061105957611059611501565b602002602001015160000151600161107191906115ad565b905061107d828261157e565b6001600160401b03811115611094576110946112d4565b6040519080825280602002602001820160405280156110da57816020015b6040805180820190915260008152606060208201528152602001906001900390816110b25790505b506020850152815b81811015611127576110f5888288610eac565b6020860151611104858461157e565b8151811061111457611114611501565b60209081029190910101526001016110e2565b5050505b505b9392505050565b6000611149611144868585610eac565b6111d5565b611157611144878786610eac565b1495945050505050565b60008061116f868685610eac565b519050600581600681111561118657611186611546565b14806111a3575060068160068111156111a1576111a1611546565b145b80156111cb575060026111b7878686610eac565b5160068111156111c9576111c9611546565b145b9695505050505050565b60208101515160009080156112c15760008360200151516001600160401b03811115611203576112036112d4565b60405190808252806020026020018201604052801561122c578160200160208202803683370190505b50905060005b8281101561128d576112608560200151828151811061125357611253611501565b60200260200101516111d5565b82828151811061127257611272611501565b60209081029190910101526112868161152d565b9050611232565b5083516040516112a2919083906020016115c0565b6040516020818303038152906040528051906020012092505050919050565b8251600681111561112d5761112d611546565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b038111828210171561130c5761130c6112d4565b60405290565b604051601f8201601f191681016001600160401b038111828210171561133a5761133a6112d4565b604052919050565b80356020811061135157600080fd5b919050565b600082601f83011261136757600080fd5b81356001600160401b03811115611380576113806112d4565b611393601f8201601f1916602001611312565b8181528460208386010111156113a857600080fd5b816020850160208301376000918101602001919091529392505050565b600060208083850312156113d857600080fd5b82356001600160401b03808211156113ef57600080fd5b818501915085601f83011261140357600080fd5b813581811115611415576114156112d4565b8060051b611424858201611312565b918252838101850191858101908984111561143e57600080fd5b86860192505b838310156114f45782358581111561145c5760008081fd5b86016080818c03601f19018113156114745760008081fd5b61147c6112ea565b8983013560ff811681146114905760008081fd5b8152604083810135600781106114a65760008081fd5b828c015260606114b7858201611342565b838301529284013592898411156114d057600091508182fd5b6114de8f8d86880101611356565b9083015250845250509186019190860190611444565b9998505050505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161153f5761153f611517565b5060010190565b634e487b7160e01b600052602160045260246000fd5b60008261157957634e487b7160e01b600052601260045260246000fd5b500690565b8181038181111561159157611591611517565b92915050565b634e487b7160e01b600052600160045260246000fd5b8082018082111561159157611591611517565b6000600784106115e057634e487b7160e01b600052602160045260246000fd5b8360f81b82526001602d60f81b81840152600283018451602080870160005b8381101561161a5781518552938201939082019085016115ff565b50929897505050505050505056fea2646970667358221220fb391541dd21e6622425675a6b5f67ae78468315009dfd224d36bf016879c58c64736f6c63430008110033";

type IntegrityConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IntegrityConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Integrity__factory extends ContractFactory {
  constructor(...args: IntegrityConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Integrity> {
    return super.deploy(overrides || {}) as Promise<Integrity>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Integrity {
    return super.attach(address) as Integrity;
  }
  override connect(signer: Signer): Integrity__factory {
    return super.connect(signer) as Integrity__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IntegrityInterface {
    return new utils.Interface(_abi) as IntegrityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Integrity {
    return new Contract(address, _abi, signerOrProvider) as Integrity;
  }
}

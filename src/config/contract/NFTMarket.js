const NFTMarketContract = {
  "_format": "hh-sol-artifact-1",
  "contractName": "NFTMarket",
  "sourceName": "contracts/NFTMarket.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collectionAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "buyNFT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collectionAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "cancel",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collectionAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "sellNFT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collectionAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "setPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50610c9e806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633011e16a1461005157806398590ef91461006d578063a82ba76f14610089578063f779a193146100a5575b600080fd5b61006b60048036038101906100669190610869565b6100c1565b005b610087600480360381019061008291906108bc565b61022e565b005b6100a3600480360381019061009e91906108bc565b610399565b005b6100bf60048036038101906100ba9190610869565b610685565b005b60008390503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b8152600401610116919061090b565b602060405180830381865afa158015610133573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610157919061093b565b73ffffffffffffffffffffffffffffffffffffffff16146101ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a4906109c5565b60405180910390fd5b60006101b9858561079d565b905060008060008381526020019081526020016000205411610210576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020790610a31565b60405180910390fd5b82600080838152602001908152602001600020819055505050505050565b60008290503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16636352211e846040518263ffffffff1660e01b8152600401610283919061090b565b602060405180830381865afa1580156102a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c4919061093b565b73ffffffffffffffffffffffffffffffffffffffff161461031a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610311906109c5565b60405180910390fd5b6000610326848461079d565b90506000806000838152602001908152602001600020541161037d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037490610a31565b60405180910390fd5b6000808281526020019081526020016000206000905550505050565b60006103a5838361079d565b9050600080600083815260200190815260200160002054116103fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f390610a9d565b60405180910390fd5b600083905060008173ffffffffffffffffffffffffffffffffffffffff16639478a8c06040518163ffffffff1660e01b8152600401602060405180830381865afa15801561044e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104729190610afb565b90508073ffffffffffffffffffffffffffffffffffffffff166323b872dd338473ffffffffffffffffffffffffffffffffffffffff16636352211e886040518263ffffffff1660e01b81526004016104ca919061090b565b602060405180830381865afa1580156104e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050b919061093b565b600080888152602001908152602001600020546040518463ffffffff1660e01b815260040161053c93929190610b37565b6020604051808303816000875af115801561055b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057f9190610ba6565b508173ffffffffffffffffffffffffffffffffffffffff166342842e0e8373ffffffffffffffffffffffffffffffffffffffff16636352211e876040518263ffffffff1660e01b81526004016105d5919061090b565b602060405180830381865afa1580156105f2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610616919061093b565b33876040518463ffffffff1660e01b815260040161063693929190610b37565b600060405180830381600087803b15801561065057600080fd5b505af1158015610664573d6000803e3d6000fd5b50505050600080848152602001908152602001600020600090555050505050565b60008390503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b81526004016106da919061090b565b602060405180830381865afa1580156106f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071b919061093b565b73ffffffffffffffffffffffffffffffffffffffff1614610771576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610768906109c5565b60405180910390fd5b600061077d858561079d565b905082600080838152602001908152602001600020819055505050505050565b600082826040516020016107b2929190610c3c565b60405160208183030381529060405280519060200120905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610800826107d5565b9050919050565b610810816107f5565b811461081b57600080fd5b50565b60008135905061082d81610807565b92915050565b6000819050919050565b61084681610833565b811461085157600080fd5b50565b6000813590506108638161083d565b92915050565b600080600060608486031215610882576108816107d0565b5b60006108908682870161081e565b93505060206108a186828701610854565b92505060406108b286828701610854565b9150509250925092565b600080604083850312156108d3576108d26107d0565b5b60006108e18582860161081e565b92505060206108f285828601610854565b9150509250929050565b61090581610833565b82525050565b600060208201905061092060008301846108fc565b92915050565b60008151905061093581610807565b92915050565b600060208284031215610951576109506107d0565b5b600061095f84828501610926565b91505092915050565b600082825260208201905092915050565b7f43616c6c6572206973206e6f74206f776e6572206f66204e4654000000000000600082015250565b60006109af601a83610968565b91506109ba82610979565b602082019050919050565b600060208201905081810360008301526109de816109a2565b9050919050565b7f54686973204e4654206861736e2774206265656e20736f6c6400000000000000600082015250565b6000610a1b601983610968565b9150610a26826109e5565b602082019050919050565b60006020820190508181036000830152610a4a81610a0e565b9050919050565b7f43616e2774206275792074686973204e46540000000000000000000000000000600082015250565b6000610a87601283610968565b9150610a9282610a51565b602082019050919050565b60006020820190508181036000830152610ab681610a7a565b9050919050565b6000610ac8826107f5565b9050919050565b610ad881610abd565b8114610ae357600080fd5b50565b600081519050610af581610acf565b92915050565b600060208284031215610b1157610b106107d0565b5b6000610b1f84828501610ae6565b91505092915050565b610b31816107f5565b82525050565b6000606082019050610b4c6000830186610b28565b610b596020830185610b28565b610b6660408301846108fc565b949350505050565b60008115159050919050565b610b8381610b6e565b8114610b8e57600080fd5b50565b600081519050610ba081610b7a565b92915050565b600060208284031215610bbc57610bbb6107d0565b5b6000610bca84828501610b91565b91505092915050565b60008160601b9050919050565b6000610beb82610bd3565b9050919050565b6000610bfd82610be0565b9050919050565b610c15610c10826107f5565b610bf2565b82525050565b6000819050919050565b610c36610c3182610833565b610c1b565b82525050565b6000610c488285610c04565b601482019150610c588284610c25565b602082019150819050939250505056fea2646970667358221220e21620ee8e1389ac9b142fae491c6b0481433e349785191fadacae9f2588603d64736f6c63430008120033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80633011e16a1461005157806398590ef91461006d578063a82ba76f14610089578063f779a193146100a5575b600080fd5b61006b60048036038101906100669190610869565b6100c1565b005b610087600480360381019061008291906108bc565b61022e565b005b6100a3600480360381019061009e91906108bc565b610399565b005b6100bf60048036038101906100ba9190610869565b610685565b005b60008390503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b8152600401610116919061090b565b602060405180830381865afa158015610133573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610157919061093b565b73ffffffffffffffffffffffffffffffffffffffff16146101ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a4906109c5565b60405180910390fd5b60006101b9858561079d565b905060008060008381526020019081526020016000205411610210576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020790610a31565b60405180910390fd5b82600080838152602001908152602001600020819055505050505050565b60008290503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16636352211e846040518263ffffffff1660e01b8152600401610283919061090b565b602060405180830381865afa1580156102a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c4919061093b565b73ffffffffffffffffffffffffffffffffffffffff161461031a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610311906109c5565b60405180910390fd5b6000610326848461079d565b90506000806000838152602001908152602001600020541161037d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037490610a31565b60405180910390fd5b6000808281526020019081526020016000206000905550505050565b60006103a5838361079d565b9050600080600083815260200190815260200160002054116103fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f390610a9d565b60405180910390fd5b600083905060008173ffffffffffffffffffffffffffffffffffffffff16639478a8c06040518163ffffffff1660e01b8152600401602060405180830381865afa15801561044e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104729190610afb565b90508073ffffffffffffffffffffffffffffffffffffffff166323b872dd338473ffffffffffffffffffffffffffffffffffffffff16636352211e886040518263ffffffff1660e01b81526004016104ca919061090b565b602060405180830381865afa1580156104e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050b919061093b565b600080888152602001908152602001600020546040518463ffffffff1660e01b815260040161053c93929190610b37565b6020604051808303816000875af115801561055b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057f9190610ba6565b508173ffffffffffffffffffffffffffffffffffffffff166342842e0e8373ffffffffffffffffffffffffffffffffffffffff16636352211e876040518263ffffffff1660e01b81526004016105d5919061090b565b602060405180830381865afa1580156105f2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610616919061093b565b33876040518463ffffffff1660e01b815260040161063693929190610b37565b600060405180830381600087803b15801561065057600080fd5b505af1158015610664573d6000803e3d6000fd5b50505050600080848152602001908152602001600020600090555050505050565b60008390503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b81526004016106da919061090b565b602060405180830381865afa1580156106f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071b919061093b565b73ffffffffffffffffffffffffffffffffffffffff1614610771576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610768906109c5565b60405180910390fd5b600061077d858561079d565b905082600080838152602001908152602001600020819055505050505050565b600082826040516020016107b2929190610c3c565b60405160208183030381529060405280519060200120905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610800826107d5565b9050919050565b610810816107f5565b811461081b57600080fd5b50565b60008135905061082d81610807565b92915050565b6000819050919050565b61084681610833565b811461085157600080fd5b50565b6000813590506108638161083d565b92915050565b600080600060608486031215610882576108816107d0565b5b60006108908682870161081e565b93505060206108a186828701610854565b92505060406108b286828701610854565b9150509250925092565b600080604083850312156108d3576108d26107d0565b5b60006108e18582860161081e565b92505060206108f285828601610854565b9150509250929050565b61090581610833565b82525050565b600060208201905061092060008301846108fc565b92915050565b60008151905061093581610807565b92915050565b600060208284031215610951576109506107d0565b5b600061095f84828501610926565b91505092915050565b600082825260208201905092915050565b7f43616c6c6572206973206e6f74206f776e6572206f66204e4654000000000000600082015250565b60006109af601a83610968565b91506109ba82610979565b602082019050919050565b600060208201905081810360008301526109de816109a2565b9050919050565b7f54686973204e4654206861736e2774206265656e20736f6c6400000000000000600082015250565b6000610a1b601983610968565b9150610a26826109e5565b602082019050919050565b60006020820190508181036000830152610a4a81610a0e565b9050919050565b7f43616e2774206275792074686973204e46540000000000000000000000000000600082015250565b6000610a87601283610968565b9150610a9282610a51565b602082019050919050565b60006020820190508181036000830152610ab681610a7a565b9050919050565b6000610ac8826107f5565b9050919050565b610ad881610abd565b8114610ae357600080fd5b50565b600081519050610af581610acf565b92915050565b600060208284031215610b1157610b106107d0565b5b6000610b1f84828501610ae6565b91505092915050565b610b31816107f5565b82525050565b6000606082019050610b4c6000830186610b28565b610b596020830185610b28565b610b6660408301846108fc565b949350505050565b60008115159050919050565b610b8381610b6e565b8114610b8e57600080fd5b50565b600081519050610ba081610b7a565b92915050565b600060208284031215610bbc57610bbb6107d0565b5b6000610bca84828501610b91565b91505092915050565b60008160601b9050919050565b6000610beb82610bd3565b9050919050565b6000610bfd82610be0565b9050919050565b610c15610c10826107f5565b610bf2565b82525050565b6000819050919050565b610c36610c3182610833565b610c1b565b82525050565b6000610c488285610c04565b601482019150610c588284610c25565b602082019150819050939250505056fea2646970667358221220e21620ee8e1389ac9b142fae491c6b0481433e349785191fadacae9f2588603d64736f6c63430008120033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
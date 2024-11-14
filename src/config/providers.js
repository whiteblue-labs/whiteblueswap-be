import BlockchainService from "../services/BlockchainService.js";
import blockchainNetwork from "./blockchainNetwork.js";

export default {
    8888: new BlockchainService(blockchainNetwork.AGD.RPC, blockchainNetwork.AGD.chainId, '0x00'),
    4444: new BlockchainService(blockchainNetwork.MBC.RPC, blockchainNetwork.MBC.chainId, '0x00'),
    11155111: new BlockchainService(blockchainNetwork.SEPOLIA.RPC, blockchainNetwork.SEPOLIA.chainId, '0x00'),
    84532: new BlockchainService(blockchainNetwork.BASE_SEPOLIA.RPC, blockchainNetwork.BASE_SEPOLIA.chainId, '0x00'),
    8453: new BlockchainService(blockchainNetwork.BASE.RPC, blockchainNetwork.BASE.chainId, '0x00'),
    42161: new BlockchainService(blockchainNetwork.ARBITRUM.RPC, blockchainNetwork.ARBITRUM.chainId, '0x00'),
    167000: new BlockchainService(blockchainNetwork.TAIKO.RPC, blockchainNetwork.TAIKO.chainId, '0x00'),
}
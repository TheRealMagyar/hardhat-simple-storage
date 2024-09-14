require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./tasks/block-number");
require("solidity-coverage");

const SEPOLIA_RPC_URL =
    process.env.SEPOLIA_RPC_URL || "https://1rpc.io/sepolia";
const METAMASK_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY || "0x454...";

const GANACHE_RPC_URL = process.env.GANACHE_RPC_URL || "http://127.0.0.1:7545";
const GANACHE_PRIVATE_KEY = process.env.GANACHE_PRIVATE_KEY || "0x2323323....";

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key";

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [METAMASK_PRIVATE_KEY],
            chainId: 11155111,
        },
        ganache: {
            url: GANACHE_RPC_URL,
            account: GANACHE_PRIVATE_KEY,
            chainId: 1337,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            //accounts: Thanks hardhat lmfao!
            chainId: 31337,
        },
    },
    solidity: "0.8.8",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    sourcify: {
        enabled: true,
    },
    gasReporter: {
        enabled: false,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: "ETH",
        offline: true,
    },
};

export const Networks = {
    InfuraMainNet: {
        name: "INFURA-MAINNET",
        address: "https://mainnet.infura.io/v3/9f40aaf18aa744a2a68b754027c36eab",
        chainId: 1,
        etherscanAddressTx: "https://etherscan.io/tx/"              // "https://infura.etherscan.io/tx/{txnHash}"
    },
    InfuraRopsten: {
        name: "INFURA-ROPSTEN",
        address: "https://mainnet.infura.io/v3/9f40aaf18aa744a2a68b754027c36eab",
        chainId: 3,
        etherscanAddressTx: "https://ropsten.etherscan.io/tx/"              // "https://infura.etherscan.io/tx/{txnHash}"
    },
    InfuraKovan: {
        name: "INFURA-KOVAN",
        address: "https://kovan.infura.io/v3/9f40aaf18aa744a2a68b754027c36eab",
        chainId: 42,
        etherscanAddressTx: "https://kovan.etherscan.io/tx/"            // "https://infura.etherscan.io/tx/{txnHash}"
    },
    InfuraRikeby: {
        name: "INFURA-RINKEBY",
        address: "https://rinkeby.infura.io/v3/9f40aaf18aa744a2a68b754027c36eab",
        chainId: 2,
        etherscanAddressTx: "https://infura.etherscan.io/tx/"       // "https://infura.etherscan.io/tx/{txnHash}"
    }
}


export default Networks;
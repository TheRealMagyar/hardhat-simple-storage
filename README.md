# Hardhat Simple Storage

## Description

Basically, it is a simple Hardhat project. The project contains a Solidity smart contract, which can be deployed to various blockchains such as Sepolia, Ganache, and, of course, Hardhat’s local chain. This project serves as an example of how to deploy smart contracts easily.

### Folders

- **Contract folder**  
  You can put your contracts here.

- **Scripts folder**  
  This folder is for your scripts.

- **Tasks folder**  
  Here you can create custom Hardhat tasks.

- **Test folder**  
  Here you can write tests for your scripts.

## 👋 Quick start

**1.** Download the repo:  
```bash
git clone https://github.com/TheRealMagyar/hardhat-simple-storage
```

**2.** Go into the project folder:  
```bash
cd hardhat-simple-storage
```

**3.** Install the packages (I use yarn package manager, but you can use npm as well):  
```bash
yarn
```

**4.** Create a **.env** file in the project folder and paste the following:

```bash
SEPOLIA_RPC_URL=https://1rpc.io/sepolia
METAMASK_PRIVATE_KEY=key
GANACHE_RPC_URL=HTTP://127.0.0.1:7545
GANACHE_PRIVATE_KEY=key
ETHERSCAN_API_KEY=api-key
COINMARKETCAP_API_KEY=api-key
```

fill in with your api keys and private keys.

**5.** Create a .gitignore file (it is optional)

```bash
node_modules
artifacts
cache
coverage
coverage.json
gas-report.txt
.env
.DS_Store
```

## ⚙️ Usage
### **Deploy**
```bash
yarn hardhat run scripts/deploy.js
```

### **Deploy on different chains**
_(You can use another networks also, but at first you have to setup them in hardhat.config.js)_
```bash
yarn hardhat run scripts/deploy.js --netowork sepolia
```

### **Help**
```bash
yarn hardhat help
```

### **Run tests**
```bash
yarn hardhat test
```

### **It shows some test address**
```bash
npx hardhat node
```

### **Compile contracts**
```bash
yarn hardhat compile
```

### **Console**
_(Run Codes Easily In The Console)_
```bash
yarn hardhat console
```
```bash
yarn hardhat console --network sepolia
```

### **Block number**
_(it checks the current block number on the chain)_
```bash
yarn hardhat block-number --network sepolia
```

### **Gas reporter**
_(it reports you the transaction costs)_
At first you have to go in the hardhat.config.js file and enable the gas-reporter.
It should look like this:

```js
  gasReporter: {
           enabled: true,
           outputFile: "gas-report.txt",
           noColors: true,
           currency: "USD",
           coinmarketcap: COINMARKETCAP_API_KEY,
           token: "ETH",
           offline: true,
       },
```

Run a test: `yarn hardhat test` and it'll create a **gas-report.txt** file with the report for you.

### **Coverage**
_It is an important tool for testing. You can see which rows are covered in the SimpleStorage.sol file._
```bash
yarn hardhat coverage
```

## 🔧 Settings (hardhat.config.js)
These are the default settings. The gas-reporter is disabled in default mode.
At the networks you can add another networks.
If you use another solidity version you can change it in the 20th row.

```js
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
```

## 📦 Packages
**Hardhat**
```bash
yarn add --dev hardhat
```

## 👷‍♀️ Hardhat installation (if you need this)
```bash
yarn hardhat
```

-   create a javascript project
-   root (default)
-   .gitignore YES
-   Do you want dependencies? YES

## 🍓 Prettier

```bash
yarn add --dev prettier prettier-plugin-solidity
```

//imports
const { deployContract } = require("@nomicfoundation/hardhat-ethers/types");
const { ethers, run, network } = require("hardhat");

//async main
async function main() {
    const SimpleStorageFactory =
        await ethers.getContractFactory("SimpleStorage");
    console.log("Deploying contract...");
    const SimpleStorage = await SimpleStorageFactory.deploy();
    await SimpleStorage.getDeployedCode();
    const contractAddress = await SimpleStorage.getAddress();
    console.log(`Deployed contract to: ${contractAddress}`);
    //What happens when we deploy to our hardhat network? | Ha a chain id 4 azaz nem default networkon vagyunk és van api kulcsunk, akkor fusson le a verify etherscanen
    if (network.config.chainId == 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block txes...");
        await SimpleStorage.waitForDeployment(6);
        await verify(contractAddress, []);
        console.log("Verify has been done");
    }

    await SimpleStorage.waitForDeployment(2);
    const currentValue = await SimpleStorage.retrieve();
    console.log(`Current Value is: ${currentValue}`);

    // update current value
    const transactionResponse = await SimpleStorage.store(7);
    await transactionResponse.wait(1);
    const updatedValue = await SimpleStorage.retrieve();
    console.log(`Updated Value is ${updatedValue}`);
}

async function verify(contractAddress, args) {
    console.log("Verifying contract...");
    try {
        await run("verify:sourcify", {
            //valamiért etherscan api nem jó (sepolia test neten), de sourcify működik.
            address: contractAddress, //szerződés címe
            constructorArguments: args,
        });
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified!");
        } else {
            console.log(e);
        }
    }
}

//main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

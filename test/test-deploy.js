const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", function () {
    let SimpleStorageFactory, SimpleStorage;
    beforeEach(async function () {
        SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        SimpleStorage = await SimpleStorageFactory.deploy();
    });
    it("Should start with a favourite number 0", async () => {
        const currentValue = await SimpleStorage.retrieve();
        const expectedValue = "0";
        //assert
        //expect
        assert.equal(currentValue.toString(), expectedValue);
    });
    it("Should update when we call store", async () => {
        const expectedValue = "7";
        const transactionResponse = await SimpleStorage.store(expectedValue);
        await transactionResponse.wait(1);

        const currentValue = await SimpleStorage.retrieve();
        assert.equal(currentValue.toString(), expectedValue);
    });
    it("Should return 2 when we call it.", async () => {
        const currentValue = await SimpleStorage.add();
        const expectedValue = "2";

        assert.equal(currentValue.toString(), expectedValue);
    });
    it("Should add a person and the favourite number of the person.", async () => {
        const person = "Orban Viktor";
        const favouriteNumber = "5";
        const transactionResponse = await SimpleStorage.addPerson(
            person,
            favouriteNumber,
        );
        await transactionResponse.wait(1);
        const currentValue = await SimpleStorage.getPerson(person);
        const expectedValue = favouriteNumber;

        assert.equal(currentValue.toString(), expectedValue);
    });
});

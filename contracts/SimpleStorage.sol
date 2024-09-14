//SPDX-License-Identifier: MIT
pragma solidity 0.8.8;

contract SimpleStorage {
    // Ez inicializálva lesz nullára!
    uint256 public favouriteNumber;

    mapping(string => uint256) public nameToFavouriteNumber;

    struct People {
        uint256 favouriteNumber;
        string name;
    }

    // megvalósítjuk a strukturát
    People[] public people;

    function store(uint256 _favouriteNumber) public virtual {
        favouriteNumber = _favouriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favouriteNumber;
    }

    function add() public pure returns (uint256) {
        return 1 + 1;
    }

    function addPerson(string memory _name, uint256 _favouriteNumber) public {
        people.push(People(_favouriteNumber, _name));
        nameToFavouriteNumber[_name] = _favouriteNumber;
    }

    function getPerson(string memory _name) public view returns (uint256) {
        return nameToFavouriteNumber[_name];
    }
}

// contract address: 0xd9145CCE52D386f254917e481eB44e9943F39138

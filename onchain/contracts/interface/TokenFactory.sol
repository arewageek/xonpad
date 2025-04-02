// SPDX-License-Identifier: MIT

pragma solidity ^0.8.26;

import {ERC20Base} from '../ERC20Base.sol';

interface ITokenFactory {
    struct Token {
        ERC20Base contractAddy;
        uint initialSupply;
        string name;
        string symbol;
    }

    function initializeContract(string memory _name, string memory _symbol, uint256 _initialSupply)  external;
    // function provideLiquidity(address _ca, uint amount) external;
}
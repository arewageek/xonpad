// SPDX-License-Identifier: MIT

pragma solidity ^0.8.26;

import {ERC20Base} from './ERC20Base.sol';
import {ITokenFactory} from "./interface/TokenFactory.sol";
import {ERC20Base} from "./ERC20Base.sol";

contract TokenFactory is ITokenFactory {

    ERC20Base[] public contracts;
    mapping(ERC20Base => Token) public tokens;
    
    function initializeContract(string memory _name, string memory _symbol, uint256 _initialSupply)  external {
        ERC20Base token = new ERC20Base(_name, _symbol, msg.sender, _initialSupply);
        contracts.push(token);
        tokens[token] = Token(token, _initialSupply, _name,  _symbol);
    }

    // function provideLiquidity(address _ca, uint _amount) external {
    //     uint availableLiquidity = this.(ERC20Base).value;
    //     availableLiquidity + _amount;
    //     this.(ERC20Base).amount;
    // }   
}
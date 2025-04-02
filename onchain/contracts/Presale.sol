// SPDX-License-Identifier: MIT

pragma solidity ^0.8.26;

import { IXonPresale } from "./interface/IPresale.sol";
import { TokenFactory } from "./TokenFactory.sol";
import { AccessControl } from "./AccessControl.sol";

contract Presale is IXonPresale, AccessControl, TokenFactory {
    
    // one to one mapping ease scan;
    mapping (address => Token) public deployed;
    // token array for easy indexing;
    Token[] public TokensByIndex;

    function initializePresale (address _tokenAddress) external {
        
        require(deployed[_tokenAddress].ca != address(0), "Invalid contract address");
        
    }
}
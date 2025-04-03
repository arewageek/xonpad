// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {ERC20Base} from "./ERC20Base.sol";
import {ITokenFactory} from "./interface/ITokenFactory.sol";
import {AccessControl} from "./AccessControl.sol";

contract TokenFactory is ITokenFactory, AccessControl {
    address[] public tokenContracts; 
    mapping(address => Token) public tokens;
    uint256 fee;

    event TokenCreated(address indexed tokenAddress, string name, string symbol, uint256 initialSupply, address owner);
    event FeeUpdated(uint _newFee);

    function initializeContract(
        string memory _name,
        string memory _symbol,
        uint256 _initialSupply
    ) external payable {
        _chargeFee();

        ERC20Base token = _createToken(_name, _symbol, _initialSupply);
        
        emit TokenCreated(address(token), _name, _symbol, _initialSupply, msg.sender);
    }

    function updateFee(uint256 _newFee) external onlyRole(ADMIN_ROLE) {
        fee = _newFee;
        
        emit FeeUpdated(_newFee);
    }

    // internal functions
    function _chargeFee() internal {
        require(msg.value >= fee, "Insufficient fee sent");

        payable(owner).transfer(fee);
    }

    function _createToken(
        string memory _name,
        string memory _symbol,
        uint256 _initialSupply
    ) internal returns (ERC20Base){
        ERC20Base token = new ERC20Base(_name, _symbol, msg.sender, _initialSupply);
        tokenContracts.push(address(token));
        tokens[address(token)] = Token(address(token), _initialSupply, _name, _symbol);

        return token;
    }
}

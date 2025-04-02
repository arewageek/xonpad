// SPDX-License-Identifier: MIT

pragma solidity ^0.8.26;

contract AccessControl {
    mapping(address => bytes32) public roles;
    
    constructor() {
        roles[msg.sender] = keccak256(abi.encodePacked("ADMIN"));
    }

    modifier onlyRole(string memory _role){
        _hasRole(msg.sender, keccak256(abi.encodePacked(_role)));
        _;
    }
    
    function _hasRole(address _account, bytes32 _role) internal view returns (bytes32) {
        if(roles[_account] != _role){
            revert("Unauthorized!!");
        }
        return _role;
    }

    function _revertRole(address _account) internal onlyRole("ADMIN"){
        roles[_account] = keccak256(abi.encodePacked(address(0)));
    }

    function _grantRole (address _account, string memory _role) internal onlyRole("ADMIN"){
        roles[_account] = keccak256(abi.encodePacked(_role));
    }
    
}
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.26;

contract AccessControl {
    mapping(address => bytes32) public roles;
    
    constructor() {
        roles[msg.sender] = keccak256(abi.encodePacked("ADMIN"));
    }
    
    modifier isValidCaller (address _account){
        _hasRole(_account, keccak256(abi.encodePacked("ADMIN")));
        _;
    }
    
    function _hasRole(address _account, bytes32 _role) internal view returns (bytes32) {
        if(roles[_account] != _role){
            revert("Unauthorized!!");
        }
        return _role;
    }

    function _revertRole(address _account) internal isValidCaller(msg.sender){
        roles[_account] = keccak256(abi.encodePacked(address(0)));
    }

    function _grantRole (address _account, string memory _role) internal isValidCaller(msg.sender){
        roles[_account] = keccak256(abi.encodePacked(_role));
    }
}
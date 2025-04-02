// SPDX-License-Identifier: MIT

pragma solidity ^0.8.26;

contract AccessControl {
    address owner;
    mapping(address => bytes32) public roles;

    bytes32 ADMIN_ROLE = keccak256(abi.encodePacked("ADMIN"));
    
    event ContractRenounced();
    event ContractTransferred(address newOwner);
    event RoleGranted(address indexed account, bytes32 role);
    event RoleReverted(address account);
    
    constructor() {
        roles[msg.sender] = ADMIN_ROLE;
        owner = msg.sender;
    }

    modifier onlyRole (bytes32 _role){
        require(roles[msg.sender] == _role);
        _;
    }

    function renounceOwnership() external onlyRole(ADMIN_ROLE) {
        owner = address(0);
        
        emit ContractRenounced();
    }

    function transferOwnership(address _newOwner) external onlyRole(ADMIN_ROLE){
        require(_newOwner != address(0));
        owner = _newOwner;

        emit ContractTransferred(_newOwner);
    }
    
    function _hasRole(address _account, bytes32 _role) internal view returns (bytes32) {
        if(roles[_account] != _role){
            revert("Unauthorized!!");
        }
        return _role;
    }

    function _revertRole(address _account) internal onlyRole(ADMIN_ROLE){
        roles[_account] = keccak256(abi.encodePacked(address(0)));

        emit RoleReverted(_account);
    }

    function _grantRole (address _account, bytes32 _role) internal onlyRole(ADMIN_ROLE){
        roles[_account] = keccak256(abi.encodePacked(_role));

        emit RoleGranted(_account, _role);
    }
    
}
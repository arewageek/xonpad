// SPDX-License-Identifier: MIT

pragma solidity ^0.8.26;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import {ERC20Pausable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract ERC20Base is ERC20, Ownable, ERC20Burnable, ERC20Pausable {
    constructor(string memory name, string memory symbol, address _owner, uint initialSupply) ERC20(name, symbol) Ownable(_owner) {
        _mint(_owner, initialSupply * 10 ** decimals());
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public  onlyOwner {
        _unpause();
    }

    function mint(address to, uint amount) public  onlyOwner {
        _mint(to, amount);
    }

    function _update(address _from, address _to, uint _value) internal override(ERC20, ERC20Pausable){
        super._update(_from, _to, _value);
    }
}
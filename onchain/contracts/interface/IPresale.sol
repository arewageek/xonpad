// SPDX-License-Identifier: MIT

pragma solidity ^0.8.3;

interface IXonPresale {
    // core functions
    function deposit() external;
    function withdrawFunds() external;
    function claimTokens() external;
    function refund() external;
    function endPresale() external;

    // presale setuo and control
    function initialize() external;
    function setVestingSchedule() external;
    function setTieredPricing() external;
    function pausePresale() external;
    function unpausePresale() external;

    // fetching data
    function getPresaleStatus() external view returns (bool);
    function getUserContribution(address _user) external returns (uint256);
    function getContributionTier(address _user) external returns (uint256);
    function getAvailableTokens(address _user) external returns (uint256);
    function getSoftCap() external returns (uint256);
    function getHardCap() external returns (uint256);
    function getPresaleDuration() external returns (uint256);
    function getVestingSchedule() external returns (uint256);
    function getTieredPricing() external returns (uint256);
    function getRaisedAmount() external returns (uint256);
    
    // fetch token information
    function getPresaleToken() external returns (address);
    function getPresaleTokenName() external returns (string memory);
    function getPresaleTokenSymbol() external returns (string memory);
    function getPresaleTokenDecimals() external returns (uint256);
    function getPresaleTokenTotalSupply() external returns (uint256);
    function getPresaleTokenPrice() external returns (uint256);
}
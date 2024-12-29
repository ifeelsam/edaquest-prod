// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EdaQuestSubscription is Ownable(msg.sender) {
    struct Module {
        uint256 price;
        uint256 duration;
        bool isActive;
    }

    struct Subscription {
        uint256 startTime;
        uint256 expiryTime;
        bool isActive;
    }

    mapping(uint256 => Module) public modules;
    mapping(address => mapping(uint256 => Subscription)) public userSubscriptions;
    
    uint256 public moduleCount;
    IERC20 public paymentToken;

    event ModuleCreated(uint256 moduleId, uint256 price, uint256 duration);
    event SubscriptionPurchased(address user, uint256 moduleId, uint256 expiryTime);
    event SubscriptionCancelled(address user, uint256 moduleId);

    constructor(address _paymentToken) {
        paymentToken = IERC20(_paymentToken);
    }

    function createModule(uint256 _price, uint256 _duration) external onlyOwner {
        uint newModuleId = moduleCount;
        moduleCount++;
        modules[newModuleId] = Module({
            price: _price,
            duration: _duration,
            isActive: true
        });
        
        emit ModuleCreated(newModuleId, _price, _duration);
    }

    function subscribe(uint256 _moduleId) external {
        Module memory module = modules[_moduleId];
        require(module.isActive, "Module is not active");
        require(paymentToken.balanceOf(msg.sender) >= module.price, "Insufficient balance");
        require(paymentToken.allowance(msg.sender, address(this)) >= module.price, "Insufficient allowance");

        paymentToken.transferFrom(msg.sender, address(this), module.price);

        uint256 startTime = block.timestamp;
        uint256 expiryTime = startTime + module.duration;

        userSubscriptions[msg.sender][_moduleId] = Subscription({
            startTime: startTime,
            expiryTime: expiryTime,
            isActive: true
        });

        emit SubscriptionPurchased(msg.sender, _moduleId, expiryTime);
    }

    function hasAccess(address _user, uint256 _moduleId) public view returns (bool) {
        Subscription memory sub = userSubscriptions[_user][_moduleId];
        return sub.isActive && block.timestamp < sub.expiryTime;
    }

    function cancelSubscription(uint256 _moduleId) external {
        Subscription storage sub = userSubscriptions[msg.sender][_moduleId];
        require(sub.isActive, "No active subscription");
        sub.isActive = false;
        emit SubscriptionCancelled(msg.sender, _moduleId);
    }

    function withdrawFunds() external onlyOwner {
        uint256 balance = paymentToken.balanceOf(address(this));
        require(balance > 0, "No funds to withdraw");
        paymentToken.transfer(owner(), balance);
    }
}

// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol";
import {ERC1155Burnable} from "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract edaQuest is ERC1155, Ownable, ERC1155Burnable {
    struct UserSchema {
        address userAddress;
        string subscriptionType;
        bool hasSubscription;
        uint256 totalXP;
        uint256 level;
        uint256 questsCompleted;
        uint256 currentStreak;
        uint256 subscriptionTakenAt;
        uint256 amountPaid;
    }

    mapping(address => UserSchema) public Users;
    mapping(uint256 => string) private _tokenURIs;

    uint256 constant MONTHLY_SUBSCRIPTION_DURATION = 30 days; // 1 months
    uint256 constant YEARLY_SUBSCRIPTION_DURATION = 365 days; // 1 year
    
    uint256 constant MONTHLY_SUBSCRIPTION_PRICE = 0.0001 ether;
    uint256 constant YEARLY_SUBSCRIPTION_PRICE = 0.0010 ether;

    constructor(address initialOwner) ERC1155("") Ownable(initialOwner) {
        _tokenURIs[1] = "ipfs://bafkreihftsqvo4wg6bgf7n5cs3664wb5bm6r3wrsq537h6xf4ut4nxqdoi";
        _tokenURIs[2] = "ipfs://bafkreiavoaru7dw5kop7yetozcp2xpsxze6paqhbwocqhr5lov6ohudhae";
    }

    function setURI(uint256 tokenId, string memory newuri) public onlyOwner {
        _tokenURIs[tokenId] = newuri;
    }

    function purchasedSubscription(address account, string memory subscription_type) public payable {
        uint256 requiredAmount;
        uint256 tokenId;
        
        if (keccak256(abi.encodePacked(subscription_type)) == keccak256(abi.encodePacked("monthly"))) {
            requiredAmount = MONTHLY_SUBSCRIPTION_PRICE;
            tokenId = 1;
        } else if (keccak256(abi.encodePacked(subscription_type)) == keccak256(abi.encodePacked("yearly"))) {
            requiredAmount = YEARLY_SUBSCRIPTION_PRICE;
            tokenId = 2;
        } else {
            revert("Invalid subscription type");
        }
        
        require(msg.value >= requiredAmount, "Insufficient payment for subscription");
        
        Users[account].userAddress = account;
        Users[account].subscriptionType = subscription_type;
        Users[account].hasSubscription = true;
        Users[account].totalXP = 10;
        Users[account].level = 1;
        Users[account].subscriptionTakenAt = block.timestamp;
        Users[account].amountPaid = requiredAmount;
        
        _mint(account, tokenId, 1, "");
        
        // return any excess payment
        if (msg.value > requiredAmount) {
            payable(msg.sender).transfer(msg.value - requiredAmount);
        }
    }

    function checkAndUpdateSubscriptionStatus(address account) public returns (bool) {
        if (Users[account].userAddress == address(0) || !Users[account].hasSubscription) {
            return false;
        }
        
        bool isExpired = false;
        uint256 tokenId;
        
        if (keccak256(abi.encodePacked(Users[account].subscriptionType)) == keccak256(abi.encodePacked("monthly"))) {
            isExpired = block.timestamp > Users[account].subscriptionTakenAt + MONTHLY_SUBSCRIPTION_DURATION;
            tokenId = 1;
        } else if (keccak256(abi.encodePacked(Users[account].subscriptionType)) == keccak256(abi.encodePacked("yearly"))) {
            isExpired = block.timestamp > Users[account].subscriptionTakenAt + YEARLY_SUBSCRIPTION_DURATION;
            tokenId = 2;
        }
        
        if (isExpired) {
            Users[account].hasSubscription = false;
            
            // burn the NFT if the subscription has expired
            if (balanceOf(account, tokenId) > 0) {
                _burn(account, tokenId, 1);
            }
            
            return false;
        }
        
        return true;
    }

    function updateUsersStatus(address account) public onlyOwner {
        require(Users[account].userAddress != address(0), "User does not exist");
        
        bool isActive = checkAndUpdateSubscriptionStatus(account);
        require(isActive, "Subscription is not active or has expired");
        
        Users[account].totalXP += 100;
        Users[account].level += 1;
        Users[account].questsCompleted += 1;
        Users[account].currentStreak += 1;
    }

    function getUserData(address account) public view returns (UserSchema memory) {
        return Users[account];
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }

    function uri(uint256 id) public view virtual override returns (string memory) {
        string memory tokenURI = _tokenURIs[id];
        
        if (bytes(tokenURI).length > 0) {
            return tokenURI;
        }
        
        return string(abi.encodePacked(super.uri(id), Strings.toString(id), ".json"));
    }
    
}

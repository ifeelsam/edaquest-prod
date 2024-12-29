import { expect } from "chai";
import { ethers } from "hardhat";
import { parseEther } from "ethers";
import { Contract } from "ethers";
import type { MockERC20, EdaQuestSubscription } from "../typechain-types";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

describe("EdaQuestSubscription", function () {
    let edaQuest: EdaQuestSubscription;
    let owner: HardhatEthersSigner;
    let mockToken: MockERC20;
    let user: HardhatEthersSigner;
    beforeEach(async function () {
        [owner, user] = await ethers.getSigners();

        const MockToken = await ethers.getContractFactory("MockERC20");
        mockToken = await MockToken.deploy();
        await mockToken.waitForDeployment();

        const EdaQuestSubscription = await ethers.getContractFactory("EdaQuestSubscription");
        edaQuest = await EdaQuestSubscription.deploy(await mockToken.getAddress());
        await edaQuest.waitForDeployment();
    });

    it("Should create a module", async function () {
        await edaQuest.createModule(parseEther("1"), 30 * 24 * 60 * 60);
        const module = await edaQuest.modules(0);
        expect(module.isActive).to.equal(true);
    });

    it("Should allow subscription purchase", async function () {
        await edaQuest.createModule(parseEther("1"), 30 * 24 * 60 * 60);
        await mockToken.mint(user.address, parseEther("10"));
        
        await mockToken.connect(user).approve(await edaQuest.getAddress(), parseEther("1"));
        await edaQuest.connect(user).subscribe(0);
        expect(await edaQuest.hasAccess(user.address, 0)).to.equal(true);
    });
});
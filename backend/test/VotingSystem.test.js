const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("VotingSystem", function () {
  it("Should work", async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();
    
    const VotingSystem = await ethers.getContractFactory("VotingSystem");
    const votingSystem = await VotingSystem.deploy();
    await votingSystem.waitForDeployment();
    
    expect(await votingSystem.owner()).to.equal(owner.address);
    expect(await votingSystem.getProposalCount()).to.equal(0);
    
    await votingSystem.addProposal("Test Proposal", "Test Description");
    expect(await votingSystem.getProposalCount()).to.equal(1);
    
    await votingSystem.connect(addr1).vote(0);
    await votingSystem.connect(addr2).vote(0);
    
    const result = await votingSystem.getProposal(0);
    expect(result[0]).to.equal("Test Proposal");
    expect(result[2]).to.equal(2);
  });
}); 
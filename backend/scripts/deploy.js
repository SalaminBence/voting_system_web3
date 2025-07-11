const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying VotingSystem...");

  const VotingSystem = await ethers.getContractFactory("VotingSystem");
  const votingSystem = await VotingSystem.deploy();
  await votingSystem.waitForDeployment();

  const address = await votingSystem.getAddress();
  console.log("Contract deployed to:", address);

  await votingSystem.addProposal("Should we upgrade the system?", "Vote yes or no");
  console.log("Added sample proposal");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 
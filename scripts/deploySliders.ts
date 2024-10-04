const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const MySliders = await hre.ethers.getContractFactory("Sliders");
  const myNFT = await MySliders.deploy(deployer.address);

  console.log("MyNFT deployed to:", await myNFT.getAddress());

  const MainEvent = await hre.ethers.getContractFactory("EventContract");
  const myEvent = await MainEvent.deploy(deployer.address);

  console.log("MyEventT deployed to:", await myEvent.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

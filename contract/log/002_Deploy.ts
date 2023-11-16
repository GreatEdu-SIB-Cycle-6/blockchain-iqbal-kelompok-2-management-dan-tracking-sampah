import { ethers } from "hardhat";

async function main() {
  const instance_dropPoint = await ethers.deployContract("DropPointT");
  await instance_dropPoint.waitForDeployment();
  const addressDroppoint = await instance_dropPoint.getAddress();
  console.log(`DropPointT: ${addressDroppoint}`);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
import { DeployFunction } from 'hardhat-deploy/dist/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async ({
  deployments,
  ethers,
}: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments;
  const accounts = await ethers.getSigners();

  const deployer = accounts[0];
  console.log('deployer address', deployer.address);

  const library = await deploy('DropPointT', {
    contract: 'DropPointT',
    from: deployer.address,
    args: [],
    gasLimit: 10000000,
  });
  console.log('DropPointT deployed at ', library.address);
};
func.tags = ['DropPointT'];
export default func;
import chai from 'chai';
import { DropPointT } from '../typechain';
import { ethers } from 'hardhat';
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers';

const { expect } = chai;

describe('Testing DropPointT', async () => {
  let Library: DropPointT;
  let Admin: HardhatEthersSigner;
  let NotAdmin: HardhatEthersSigner;

  beforeEach(async () => {
    try {
      const accounts = await ethers.getSigners();
      Admin = accounts[0];
      NotAdmin = accounts[1];

      Library = await (
        await ethers.getContractFactory('DropPointT')
      )
        .connect(Admin)
        .deploy();

        console.log('Admin accessed inputDataPenampungan:', await Admin.getAddress());
        console.log('NotAdmin accessed inputDataPenampungan:', await NotAdmin.getAddress());
      
    } catch (error) {
      console.error('Error during setup:', error);
      throw error;
    }


  async function main() {
    const Drop = await ethers.getContract<DropPointT>("DropPointT");
    const [admins] = await ethers.getSigners();
    const addPenampung = await Drop.connect(admins).inputDataPenampungan('Matahari', 'rifki@','bom', 23,[1] );
    
    
    console.log("buku berhasil ditambahkan");
});
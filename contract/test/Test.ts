import { ethers } from "hardhat";
import chai from 'chai';
import { DropPointT } from '../typechain';
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers';

const { expect } = chai;

describe("DropPointT", () => {
  let dropPointT: DropPointT;

  beforeEach(async () => {
    const DropPointTFactory = await ethers.getContractFactory("DropPointT");
    dropPointT = (await DropPointTFactory.deploy()) as DropPointT;
    await dropPointT.deployed();
  });

  it("should input data to penampungan", async () => {
    const result = await dropPointT.inputDataPenampungan(
      1,
      "User",
      "user@example.com",
      "Plastic",
      10,
      [1]
    );

    await result.wait();
    // Add assertions or checks here
  });

  it("should verify data sampah", async () => {
    await dropPointT.inputDataPenampungan(
      1,
      "User",
      "user@example.com",
      "Plastic",
      10,
      [1]
    );

    const result = await dropPointT.verifikasiDataSampah(1);

    await result.wait();
    // Add assertions or checks here
  });

  it("should send to next drop point", async () => {
    await dropPointT.inputDataPenampungan(
      1,
      "User",
      "user@example.com",
      "Plastic",
      10,
      [1]
    );
    await dropPointT.verifikasiDataSampah(1);

    const result = await dropPointT.kirimKeDropPointSelanjutnya(1);

    await result.wait();
    // Add assertions or checks here
  });
});

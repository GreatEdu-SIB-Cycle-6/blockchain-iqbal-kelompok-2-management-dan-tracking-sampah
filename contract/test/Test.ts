import { ethers } from 'hardhat';
import { Signer } from 'ethers';
import { expect } from 'chai';
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers';
import { DropPointT } from '../typechain';
import { log } from 'console';

describe('DropPointT Contract - inputDataPenampungan', function () {
  let owner: HardhatEthersSigner;
  let user: HardhatEthersSigner;
  let dropPointT: DropPointT;

  beforeEach(async function () {
    try {
      const accounts = await ethers.getSigners();
      owner: accounts[0];
      user: accounts[1];
  
      [owner] = await ethers.getSigners();
      [user] = await ethers.getSigners();
  
      const DropPointT = await ethers.getContractFactory('DropPointT');
      dropPointT = await DropPointT.deploy();    
    } catch (error) {
      console.log("error");
    }
  });

  it('Owner Input Transaksi Data Penampung', async function () {
    const adminAddress = await owner.getAddress();

    // Simulate sample data for input
    const sampleData = {
      namaPengguna: 'Admin User',
      emailPengguna: 'admin@example.com',
      jenisSampah: 'Plastic',
      berat: 100,
      dropPoints: [1], 
    };

    // Call the function to input data as admin
    await dropPointT.connect(owner).inputDataPenampungan(
      sampleData.namaPengguna,
      sampleData.emailPengguna,
      sampleData.jenisSampah,
      sampleData.berat,
      sampleData.dropPoints
    );
  });

  it('Non - Owner Input Transaksi Data Penampung', async function () {
    const userAddress = await user.getAddress();

    // Simulate sample data for input by a user
    const sampleData = {
      namaPengguna: 'Regular User',
      emailPengguna: 'user@example.com',
      jenisSampah: 'Glass',
      berat: 50,
      dropPoints: [1], 
    };

    // Call the function to input data as a regular user
    await dropPointT.connect(user).inputDataPenampungan(
      sampleData.namaPengguna,
      sampleData.emailPengguna,
      sampleData.jenisSampah,
      sampleData.berat,
      sampleData.dropPoints
    );

  });

  it('Owner Verifikasi Transaksi', async function () {
    const adminAddress = await owner.getAddress();

  // Simulate sample data for input by a user
  const sampleData = {
    namaPengguna: 'Regular User',
    emailPengguna: 'user@example.com',
    jenisSampah: 'Glass',
    berat: 50,
    dropPoints: [1],
  };

  // Call the function to input data as a regular user
  await dropPointT.inputDataPenampungan(
    sampleData.namaPengguna,
    sampleData.emailPengguna,
    sampleData.jenisSampah,
    sampleData.berat,
    sampleData.dropPoints
  );

  // Get the latest counter value to determine the sampleId
  const latestCounter = await dropPointT.jumlahsampah();

  // Use the latest counter value as the sampleId
  const sampleId = Number(latestCounter);

    // Call the function to verify data sampah by owner
    await dropPointT.connect(owner).verifikasiDataSampah(sampleId);
  });

  it('Non - Owner Verifikasi Transaksi', async function () {
    const userAddress = await user.getAddress();

    // Simulate sample data for input by a user
    const sampleData = {
      namaPengguna: 'Regular User',
      emailPengguna: 'user@example.com',
      jenisSampah: 'Glass',
      berat: 50,
      dropPoints: [1],
    };
  
    // Call the function to input data as a regular user
    await dropPointT.inputDataPenampungan(
      sampleData.namaPengguna,
      sampleData.emailPengguna,
      sampleData.jenisSampah,
      sampleData.berat,
      sampleData.dropPoints
    );
  
    // Get the latest counter value to determine the sampleId
    const latestCounter = await dropPointT.jumlahsampah();
  
    // Use the latest counter value as the sampleId
    const sampleId = Number(latestCounter); 
    // Try to call the function to verify data sampah with a non-owner account
    await expect(dropPointT.connect(user).verifikasiDataSampah(sampleId)).to.be.revertedWith(
      'Ownable: caller is not the owner'
    );
  });

  it('Owner kirim Ke drop point selanjutnya', async function () {
    const adminAddress = await owner.getAddress();

    const sampleData = {
      namaPengguna: 'Admin',
      emailPengguna: 'admin@example.com',
      jenisSampah: 'Plastik',
      berat: 30,
      dropPoints: [1], 
    };
  
    // Panggil fungsi untuk memasukkan data sebagai admin
    await dropPointT.connect(owner).inputDataPenampungan(
      sampleData.namaPengguna,
      sampleData.emailPengguna,
      sampleData.jenisSampah,
      sampleData.berat,
      sampleData.dropPoints
    );
  
    // Dapatkan nilai counter terbaru untuk menentukan sampleId
    const latestCounter = await dropPointT.jumlahsampah();
  
    // Gunakan nilai counter terbaru sebagai sampleId
    const sampleId = Number(latestCounter);

    await dropPointT.connect(owner).verifikasiDataSampah(sampleId);
  
    // Panggil fungsi untuk mengirim data ke drop point selanjutnya oleh admin
    await dropPointT.connect(owner).kirimKeDropPointSelanjutnya(sampleId);

  });

  it('Non - Owner kirim Ke drop point selanjutnya', async function () {
    const userAddress = await user.getAddress();
    const adminAddress = await owner.getAddress();

    const dataContoh = {
      namaPengguna: 'Pengguna Lain',
      emailPengguna: 'lainnya@example.com',
      jenisSampah: 'Logam',
      berat: 20,
      dropPoints: [1], // Array contoh drop points
    };
  
    // Panggil fungsi untuk memasukkan data sebagai pengguna lain yang bukan admin
    await dropPointT.inputDataPenampungan(
      dataContoh.namaPengguna,
      dataContoh.emailPengguna,
      dataContoh.jenisSampah,
      dataContoh.berat,
      dataContoh.dropPoints
    );
  
    // Dapatkan nilai counter terbaru untuk menentukan sampleId
    const latestCounter = await dropPointT.jumlahsampah();
  
    // Gunakan nilai counter terbaru sebagai sampleId
    const sampleId = Number(latestCounter);
    await dropPointT.connect(owner).verifikasiDataSampah(sampleId);
  
    // Coba panggil fungsi untuk mengirim data ke drop point selanjutnya oleh pengguna lain yang bukan admin
    await expect(dropPointT.connect(user).kirimKeDropPointSelanjutnya(sampleId)).to.be.revertedWith(
      'Ownable: caller is not the owner'
    );
  });

  it('Owner Get Data SampahList', async function () {
    const adminAddress = await owner.getAddress();

        // Dapatkan nilai counter terbaru untuk menentukan sampleId
        const latestCounter = await dropPointT.jumlahsampah();
  
        // Gunakan nilai counter terbaru sebagai sampleId
        const sampleId = Number(latestCounter);

        await(dropPointT.connect(owner)).getDataSampahById(sampleId);

  });

  it('Non - Owner Get Data SampahList', async function () {
    const userAddress = await user.getAddress();

        // Dapatkan nilai counter terbaru untuk menentukan sampleId
        const latestCounter = await dropPointT.jumlahsampah();
  
        // Gunakan nilai counter terbaru sebagai sampleId
        const sampleId = Number(latestCounter);

        await(dropPointT.connect(user)).getDataSampahById(sampleId);

  });
});
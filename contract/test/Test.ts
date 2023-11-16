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
  });

  it('Admin Input Penampung', async () => {
    await Library.connect(Admin).inputDataPenampungan(
      "Sugeng",
      "Sugeng1234@gmail.com",
      "Plastic",
      5,
      [1]
    );
    //console.log(msg.sender)
  });

  it('Bukan Admin Input Penampung', async () => {
    await Library.connect(NotAdmin).inputDataPenampungan(
      "Bima",
      "Bima1234@gmail.com",
      "Bom",
      20,
      [1]
    );
    
  });

  it('Admin Ingin Verifikasi Transaksi', async () => {
    await Library.connect(NotAdmin).inputDataPenampungan("Fenti", "Fenti1234@gmail.com", "tes", 5,[1]);
    await Library.connect(Admin).verifikasiDataSampah((3));
  });

  it('Jika Bukan Admin Ingin Verifikasi Transaksi', async () => {
    
    await expect(
      Library.connect(NotAdmin).verifikasiDataSampah(2)
    ).to.be.revertedWith('Anda bukan seorang Admin!');
    //console.log(NotAdmin)
  });

  // it('Admin Ingin Membersihkan Penampung', async () => {
  //   await Library.connect(Admin).inputDataPenampungan(
  //     "fenti",
  //     "fenti1234@gmail.com",
  //     "Kaca",
  //     10,
  //     [1]
  //   );

  //   await Library.connect(Admin).bersihkanDataSampah(4);
  //   //console.log(NotAdmin)
  // });

  // it('Jika Bukan Admin Ingin Membersihkan Penampung', async () => {
  //   await Library.connect(Admin).inputDataPenampungan(
  //     "rifqi",
  //     "rifqi1234@gmail.com",
  //     "nuklir",
  //     50,
  //     [1]
  //   );

  //   await expect(
  //     Library.connect(NotAdmin).bersihkanDataSampah(5)
  //   ).to.be.revertedWith('Anda bukan seorang Admin!');
  //   //console.log(NotAdmin)
  // });

  it('Admin Ingin Kirim Ke DropPoint Selanjutnya', async () => {
    await Library.connect(Admin).kirimKeDropPointSelanjutnya(1);
    //console.log(Admin)
  });

  it('Jika Bukan Admin Ingin Kirim Ke DropPoint Selanjutnya', async () => {
    await expect(
      Library.connect(NotAdmin).kirimKeDropPointSelanjutnya(2)
    ).to.be.revertedWith('Anda bukan seorang Admin!');
    //console.log(NotAdmin)
  });

  it('Jika Admin dan Bukan Admin ingin melihat Data Sampah', async () => {
    await Library.connect(Admin).getDataSampahById(1);
    await Library.connect(NotAdmin).getDataSampahById(2);
  });
});
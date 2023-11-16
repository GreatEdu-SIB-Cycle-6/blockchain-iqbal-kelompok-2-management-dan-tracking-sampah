import { ethers } from 'hardhat';
import { DropPointT } from '../typechain';

async function main() {
  const library = await ethers.getContract<DropPointT>(
    'DropPointT'
  );

  function formatTimestamp(timestamp: bigint): string {
    const date = new Date(parseInt(timestamp.toString()) * 1000);
    return date.toISOString();
  }

  const addresses = await ethers.getSigners();
  const inputAddress = addresses[1];
  const [admin] = await ethers.getSigners();

  const addPenampung = await library
    .connect(inputAddress)
    .inputDataPenampungan('XXXX', 'XXXX@mail', 'Plastic', 231,[1]);

  await addPenampung.wait();
  const detailDataPenampung = await library.dataPenampungan(1);
  console.log('Berhasil Input Data Penampung Baru!');
  console.log('Address :', detailDataPenampung[0].toString());
  console.log('Nama :', detailDataPenampung[1]);
  console.log('Email :', detailDataPenampung[2]);
  console.log('ID Sampah :', detailDataPenampung[3].toString());
  console.log('Jenis Sampah :', detailDataPenampung[4]);
  console.log('Berat Sampah :', detailDataPenampung[5].toString());
  console.log('Waktu :', formatTimestamp(detailDataPenampung[6]));
  console.log('verify:', detailDataPenampung[7]);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
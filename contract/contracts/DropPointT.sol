
/*
  = WMT Project =
  - Developer By - 
- Lefrand Bima Dzaki.
- Rifqi Cipto Laksono.
- Sugeng Dwi Budi Priantoro. 
- FENTI SEPTRI.

- GREATEDU - BLOCKCHAIN - 2023 - MSIB 5.
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract DropPointT is Ownable{

    uint256 private counterSampah=1;

    struct DataPenampungan {
        address userAddress;
        string namaPengguna;
        string emailPengguna;
        uint256 idSampah;
        string jenisSampah;
        uint256 berat;
        uint256 waktu;
        uint256[] dropPoints;
        bool sudahDivalidasi;
    }

    struct DataSampah {
        address userAddress;
        string namaPengguna;
        string emailPengguna;
        uint256 idSampah;
        string jenisSampah;
        uint256 berat;
        uint256 waktu;
        uint256[] dropPoints;
    }

    mapping(uint256 => DataPenampungan) private dataPenampungan;
    mapping(uint256 => DataSampah) public sampahList;

    event SampahDitambahkan(address userAddress, uint256 idSampah, string jenisSampah, uint256 berat, uint256 waktu, uint256[] dropPoints);
    event SampahDitambahkanKePenampung(address userAddress, uint256 idSampah, string jenisSampah, uint256 berat, uint256 waktu, uint256[] dropPoints);
    event DataDivalidasi(uint256 idSampah);
    
    event SampahDikirimKeDropPointSelanjutnya(
    address userAddress,
    uint256 idSampah,
    string jenisSampah,
    uint256 berat,
    uint256 waktu,
    uint256[] dropPoints
    );

    function jumlahsampah () external view returns (uint){

        if (counterSampah <= 1 ){
            return 0 ;
        }
        else {
            return counterSampah - 1;
        } 
    }

    function inputDataPenampungan(
        string memory _namaPengguna,
        string memory _emailPengguna,
        string memory _jenisSampah,
        uint256 _berat,
        uint256[] memory _dropPoints
    ) public {
        address userAddress= msg.sender; 

        uint256 idSampah = counterSampah;
        counterSampah++;

        dataPenampungan[idSampah] = DataPenampungan(
            userAddress,
            _namaPengguna,
            _emailPengguna,
            idSampah,
            _jenisSampah,
            _berat,
            block.timestamp,
            _dropPoints,
            false
        );

        emit SampahDitambahkanKePenampung(
            dataPenampungan[idSampah].userAddress,
            idSampah,
            dataPenampungan[idSampah].jenisSampah,
            dataPenampungan[idSampah].berat,
            dataPenampungan[idSampah].waktu,
            dataPenampungan[idSampah].dropPoints
        );
    }

    function verifikasiDataSampah(uint256 _idSampah) external onlyOwner {
     
        require(!dataPenampungan[_idSampah].sudahDivalidasi, "Data sudah divalidasi");
        
        sampahList[_idSampah] = DataSampah(
            dataPenampungan[_idSampah].userAddress,
            dataPenampungan[_idSampah].namaPengguna,
            dataPenampungan[_idSampah].emailPengguna,
            _idSampah,
            dataPenampungan[_idSampah].jenisSampah,
            dataPenampungan[_idSampah].berat,
            dataPenampungan[_idSampah].waktu,
            dataPenampungan[_idSampah].dropPoints
        );

        require(bytes(sampahList[_idSampah].namaPengguna).length > 0, "Nama Tidak Boleh Kosong");
        require(bytes(sampahList[_idSampah].emailPengguna).length > 0, "Email Tidak Boleh Kosong");
        require(sampahList[_idSampah].berat > 0, "Berat sampah harus lebih besar dari 0");
        require(bytes(sampahList[_idSampah].jenisSampah).length > 0, "Jenis sampah tidak boleh kosong");
        
        dataPenampungan[_idSampah].sudahDivalidasi = true;
        
        emit DataDivalidasi(_idSampah);
        
        emit SampahDitambahkan(
            dataPenampungan[_idSampah].userAddress,
            _idSampah,
            dataPenampungan[_idSampah].jenisSampah,
            dataPenampungan[_idSampah].berat,   
            dataPenampungan[_idSampah].waktu,
            dataPenampungan[_idSampah].dropPoints
        );
        bersihkanDataSampah(_idSampah);
        
    }

    function getDataSampahById(uint256 _idSampah) public view returns (DataSampah memory) {
        return sampahList[_idSampah];
    }

    function bersihkanDataSampah(uint256 _idSampah) public onlyOwner {
        require(dataPenampungan[_idSampah].sudahDivalidasi = true, "Data belum divalidasi");
        delete dataPenampungan[_idSampah];
    }

    function kirimKeDropPointSelanjutnya(uint256 _idSampah) external onlyOwner {

    require(dataPenampungan[_idSampah].sudahDivalidasi = true, "Data belum divalidasi");
    require(sampahList[_idSampah].dropPoints.length < 3, "Sampah telah mencapai batas maksimal drop point");

    uint256 lastDropPoint = sampahList[_idSampah].dropPoints[sampahList[_idSampah].dropPoints.length - 1];

    uint256 nextDropPoint = lastDropPoint + 1;

    sampahList[_idSampah].dropPoints.push(nextDropPoint);

    sampahList[_idSampah].waktu = block.timestamp;

    emit SampahDikirimKeDropPointSelanjutnya(
        sampahList[_idSampah].userAddress,
        _idSampah,
        sampahList[_idSampah].jenisSampah,
        sampahList[_idSampah].berat,
        sampahList[_idSampah].waktu,
        sampahList[_idSampah].dropPoints
    );
    }

     function getAllDataPenampungan() external view returns (DataPenampungan[] memory) {
        uint256 validDataCount = 0;

        for (uint256 i = 1; i < counterSampah; i++) {
            if (dataPenampungan[i].userAddress != address(0)) {
                validDataCount++;
            }
        }

        DataPenampungan[] memory allData = new DataPenampungan[](validDataCount);

        uint256 dataIndex = 0;
        for (uint256 i = 1; i < counterSampah; i++) {
            if (dataPenampungan[i].userAddress != address(0)) {
                allData[dataIndex] = dataPenampungan[i];
                dataIndex++;
            }
        }

        return allData;
    }

    function getAllSampahList() external view returns (DataSampah[] memory) {
        uint256 validDataCount = 0;

        for (uint256 i = 1; i < counterSampah; i++) {
            if (sampahList[i].userAddress != address(0)) {
                validDataCount++;
            }
        }

        DataSampah[] memory allData = new DataSampah[](validDataCount);

        uint256 dataIndex = 0;
        for (uint256 i = 1; i < counterSampah; i++) {
            if (sampahList[i].userAddress != address(0)) {
                allData[dataIndex] = sampahList[i];
                dataIndex++;
            }
        }

        return allData;
        
    }
}

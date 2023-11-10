// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Definisikan kontrak SampahContract
contract SampahContract {
    // Struktur untuk menyimpan data sementara sebelum dimasukkan ke blockchain
    struct SampahData {
        uint idSampah;
        uint idUser;
        string jenisSampah;
        uint berat;
        uint timestamp;
        string[] dropPoints;
    }

    // Penampung data sementara sebelum dimasukkan ke blockchain
    SampahData[] public sampahPenampung;

    // Mapping untuk menyimpan indeks dari ID sampah
    mapping(uint => uint) public sampahIdToIndex;

    // Event yang akan memancarkan data yang telah dimasukkan ke dalam blockchain
    event SampahDataAdded(uint idSampah, uint idUser, string jenisSampah, uint berat, uint timestamp, string[] dropPoints);

    // Event untuk melacak pengiriman sampah ke drop point
    event SampahSentToDropPoint(uint idSampah, string dropPoint);

    // Fungsi untuk menambahkan data ke penampung
    function addSampahData(
        uint _idSampah,
        uint _idUser,
        string memory _jenisSampah,
        uint _berat,
        string[] memory _dropPoints
    ) public {
        uint timestamp = block.timestamp; // Get current timestamp
        SampahData memory newSampah = SampahData(_idSampah, _idUser, _jenisSampah, _berat, timestamp, _dropPoints);
        sampahPenampung.push(newSampah);

        // Menyimpan indeks dari ID sampah
        sampahIdToIndex[_idSampah] = sampahPenampung.length - 1;

        // Memancarkan event saat data ditambahkan ke penampung
        emit SampahDataAdded(_idSampah, _idUser, _jenisSampah, _berat, timestamp, _dropPoints);
    }

    // Fungsi untuk memvalidasi dan memasukkan data ke dalam blockchain berdasarkan ID sampah
    function validateAndAddToBlockchain(uint _idSampah) public {
        uint index = sampahIdToIndex[_idSampah];
        require(index < sampahPenampung.length, "Data sampah dengan ID tertentu tidak ditemukan.");

        SampahData memory dataToValidate = sampahPenampung[index];
        // Lakukan validasi data di sini sesuai dengan persyaratan Anda
        // Jika data valid, Anda dapat menyimpannya di blockchain
        // Misalnya, Anda dapat menyimpannya di dalam struktur data baru di sini atau melakukan operasi lain yang diperlukan.
        // Setelah itu, Anda dapat memancarkan event untuk memberi tahu bahwa data telah dimasukkan.
        emit SampahDataAdded(dataToValidate.idSampah, dataToValidate.idUser, dataToValidate.jenisSampah, dataToValidate.berat, dataToValidate.timestamp, dataToValidate.dropPoints);

        // Hapus data dari penampung
        delete sampahPenampung[index];
        // Hapus indeks dari mapping
        delete sampahIdToIndex[_idSampah];
    }

    // Fungsi untuk mengirim sampah ke drop point selanjutnya (A -> B -> C) berdasarkan ID sampah
    function sendToNextDropPoint(uint _idSampah) public {
        uint index = sampahIdToIndex[_idSampah];
        require(index < sampahPenampung.length, "Data sampah dengan ID tertentu tidak ditemukan.");

        uint currentDropPointIndex = getCurrentDropPointIndex(sampahPenampung[index].dropPoints);
        if (currentDropPointIndex < sampahPenampung[index].dropPoints.length - 1) {
            // Lakukan logika untuk mengirim sampah ke drop point selanjutnya
            string memory nextDropPoint = sampahPenampung[index].dropPoints[currentDropPointIndex + 1];
            sampahPenampung[index].dropPoints[currentDropPointIndex] = nextDropPoint;

            // Memancarkan event untuk melacak pengiriman sampah ke drop point
            emit SampahSentToDropPoint(_idSampah, nextDropPoint);

            // Hapus indeks dari mapping (tidak perlu menghapus data dari penampung karena itu dilakukan oleh sendToNextDropPoint)
            delete sampahIdToIndex[_idSampah];
        } else {
            revert("Data sampah sudah mencapai drop point terakhir.");
        }
    }

    // Fungsi bantu untuk mendapatkan indeks drop point saat ini
    function getCurrentDropPointIndex(string[] memory dropPoints) internal pure returns (uint) {
        for (uint i = 0; i < dropPoints.length; i++) {
            if (keccak256(bytes(dropPoints[i])) == keccak256("A")) {
                return i;
            }
        }
        return uint(-1); // Tanda indeks yang tidak valid jika drop point A tidak ditemukan
    }

    // Fungsi untuk mencari atau tracking sampah berdasarkan ID sampah
    function trackSampahById(uint _idSampah) public view returns (uint, uint, string memory, uint, uint, string[] memory) {
        uint index = sampahIdToIndex[_idSampah];
        require(index < sampahPenampung.length, "Data sampah dengan ID tertentu tidak ditemukan.");

        SampahData memory trackedData = sampahPenampung[index];
        return (
            trackedData.idSampah,
            trackedData.idUser,
            trackedData.jenisSampah,
            trackedData.berat,
            trackedData.timestamp,
            trackedData.dropPoints
        );
    }

    // Fungsi untuk menghapus data dari penampung
    function clearPenampung(uint _index) public {
        // Pastikan _index sesuai dengan panjang penampung
        require(_index < sampahPenampung.length, "Indeks tidak valid");

        // Hapus indeks dari mapping
        delete sampahIdToIndex[sampahPenampung[_index].idSampah];
        // Hapus data dari penampung
        delete sampahPenampung[_index];
    }
}

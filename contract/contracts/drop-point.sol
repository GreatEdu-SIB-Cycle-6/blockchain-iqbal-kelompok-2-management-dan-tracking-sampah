// Import library yang diperlukan
pragma solidity ^0.8.0;

// Definisikan kontrak SampahContract
contract SampahContract {
    // Struktur untuk menyimpan data sementara sebelum dimasukkan ke blockchain
    struct SampahData {
        uint idSampah;
        uint idUser;
        string jenisSampah;
        uint berat;
        string tanggal;
        string[] dropPoints;
    }

    // Penampung data sementara sebelum dimasukkan ke blockchain
    SampahData[] public sampahPenampung;

    // Event yang akan memancarkan data yang telah dimasukkan ke dalam blockchain
    event SampahDataAdded(uint idSampah, uint idUser, string jenisSampah, uint berat, string tanggal, string[] dropPoints);

    // Event untuk melacak pengiriman sampah ke drop point
    event SampahSentToDropPoint(uint idSampah, string dropPoint);

    // Fungsi untuk menambahkan data ke penampung
    function addSampahData(
        uint _idSampah,
        uint _idUser,
        string memory _jenisSampah,
        uint _berat,
        string memory _tanggal,
        string[] memory _dropPoints
    ) public {
        SampahData memory newSampah = SampahData(_idSampah, _idUser, _jenisSampah, _berat, _tanggal, _dropPoints);
        sampahPenampung.push(newSampah);

        // Memancarkan event saat data ditambahkan ke penampung
        emit SampahDataAdded(_idSampah, _idUser, _jenisSampah, _berat, _tanggal, _dropPoints);
    }

    // Fungsi untuk memvalidasi dan memasukkan data ke dalam blockchain berdasarkan ID sampah
    function validateAndAddToBlockchain(uint _idSampah) public {
        for (uint i = 0; i < sampahPenampung.length; i++) {
            if (sampahPenampung[i].idSampah == _idSampah) {
                SampahData memory dataToValidate = sampahPenampung[i];
                // Lakukan validasi data di sini sesuai dengan persyaratan Anda
                // Jika data valid, Anda dapat menyimpannya di blockchain
                // Misalnya, Anda dapat menyimpannya di dalam struktur data baru di sini atau melakukan operasi lain yang diperlukan.
                // Setelah itu, Anda dapat memancarkan event untuk memberi tahu bahwa data telah dimasukkan.
                emit SampahDataAdded(dataToValidate.idSampah, dataToValidate.idUser, dataToValidate.jenisSampah, dataToValidate.berat, dataToValidate.tanggal, dataToValidate.dropPoints);
                delete sampahPenampung[i]; // Hapus data dari penampung
                return;
            }
        }
        revert("Data sampah dengan ID tertentu tidak ditemukan.");
    }

// Fungsi untuk mengirim sampah ke drop point selanjutnya (A -> B -> C) berdasarkan ID sampah
function sendToNextDropPoint(uint _idSampah) public {
    for (uint i = 0; i < sampahPenampung.length; i++) {
        if (sampahPenampung[i].idSampah == _idSampah) {
            uint currentDropPointIndex = getCurrentDropPointIndex(sampahPenampung[i].dropPoints);
            if (currentDropPointIndex < sampahPenampung[i].dropPoints.length - 1) {
                // Lakukan logika untuk mengirim sampah ke drop point selanjutnya
                string memory nextDropPoint = sampahPenampung[i].dropPoints[currentDropPointIndex + 1];
                sampahPenampung[i].dropPoints[currentDropPointIndex] = nextDropPoint;

                // Memancarkan event untuk melacak pengiriman sampah ke drop point
                emit SampahSentToDropPoint(_idSampah, nextDropPoint);
                return;
            }
        }
    }
    revert("Data sampah tidak ditemukan atau sudah mencapai drop point terakhir.");
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
    function trackSampahById(uint _idSampah) public view returns (uint, uint, string memory, uint, string memory, string[] memory) {
        for (uint i = 0; i < sampahPenampung.length; i++) {
            if (sampahPenampung[i].idSampah == _idSampah) {
                return (
                    sampahPenampung[i].idSampah,
                    sampahPenampung[i].idUser,
                    sampahPenampung[i].jenisSampah,
                    sampahPenampung[i].berat,
                    sampahPenampung[i].tanggal,
                    sampahPenampung[i].dropPoints
                );
            }
        }
        revert("Data sampah dengan ID tertentu tidak ditemukan.");
    }

    // Fungsi untuk menghapus data dari penampung
    function clearPenampung(uint _index) public {
        // Pastikan _index sesuai dengan panjang penampung
        if (_index >= sampahPenampung.length) revert("Indeks tidak valid");
        delete sampahPenampung[_index];
    }
}

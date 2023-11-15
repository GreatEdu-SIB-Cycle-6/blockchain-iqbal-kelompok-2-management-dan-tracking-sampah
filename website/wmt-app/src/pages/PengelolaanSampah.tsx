import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Container, Card, CardContent, Button, Typography, FormControl, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useContractRead, usePrepareContractWrite, useContractWrite } from 'wagmi';
import { parseEther } from 'viem';

import PengelolaanSampahABI from '../assets/pengelolaansampah/PengelolaanSampah.json';

export function PengelolaanSampahPage() {
    const [idSampah, setIdSampah] = useState('');
    const handleIdSampah = (event: any) => setIdSampah(event.target.value);
    const [lacakIdSampah, setlacakIdSampah] = useState('');
    const handleLacakIdSampah = (event: any) => setlacakIdSampah(event.target.value);
    const [beratSampah, setBeratSampah] = useState('');
    const handleBeratSampah = (event: any) => setBeratSampah(event.target.value);
    const [keteranganSampah, setKeteranganSampah] = useState('');
    const handleKeteranganSampah = (event: any) => setKeteranganSampah(event.target.value);
    const [addressPosSampah, setPosKirimDataSampah] = useState('');
    const handleAddressPosSampah = (event: any) => setPosKirimDataSampah(event.target.value);
    const [updateBeratSampah, setUpdateBeratSampah] = useState('');
    const handleUpdateBeratSampah = (event: any) => setUpdateBeratSampah(event.target.value);
    const [updateKeteranganSampah, setUpdateKeteranganSampah] = useState('');
    const handleUpdateKeteranganSampah = (event: any) => setUpdateKeteranganSampah(event.target.value);

    const { address } = useAccount();
    // change wih your contract address, you will get the address after deployment
    const contractAddressPengelolaanSampah = '0x97CFB6ac5ADCF8a9e5441a7E2CA2083fcaeC9004'; 
    const { data: getDataSampah } = useContractRead({
        address: contractAddressPengelolaanSampah,
        abi: PengelolaanSampahABI as any,
        functionName: 'cekPosisiSampah',
        args: [lacakIdSampah]
    });

    const { config: configAddSampah } = usePrepareContractWrite({
      address: contractAddressPengelolaanSampah,
      abi: PengelolaanSampahABI,
      functionName: 'tambahDataSampah',
      args: [idSampah, beratSampah, keteranganSampah]
    });
    const { write: writeAddSampah } = useContractWrite(configAddSampah);

    const { config: configUpdateSampah } = usePrepareContractWrite({
      address: contractAddressPengelolaanSampah,
      abi: PengelolaanSampahABI,
      functionName: 'updateDataSampah',
      args: [idSampah, updateBeratSampah, updateKeteranganSampah]
    });
    const { write: writeUpdateSampah } = useContractWrite(configUpdateSampah);

    const { config: configKirimDataSampah } = usePrepareContractWrite({
        address: contractAddressPengelolaanSampah,
        abi: PengelolaanSampahABI,
        functionName: 'kirimDataSampah',
        args: [idSampah, addressPosSampah ]
      });
      const { write: writeKirimDataSampah } = useContractWrite(configKirimDataSampah);

    console.log({ getDataSampah });
    return (
        <Container>
        <ConnectButton />
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pengelolaan Sampah
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Data Sampah Baru
                    </Typography>
                </CardContent>
                <CardContent>
                    <FormControl>
                        <TextField
                            value={idSampah}
                            onChange={handleIdSampah}
                            label="ID Sampah" type="text" size='medium' />
                        <TextField
                            value={beratSampah}
                            onChange={handleBeratSampah}
                            label="Berat Sampah" type="text" size='medium' />
                        <TextField
                            value={keteranganSampah}
                            onChange={handleKeteranganSampah}
                            label="Keterangan" type="text" size='medium' />
                        <Button
                            onClick={writeAddSampah}
                            variant="contained">Submit</Button>
                    </FormControl>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Kirim Data Sampah
                    </Typography>
                </CardContent>
                <CardContent>
                    <FormControl>
                        <TextField
                            value={idSampah}
                            onChange={handleIdSampah}
                            label="ID Sampah" type="text" size='medium' />
                        <TextField
                            value={addressPosSampah}
                            onChange={handleAddressPosSampah}
                            label="Address Pos" type="text" size='medium' />
                        <Button
                            onClick={writeKirimDataSampah}
                            variant="contained">Submit</Button>
                    </FormControl>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Update Data Sampah
                    </Typography>
                </CardContent>
                <CardContent>
                    <FormControl>
                        <TextField
                            value={idSampah}
                            onChange={handleIdSampah}
                            label="ID Sampah" type="text" size='medium' />
                        <TextField
                            value={updateBeratSampah}
                            onChange={handleUpdateBeratSampah}
                            label="Berat Sampah" type="text" size='medium' />
                        <TextField
                            value={updateKeteranganSampah}
                            onChange={handleUpdateKeteranganSampah}
                            label="Keterangan" type="text" size='medium' />
                        <Button
                            onClick={writeUpdateSampah}
                            variant="contained">Submit</Button>
                    </FormControl>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lacak Sampah
                    </Typography>
                </CardContent>
                <CardContent>
                    <FormControl>
                        <TextField
                            value={lacakIdSampah}
                            onChange={handleLacakIdSampah}
                            label="Input ID Sampah" type="text" size='medium' />
                            <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Berat</TableCell>
                                        <TableCell>Catatan</TableCell>
                                        <TableCell>Pos</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>{ getDataSampah ? getDataSampah[0].toString(): "Tidak Ada Data"}</TableCell>
                                        <TableCell>{ getDataSampah ? getDataSampah[1].toString(): "Tidak Ada Data"}</TableCell>
                                        <TableCell>{ getDataSampah ? getDataSampah[2].toString(): "Tidak Ada Data"}</TableCell>
                                        <TableCell>{ getDataSampah ? getDataSampah[3].toString(): "Tidak Ada Data"}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        </FormControl>
                </CardContent>
            </Card>
        </Container>
    );
}
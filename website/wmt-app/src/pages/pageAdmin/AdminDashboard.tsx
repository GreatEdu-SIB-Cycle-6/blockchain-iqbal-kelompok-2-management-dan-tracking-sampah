import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../components/Footer";
import { useAccount, useContractRead } from "wagmi";

import DropPoinTAbi from "../../assets/DropPoinTAbi.json";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const contractDropPoinT = "0xfb33CBBe4ea51F3e35EbA76612Ab487C257193a6";
  const navigate = useNavigate();
  const { address, isDisconnected } = useAccount();

  const { data: admin } = useContractRead({
    address: contractDropPoinT,
    abi: DropPoinTAbi as any,
    functionName: "owner",
  });
  console.log("admin:", admin);

  useEffect(() => {
    if (isDisconnected === true) {
      navigate('/alert');
    }
  }, [isDisconnected, navigate]);

  useEffect(() => {
    if (address !== admin) {
      navigate('/forbidden');
    }
  }, [address, admin, navigate]);

  const { data: getTotalWaste } = useContractRead({
    address: contractDropPoinT,
    abi: DropPoinTAbi as any,
    functionName: "jumlahsampah",
  });
  console.log("jumlahsampah:", getTotalWaste);
  console.log("jumlahsampah result:", getTotalWaste);
  
  const { data: getWasteData } = useContractRead({
    address: contractDropPoinT,
    abi: DropPoinTAbi as any,
    functionName: "getAllDataPenampungan",
  });
  console.log("getWasteData:", getWasteData);
  console.log("getWasteData result:", getWasteData);

  const { data: getWasteDataList } = useContractRead({
    address: contractDropPoinT,
    abi: DropPoinTAbi as any,
    functionName: "getAllSampahList",
  });
  console.log("getWasteDataList:", getWasteDataList);
  console.log("getWasteDataList result:", getWasteDataList);

  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    // Update the local state when getWasteData changes
    if (getWasteData) {
      setTableData([...getWasteData]);
    }
  }, [getWasteData]);
  return (
    <>
      <div className="container-scroller">
        <Navbar />
        <div className="container-fluid page-body-wrapper">
          <AdminSidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin">
                  <div className="row">
                    <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                      <h3 className="font-weight-bold">
                        Welcome To WMT Project
                      </h3>
                      <h6 className="font-weight-normal mb-0">
                        Please make sure you have connected your wallet before
                        you start using our features.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card tale-bg">
                    <div className="card-people mt-auto">
                      <img
                        src="assets2/images/dashboard/people.svg"
                        alt="people"
                      />
                      <div className="weather-info">
                        <div className="d-flex">
                          <div>
                            <h2 className="mb-0 font-weight-normal">
                              <i className="icon-sun mr-2" />
                              31<sup>C</sup>
                            </h2>
                          </div>
                          <div className="ml-2">
                            <h4 className="location font-weight-normal">
                              Tangerang
                            </h4>
                            <h6 className="font-weight-normal">Indonesia</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin transparent">
                  <div className="row">
                    <div className="col-md-6 mb-4 stretch-card transparent">
                      <div className="card card-tale">
                        <div className="card-body">
                          <p className="mb-4">Total Waste</p>
                          <p className="fs-30 mb-2">{getTotalWaste?.toString()}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 stretch-card transparent">
                      <div className="card card-dark-blue">
                        <div className="card-body">
                          <p className="mb-4">Waste Percentage</p>
                          <p className="fs-30 mb-2">{(Number(getTotalWaste) / 3).toFixed(1)}%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                      <div className="card card-light-blue">
                        <div className="card-body">
                          <p className="mb-4">Total Droppoint</p>
                          <p className="fs-30 mb-2">3</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 stretch-card transparent">
                      <div className="card card-light-danger">
                        <div className="card-body">
                          <p className="mb-4">Total Workers</p>
                          <p className="fs-30 mb-2">75</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             

              <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title">Waste Pending List</p>
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table
                              className="display expandable-table"
                              style={{ width: "100%" }}
                            >
                              <thead>
                                <tr>
                                  <th>User Address</th>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Waste ID</th>
                                  <th>Waste Type</th>
                                  <th>Waste Weight</th>
                                  <th>Date</th>
                                  <th>Droppoint</th>
                                  <th>Validation</th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody>
                                {tableData.map((data: any, index: number) => (
                                  <tr key={index}>
                                    <td>
                                      {data.userAddress ?? "No Pending Data"}
                                    </td>
                                    <td>
                                      {data.namaPengguna ?? "No Pending Data"}
                                    </td>
                                    <td>
                                      {data.emailPengguna ?? "No Pending Data"}
                                    </td>
                                    <td>
                                      {data.idSampah?.toString() ??
                                        "No Pending Data"}
                                    </td>
                                    <td>
                                      {data.jenisSampah ?? "No Pending Data"}
                                    </td>
                                    <td>
                                      {data.berat?.toString() ??
                                        "No Pending Data"}
                                    </td>
                                    <td>
                                      {data.waktu?.toString()
                                        ? new Date(
                                            Number(data.waktu.toString()) * 1000
                                          ).toLocaleString()
                                        : "No Pending Data"}
                                    </td>
                                    <td>
                                      {data.dropPoints &&
                                      data.dropPoints.length > 0
                                        ? data.dropPoints[0].toString()
                                        : "No drop points"}
                                    </td>
                                    <td>
                                      {data.sudahDivalidasi
                                        ? "Validated"
                                        : "Not Validated"}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title">Waste List</p>
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table
                              className="display expandable-table"
                              style={{ width: "100%" }}
                            >
                              <thead>
                                <tr>
                                  <th>User Address</th>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Waste ID</th>
                                  <th>Waste Type</th>
                                  <th>Waste Weight</th>
                                  <th>Date</th>
                                  <th>Droppoint</th>
                                </tr>
                              </thead>
                              <tbody>
                                {getWasteDataList &&
                                  getWasteDataList.map((data, index) => (
                                    <tr key={index}>
                                      <td>{data.userAddress}</td>
                                      <td>{data.namaPengguna}</td>
                                      <td>{data.emailPengguna}</td>
                                      <td>{data.idSampah.toString()}</td>
                                      <td>{data.jenisSampah}</td>
                                      <td>{data.berat.toString()}</td>
                                      <td>
                                        {data.waktu.toString() &&
                                          new Date(
                                            Number(data.waktu.toString()) * 1000
                                          ).toLocaleString()}
                                      </td>
                                      <td>{data.dropPoints.toString()}</td>
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* content-wrapper ends */}
            <Footer />
          </div>
          {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>
    </>
  );
}

export default Dashboard;

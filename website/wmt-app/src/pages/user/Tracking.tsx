import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ThemeSetting from "../components/ThemeSetting";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useAccount, useContractRead } from "wagmi";

import DropPoinTAbi from "../../assets/DropPoinTAbi.json";
function Tracking() {
  const [wasteTracking, setwasteTracking] = useState("");
  const handlewasteTracking = (event: any) =>
    setwasteTracking(event.target.value);

  const { address } = useAccount();
  const contractDropPoinT = "0x097ecb3C88e5cD27033a816683c28d779a1f7693";
  const { data: getWasteData } = useContractRead({
    address: contractDropPoinT,
    abi: DropPoinTAbi as any,
    functionName: "getDataSampahById",
    args: [wasteTracking],
  });
  console.log("getWasteData:", getWasteData);
  console.log("getWasteData result:", getWasteData);

  return (
    <>
      <div className="container-scroller">
        <Navbar />
        <div className="container-fluid page-body-wrapper">
          <ThemeSetting />
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Waste Tracking</h4>
                      <p className="card-description">
                        Input the Waste ID that you want to Tracked
                      </p>
                      <form className="forms-sample">
                        <div className="form-group">
                          <label htmlFor="exampleInputId1">Waste ID</label>
                          <input
                            value={wasteTracking}
                            onChange={handlewasteTracking}
                            type="text"
                            className="form-control"
                            id="exampleInputId1"
                            placeholder="Id"
                          />
                        </div>
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
                                <th>Timestamp</th>
                                <th>Droppoint</th>
                              </tr>
                            </thead>
                            <tbody>
                              {getWasteData ? (
                                Array.isArray(getWasteData) ? (
                                  getWasteData.map((data, index) => (
                                    <tr key={index}>
                                      <td>{(data as any).userAddress}</td>
                                      <td>{(data as any).namaPengguna}</td>
                                      <td>{(data as any).emailPengguna}</td>
                                      <td>{(data as any).idSampah}</td>
                                      <td>{(data as any).jenisSampah}</td>
                                      <td>{Number((data as any).berat)}</td>
                                      <td>
                                        {new Date(
                                          Number((data as any).waktu) * 1000
                                        ).toLocaleString()}
                                      </td>
                                      <td>
                                        {(data as any).dropPoints.join(", ")}
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td>{(getWasteData as any).userAddress || 'N/A'}</td>
                                    <td>{(getWasteData as any).namaPengguna || 'N/A'}</td>
                                    <td>{(getWasteData as any).emailPengguna || 'N/A'}</td>
                                    <td>{Number((getWasteData as any).idSampah) || 'N/A'}</td>
                                    <td>{(getWasteData as any).jenisSampah || 'N/A'}</td>
                                    <td>{Number((getWasteData as any).berat) || 'N/A'}</td>
                                    <td>
                                      {((getWasteData as any).waktu &&
                                        new Date(
                                          Number((getWasteData as any).waktu) * 1000
                                        ).toLocaleString()) || 'N/A'}
                                    </td>
                                    <td>
                                      {(getWasteData as any).dropPoints
                                        ? (getWasteData as any).dropPoints.join(', ')
                                        : 'N/A'}
                                    </td>
                                  </tr>
                                )
                              ) : null}
                            </tbody>
                          </table>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tracking;

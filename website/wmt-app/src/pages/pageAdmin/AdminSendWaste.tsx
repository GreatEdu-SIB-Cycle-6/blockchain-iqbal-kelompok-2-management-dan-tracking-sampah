import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import ThemeSetting from "../components/ThemeSetting";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../components/Footer";
import {
  useAccount,
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
} from "wagmi";

import DropPoinTAbi from "../../assets/DropPoinTAbi.json";
function AdminSendWaste() {
    const [wasteId, setwasteId] = useState("");
    const handlewasteId = (event: any) =>
    setwasteId(event.target.value);

  const { address } = useAccount();
  const contractDropPoinT = "0x097ecb3C88e5cD27033a816683c28d779a1f7693";
  const { data: getWasteData } = useContractRead({
    address: contractDropPoinT,
    abi: DropPoinTAbi as any,
    functionName: "getDataSampahById",
    args: [wasteId],
  });

  const { config: configSendWaste } = usePrepareContractWrite({
    address: contractDropPoinT,
    abi: DropPoinTAbi as any,
    functionName: "kirimKeDropPointSelanjutnya",
    args: [wasteId],
  });
  const { write: writeWasteId } = useContractWrite(configSendWaste);

  console.log("getWasteData:", getWasteData);
  console.log("getWasteData result:", getWasteData);

  const showNotification = () => {
    toast.info("Wait Metamask Notification", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = async () => {
    showNotification(); 
    try {
      await writeWasteId?.();
      toast.success("Sending to Next Droppoint, Wait for Wallet Notification!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error("Error during submission", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };


  return (
    <>
      <div className="container-scroller">
        <Navbar />
        <div className="container-fluid page-body-wrapper">
          <ThemeSetting />
          <AdminSidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">
                        Send Waste to Next Droppoint
                      </h4>
                      <p className="card-description">
                        Input the Waste ID that you want to Send
                      </p>
                      <form className="forms-sample">
                        <div className="form-group">
                          <label htmlFor="exampleInputId1">Waste ID</label>
                          <input
                            value={wasteId}
                            onChange={handlewasteId}
                            type="text"
                            className="form-control"
                            id="wasteTracking"
                            placeholder="Waste Tracking"
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
                                      <td>{(data as any).userAddress || 'N/A'}</td>
                                      <td>{(data as any).namaPengguna || 'N/A'}</td>
                                      <td>{(data as any).emailPengguna || 'N/A'}</td>
                                      <td>{(data as any).idSampah || 'N/A'}</td>
                                      <td>{(data as any).jenisSampah || 'N/A'}</td>
                                      <td>{Number((data as any).berat) || 'N/A'}</td>
                                      <td>
                                        {new Date(
                                          Number((data as any).waktu) * 1000
                                        ).toLocaleString() || 'N/A'}
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
                        <ToastContainer />
                        <button
                          type="button"
                          className="btn btn-info mr-2"
                          onClick={handleSubmit}
                        >
                          Send
                        </button>

                        <button className="btn btn-light">Cancel</button>
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

export default AdminSendWaste;

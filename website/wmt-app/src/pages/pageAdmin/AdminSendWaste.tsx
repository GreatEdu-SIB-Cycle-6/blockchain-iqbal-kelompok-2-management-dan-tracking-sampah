import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../components/Footer";
import {
  useAccount,
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
} from "wagmi";
import DropPoinTAbi from "../../assets/DropPoinTAbi.json";
import { useNavigate } from "react-router-dom";


function AdminSendWaste() {
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
  
    const [wasteId, setwasteId] = useState("");
    const handlewasteId = (event: any) =>
    setwasteId(event.target.value);

  const { config: configSendWaste } = usePrepareContractWrite({
    address: contractDropPoinT,
    abi: DropPoinTAbi as any,
    functionName: "kirimKeDropPointSelanjutnya",
    args: [wasteId],
  });
  const { write: writeWasteId } = useContractWrite(configSendWaste);

  const { data: getWasteData } = useContractRead({
    address: contractDropPoinT,
    abi: DropPoinTAbi as any,
    functionName: "getAllSampahList",
  });
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
                            {getWasteData &&
                              getWasteData.map((data, index) => (
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
                        <div className="form-group">
                          <label htmlFor="exampleInputId1">Waste ID</label>
                          <input
                            value={wasteId}
                            onChange={handlewasteId}
                            type="text"
                            className="form-control"
                            id="wasteTracking"
                            placeholder="Input the Waste ID that you want to Send"
                          />
                          
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

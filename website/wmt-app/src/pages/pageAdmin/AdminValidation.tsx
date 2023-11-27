import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../components/Footer";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
} from "wagmi";
import DropPoinTAbi from "../../assets/DropPoinTAbi.json";
import { useNavigate } from "react-router-dom";

function WasteInput() {
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
  const handlewasteId = (event: any) => setwasteId(event.target.value);

  const [wasteIdDeleted, setwasteIdDeleted] = useState("");
  const handlewasteIdDeleted = (event: any) => setwasteIdDeleted(event.target.value);
  
  const { config: configWasteInput } = usePrepareContractWrite({
    address: contractDropPoinT,
    abi: DropPoinTAbi as any,
    functionName: "verifikasiDataSampah",
    args: [wasteId],
  });
  const { write: writeWasteId } = useContractWrite(configWasteInput);

  const { config: configWasteDelete } = usePrepareContractWrite({
    address: contractDropPoinT,
    abi: DropPoinTAbi as any,
    functionName: "bersihkanDataSampah",
    args: [wasteId],
  });
  const { write: writeDeleteWasteId } = useContractWrite(configWasteDelete);

  const { data: getWasteData } = useContractRead({
    address: contractDropPoinT,
    abi: DropPoinTAbi as any,
    functionName: "getAllDataPenampungan",
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
      await writeWasteId ?.();
      toast.success("Validation Success, Wait for Wallet Notification!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error("Error during submission", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleSubmit2 = async () => {
    showNotification();
    try {
      await writeDeleteWasteId ?.();
      toast.success("Unvalidation Success, Wait for Wallet Notification!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error("Error during submission", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

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
                <div className="col-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Waste Validation</h4>
                      <p className="card-description">
                        Input the waste id that you want to be validated
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
                              <th>Validation</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tableData.map((data: any, index: number) =>(
                                <tr key={index}>
                                  <td>{data.userAddress}</td>
                                  <td>{data.namaPengguna}</td>
                                  <td>{data.emailPengguna}</td>
                                  <td>{data.idSampah.toString() }</td>
                                  <td>{data.jenisSampah}</td>
                                  <td>{data.berat.toString()}</td>
                                  <td>
                                    {data.waktu.toString()  &&
                                      new Date(
                                        Number(data.waktu.toString()) * 1000
                                      ).toLocaleString()}
                                  </td>
                                  <td>
          {data.dropPoints && data.dropPoints.length > 0
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
                        <div className="form-group">
                          <label htmlFor="exampleInputName1">
                            Waste ID To Validated
                          </label>
                          <input
                            value={wasteId}
                            onChange={handlewasteId}
                            type="text"
                            className="form-control"
                            id="exampleInputName1"
                            placeholder="Waste ID"
                          />
                        </div>
                        <ToastContainer />

                        <button
                          type="button"
                          className="btn btn-info mr-2"
                          onClick={handleSubmit}
                        >
                          Validation
                        </button>

                        <button className="btn btn-light">Cancel</button>

                        

                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Waste Unvalidation</h4>
                      <p className="card-description">
                        Input the waste id that you want to be unvalidated
                      </p>
                      <form className="forms-sample">
                        <div className="form-group">
                          <label htmlFor="exampleInputName1">
                            Waste ID To Unvalidated
                          </label>
                          <input
                            value={wasteIdDeleted}
                            onChange={handlewasteIdDeleted}
                            type="text"
                            className="form-control"
                            id="exampleInputName1"
                            placeholder="Waste ID"
                          />
                        </div>
                        <ToastContainer />

                        <button
                          type="button"
                          className="btn btn-info mr-2"
                          onClick={handleSubmit2}
                        >
                          Unvalidation
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

export default WasteInput;

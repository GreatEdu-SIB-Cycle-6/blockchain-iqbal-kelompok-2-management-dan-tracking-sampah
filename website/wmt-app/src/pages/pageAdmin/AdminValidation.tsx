import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import ThemeSetting from "../components/ThemeSetting";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../components/Footer";

import { useAccount, usePrepareContractWrite, useContractWrite } from "wagmi";
import DropPoinTAbi from "../../assets/DropPoinTAbi.json";

function WasteInput() {
  const [wasteId, setwasteId] = useState("");
  const handlewasteId = (event: any) => setwasteId(event.target.value);

  
  const { address } = useAccount();

  const contractDropPoinT = "0x097ecb3C88e5cD27033a816683c28d779a1f7693";

  const { config: configWasteInput } = usePrepareContractWrite({
    address: contractDropPoinT,
    abi: DropPoinTAbi as any,
    functionName: "verifikasiDataSampah",
    args: [wasteId],
  });
  const { write: writeWasteId } = useContractWrite(configWasteInput);

  const showNotification = () => {
    toast.info("Wait Metamask Notification", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = async () => {
    showNotification(); 
    try {
      await writeWasteId?.();
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
                      <h4 className="card-title">Waste Validation</h4>
                      <p className="card-description">
                        Input the waste id that you want to be validated
                      </p>
                      <form className="forms-sample">
                        <div className="form-group">
                          <label htmlFor="exampleInputName1">Waste ID To Validated</label>
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

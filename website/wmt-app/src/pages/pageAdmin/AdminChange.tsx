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

function AdminChange() {
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

  const [adminAddress, setadminAddress] = useState("");
  const handleadminAddress = (event: any) => setadminAddress(event.target.value);
  
  const { config: configadminAddress } = usePrepareContractWrite({
    address: contractDropPoinT,
    abi: DropPoinTAbi as any,
    functionName: "transferOwnership",
    args: [adminAddress],
  });
  const { write: writeadminAddress } = useContractWrite(configadminAddress);

  const showNotification = () => {
    toast.info("Wait Metamask Notification", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = async () => {
    showNotification();
    try {
      await writeadminAddress ?.();
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
          <AdminSidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Change Admin</h4>
                      <p className="card-description">
                        Input the wallet address to change admin
                      </p>
                      <form className="forms-sample">
                     
                        <div className="form-group">
                          <label htmlFor="exampleInputName1">
                            Wallet Address
                          </label>
                          <input
                            value={adminAddress}
                            onChange={handleadminAddress}
                            type="text"
                            className="form-control"
                            id="exampleInputName1"
                            placeholder="Wallet Address"
                          />
                        </div>
                        <ToastContainer />

                        <button
                          type="button"
                          className="btn btn-info mr-2"
                          onClick={handleSubmit}
                        >
                          Change Admin
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

export default AdminChange;

import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useAccount, usePrepareContractWrite, useContractWrite } from "wagmi";
import DropPoinTAbi from "../../assets/DropPoinTAbi.json";
import { useNavigate } from "react-router-dom";

function WasteInput() {
  const [userName, setuserName] = useState("");
  const handleuserName = (event: any) => setuserName(event.target.value);

  const [userEmail, setuserEmail] = useState("");
  const handleuserEmail = (event: any) => setuserEmail(event.target.value);

  const [wasteType, setwasteType] = useState("");
  const handlewasteType = (event: any) => setwasteType(event.target.value);

  const [wasteWeight, setwasteWeight] = useState("");
  const handlewasteWeight = (event: any) => setwasteWeight(event.target.value);

  const [dropPoint, setDropPoint] = useState("");

  // useEffect untuk mengatur nilai dropPoint saat komponen dimuat
  useEffect(() => {
    setDropPoint("1");
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  // Handler untuk memperbarui nilai dropPoint
  const handleDropPoint = (event: any) => {
    setDropPoint(event.target.value);
  };

  const contractDropPoinT = "0xfb33CBBe4ea51F3e35EbA76612Ab487C257193a6";
  const { isDisconnected } = useAccount();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isDisconnected === true) {
      navigate('/alert');
    }
  }, [isDisconnected, navigate]);

  const { config: configWasteInput } = usePrepareContractWrite({
    address: contractDropPoinT,
    abi: DropPoinTAbi as any,
    functionName: "inputDataPenampungan",
    args: [
      userName,
      userEmail,
      wasteType,
      wasteWeight,
      dropPoint.split(",").map(Number),
    ],
  });
  const { write: writeWasteInput } = useContractWrite(configWasteInput);

  const showNotification = () => {
    toast.info("Wait Metamask Notification", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = async () => {
    showNotification(); // Memanggil notifikasi sebelum submit
    try {
      // Logika submit atau panggilan fungsi writeWasteInput
      await writeWasteInput?.();

      // Jika berhasil, Anda dapat memperbarui notifikasi jika diperlukan
      toast.success("Submit Success, Wait for Wallet Notification!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      // Handle error jika diperlukan
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
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Waste Input</h4>
                      <p className="card-description">
                        Input the waste that you want to be dropped off to us
                      </p>
                      <form className="forms-sample">
                        <div className="form-group">
                          <label htmlFor="exampleInputName1">Name</label>
                          <input
                            value={userName}
                            onChange={handleuserName}
                            type="text"
                            className="form-control"
                            id="exampleInputName1"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail3">
                            Email address
                          </label>
                          <input
                            value={userEmail}
                            onChange={handleuserEmail}
                            type="email"
                            className="form-control"
                            id="exampleInputEmail3"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleSelectWasteType">
                            Waste Type
                          </label>
                          <select
                            value={wasteType}
                            onChange={handlewasteType}
                            className="form-control"
                            id="exampleSelectWasteType"
                          >
                            <option>- Select Waste Type -</option>
                            <option>Plastic</option>
                            <option>Electronic</option>
                            <option>Glass</option>
                            <option>Can</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputWasteWeight">
                            Waste Weight
                          </label>
                          <input
                            value={wasteWeight}
                            onChange={handlewasteWeight}
                            type="text"
                            className="form-control"
                            id="exampleInputWasteWeight"
                            placeholder="Waste Weight"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputDropPoint">
                            Droppoint
                          </label>
                          <input
                            value={dropPoint}
                            onChange={handleDropPoint}
                            type="text"
                            className="form-control"
                            id="exampleInputDropPoint"
                            placeholder="Masukkan nilai (bisa dipisahkan koma)"
                          />
                        </div>
                        <ToastContainer />

                        <button
                          type="button"
                          className="btn btn-info mr-2"
                          onClick={handleSubmit}
                        >
                          Submit
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

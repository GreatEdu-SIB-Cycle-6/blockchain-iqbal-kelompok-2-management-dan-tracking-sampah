import React from "react";
import Navbar from "../components/Navbar";
import ThemeSetting from "../components/ThemeSetting";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../components/Footer";

function AdminInput() {
  return (
    <>
      <div className="container-scroller">
        {/* partial:../../partials/_navbar.html */}
        <Navbar />
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
          {/* partial:../../partials/_settings-panel.html */}
          <ThemeSetting />
          {/* partial */}
          {/* partial:../../partials/_sidebar.html */}
          <AdminSidebar />
          {/* partial */}
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
                          <label htmlFor="exampleInputId1">ID</label>
                          <input
                            type="number"
                            className="form-control"
                            id="exampleInputId1"
                            placeholder="Id"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputName1">Name</label>
                          <input
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
                            type="email"
                            className="form-control"
                            id="exampleInputEmail3"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputWasteType">Waste Type</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputWasteType"
                            placeholder="Waste Type"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputWasteWeight">Waste Weight</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputWasteWeight"
                            placeholder="Waste Weight"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleTextarea1">Textarea</label>
                          <textarea
                            className="form-control"
                            id="exampleTextarea1"
                            rows={4}
                            defaultValue={""}
                          />
                        </div>
                        <button type="submit" className="btn btn-info mr-2">
                          Submit
                        </button>
                        <button className="btn btn-light">Cancel</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* content-wrapper ends */}
            {/* partial:../../partials/_footer.html */}
            <Footer />
            {/* partial */}
          </div>
          {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>
    </>
  );
}

export default AdminInput;

import React, { Fragment } from "react";

function Index() {
  return (
    <Fragment>
      <div>
        <div className="header-outs " id="header">
          <div className="header-w3layouts">
            <div className="container-fluid">
              <nav>
                <div id="logo">
                  <h1>
                    {" "}
                    <a href="index.html">Forest</a>
                  </h1>
                </div>
                <label htmlFor="drop" className="toggle">
                  Menu
                </label>
                <input type="checkbox" id="drop" />
                <ul className="menu mt-lg-3 mt-2">
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#service">Service</a>
                  </li>
                  <li>
                    <a href="#gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="#team"> Team</a>
                  </li>
                  <li>
                    <a href="#contact" className="pr-0">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="clearfix" />
              </nav>
              <div className="clearfix" />
            </div>
          </div>
          {/* //nav */}
          {/* //header */}
          <div className="container">
            <div className="slide-info text-center">
              <div className="banner-top-grid">
                <h4>Global Warming</h4>
              </div>
              <h5>Save Forest And Save Earth</h5>
              <div className="slide-info-txt">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt utadipiscing elit sed do eiusmod
                  tempor incididunt Lorem
                </p>
              </div>
              <div className="two-mid-button d-flex justify-content-center mt-lg-5 mt-md-4 mt-sm-4 mt-3">
                <div className="read-buttn ">
                  <a href="#about" className=" scroll">
                    About Us
                  </a>
                </div>
                <div className="view-buttn">
                  <a href="#contact" className=" scroll">
                    Join Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
        {/* //banner */}
        {/* about */}
        <section className="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="title-tag mb-lg-5 mb-md-4 mb-sm-4 mb-3 pb-lg-3 pb-md-2">
              <h6 className="title-top-txt text-center mb-2">What we do</h6>
              <div className="sub-title-mid text-center mb-lg-4 mb-3">
                <h2>STANDING TOGETHER FOR A BETTER WORLD</h2>
              </div>
              <div className="title-wls-text text-center mb-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  <br />
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 video-info-img text-center">
                <div className="abut-img-w3l">
                  <img src="assets/images/ab1.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6 left-abut-txt ">
                <div className="about-right-grid">
                  <h6 className="title-top-txt mb-2">About Us</h6>
                  <h5 className="mb-3">
                    we cannot afford to fail in our mission to save a living
                    planet
                  </h5>
                  <p>
                    delectus reiciendis maiores alias consequatur aut.maiores
                    alias Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit sed do eiusmod delectus reiciendis maiores alias
                    consequatur aut.maiores alias Lorem ipsum dolor sit amet,
                    consectetur
                  </p>
                </div>
                <div className="row mt-lg-4 mt-md-3 mt-3 text-center">
                  <div className="col-md-4 col-sm-4 percentage-grid">
                    <div className="progress blue">
                      <span className="progress-left">
                        <span className="progress-bar" />
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar" />
                      </span>
                      <div className="progress-value">90%</div>
                    </div>
                    <div className="about-progress-wthree">
                      <h4>Save Plants</h4>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 percentage-grid">
                    <div className="progress green">
                      <span className="progress-left">
                        <span className="progress-bar" />
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar" />
                      </span>
                      <div className="progress-value">80%</div>
                    </div>
                    <div className="about-progress-wthree ">
                      <h4>Planting</h4>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4 percentage-grid">
                    <div className="progress yellow">
                      <span className="progress-left">
                        <span className="progress-bar" />
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar" />
                      </span>
                      <div className="progress-value">75%</div>
                    </div>
                    <div className="about-progress-wthree">
                      <h4>Save Trees</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //row-two */}
        </section>
        {/*//about */}
        {/* service */}
        <section className="service py-lg-4 py-md-3 py-sm-3 py-3" id="service">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="title-tag mb-lg-5 mb-md-4 mb-sm-4 mb-3 pb-lg-3 pb-md-2">
              <div className="row">
                <div className="title-wls-text col-lg-6 col-md-6 txt-rightside clr-para">
                  <p className>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 ">
                  <h6 className="title-top-txt mb-2">What we provide</h6>
                  <h3 className="title clr">Our Services</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 ser-icon text-center">
                <div className="grid-wthree-service">
                  <span className="fa fa-pagelines" aria-hidden="true" />
                  <div className="ser-text-wthree">
                    <h4 className="mt-2">Planting</h4>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 ser-icon text-center">
                <div className="grid-wthree-service">
                  <span className="fa fa-paw" aria-hidden="true" />
                  <div className="ser-text-wthree">
                    <h4 className="mt-2">Wildlife</h4>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 ser-icon text-center">
                <div className="grid-wthree-service">
                  <span className="fa fa-tree" aria-hidden="true" />
                  <div className="ser-text-wthree">
                    <h4 className="mt-2">Save Plants</h4>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 ser-icon text-center mt-lg-4 mt-3">
                <div className="grid-wthree-service">
                  <span className="fa fa-tint" aria-hidden="true" />
                  <div className="ser-text-wthree">
                    <h4 className="mt-2">Watering</h4>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 ser-icon text-center mt-lg-4 mt-3">
                <div className="grid-wthree-service">
                  <span className="fa fa-envira" aria-hidden="true" />
                  <div className="ser-text-wthree">
                    <h4 className="mt-2">Save Trees</h4>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 ser-icon text-center mt-lg-4 mt-3">
                <div className="grid-wthree-service">
                  <span className="fa fa-snowflake-o" aria-hidden="true" />
                  <div className="ser-text-wthree">
                    <h4 className="mt-2">Eco Climate</h4>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*//service */}
        {/* gallery */}
        <section className="gallery py-lg-4 py-md-3 py-sm-3 py-3" id="gallery">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="title-tag mb-lg-5 mb-md-4 mb-sm-4 mb-3 pb-lg-3 pb-md-2">
              <div className="row">
                <div className="col-lg-6 col-md-6 txt-rightside">
                  <h6 className="title-top-txt mb-2">See our work</h6>
                  <h3 className="title">Our gallery</h3>
                </div>
                <div className="title-wls-text col-lg-6 col-md-6 ">
                  <p className>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className="row gallery-info">
              <div className="col-lg-6 col-md-6 col-sm-6 gallery-img-grid">
                <div className="gallery-grids mb-lg-4 mb-3">
                  <a href="#gal1">
                    <img
                      src="assets/images/g1.jpg"
                      alt="news_picture"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="row mb-lg-4 mb-3">
                  <div className="col-lg-6 col-md-6">
                    <div className="gallery-grids">
                      <a href="#gal2">
                        <img
                          src="assets/images/g2.jpg"
                          alt="news_picture"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="gallery-grids">
                      <a href="#gal3">
                        <img
                          src="assets/images/g3.jpg"
                          alt="news_picture"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="gallery-grids">
                  <a href="#gal7">
                    <img
                      src="assets/images/g7.jpg"
                      alt="news_picture"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 gallery-img-grid">
                <div className="row mb-lg-4 mb-3">
                  <div className="col-lg-6 col-md-6">
                    <div className="gallery-grids">
                      <a href="#gal8">
                        <img
                          src="assets/images/g4.jpg"
                          alt="news_picture"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="gallery-grids">
                      <a href="#t3">
                        <img
                          src="assets/images/t3.jpg"
                          alt="news_picture"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row mb-lg-4 mb-3">
                  <div className="col-lg-6 col-md-6">
                    <div className="gallery-grids">
                      <a href="#gal4">
                        <img
                          src="assets/images/g4.jpg"
                          alt="news_picture"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="gallery-grids">
                      <a href="#gal5">
                        <img
                          src="assets/images/g5.jpg"
                          alt="news_picture"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="gallery-grids">
                  <a href="#gal6">
                    <img
                      src="assets/images/g6.jpg"
                      alt="news_picture"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* popup*/}
        <div id="gal1" className="popup-effect">
          <div className="popup">
            <img src="assets/images/g1.jpg" alt="popup_picture" className="img-fluid" />
            <a className="close" href="#gallery">
              ×
            </a>
          </div>
        </div>
        {/* //popup */}
        {/* popup*/}
        <div id="gal2" className="popup-effect">
          <div className="popup">
            <img src="assets/images/g2.jpg" alt="popup_picture" className="img-fluid" />
            <a className="close" href="#gallery">
              ×
            </a>
          </div>
        </div>
        {/* //popup */}
        {/* popup*/}
        <div id="gal3" className="popup-effect">
          <div className="popup">
            <img src="assets/images/g3.jpg" alt="popup_picture" className="img-fluid" />
            <a className="close" href="#gallery">
              ×
            </a>
          </div>
        </div>
        {/* //popup */}
        {/* popup*/}
        <div id="gal7" className="popup-effect">
          <div className="popup">
            <img src="assets/images/g7.jpg" alt="popup_picture" className="img-fluid" />
            <a className="close" href="#gallery">
              ×
            </a>
          </div>
        </div>
        {/* //popup */}
        {/* popup*/}
        <div id="gal8" className="popup-effect">
          <div className="popup">
            <img src="assets/images/g4.jpg" alt="popup_picture" className="img-fluid" />
            <a className="close" href="#gallery">
              ×
            </a>
          </div>
        </div>
        {/* //popup */}
        {/* popup*/}
        <div id="t3" className="popup-effect">
          <div className="popup">
            <img src="assets/images/t3.jpg" alt="popup_picture" className="img-fluid" />
            <a className="close" href="#gallery">
              ×
            </a>
          </div>
        </div>
        {/* //popup */}
        {/* popup*/}
        <div id="gal4" className="popup-effect">
          <div className="popup">
            <img src="assets/images/g4.jpg" alt="popup_picture" className="img-fluid" />
            <a className="close" href="#gallery">
              ×
            </a>
          </div>
        </div>
        {/* //popup */}
        {/* popup*/}
        <div id="gal6" className="popup-effect">
          <div className="popup">
            <img src="assets/images/g6.jpg" alt="popup_picture" className="img-fluid" />
            <a className="close" href="#gallery">
              ×
            </a>
          </div>
        </div>
        {/* //popup */}
        {/* popup*/}
        <div id="gal5" className="popup-effect">
          <div className="popup">
            <img src="assets/images/g5.jpg" alt="popup_picture" className="img-fluid" />
            <a className="close" href="#gallery">
              ×
            </a>
          </div>
        </div>
        {/* //popup */}
        {/*//gallery */}
        {/* stats */}
        <section className="stats py-lg-4 py-md-3 py-sm-3 py-3">
          <div className="container-fluid py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="stats-info row ">
              <div className="col-lg-3 col-md-3 col-sm-6 col-6 stats-grid ">
                <div className="register-left-num ">
                  <div className="count-icon">
                    <span className="fa fa-paw" aria-hidden="true" />
                  </div>
                  <div className="counter-number">1200</div>
                  <div className="stat-info pt-lg-3 pt-md-3 pt-sm-3 pt-3">
                    <h4>Save</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-6 stats-grid ">
                <div className="register-left-num">
                  <div className="count-icon">
                    <span className="fa fa-smile-o" aria-hidden="true" />
                  </div>
                  <div className="counter-number">2000</div>
                  <div className="stat-info pt-lg-3 pt-md-3 pt-sm-3 pt-3">
                    <h4>Projects</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-6 stats-grid">
                <div className="register-left-num">
                  <div className="count-icon">
                    <span className="fa fa-leaf" aria-hidden="true" />
                  </div>
                  <div className="counter-number">4000</div>
                  <div className="stat-info pt-lg-3 pt-md-3 pt-sm-3 pt-3">
                    <h4>Plants</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-6 stats-grid">
                <div className="register-left-num">
                  <div className="count-icon">
                    <span className="fa fa-globe" aria-hidden="true" />
                  </div>
                  <div className="counter-number">200</div>
                  <div className="stat-info pt-lg-3 pt-md-3 pt-sm-3 pt-3">
                    <h4>Countries</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*//stats */}
        {/*features */}
        <section
          className="features py-lg-4 py-md-3 py-sm-3 py-3"
          id="features"
        >
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="title-tag mb-lg-5 mb-md-4 mb-sm-4 mb-3 pb-lg-3 pb-md-2">
              <div className="row">
                <div className="title-wls-text col-lg-6 col-md-6 txt-rightside">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 ">
                  <h6 className="title-top-txt mb-2">Our hard work</h6>
                  <h3 className="title">Our Features</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 ">
                <img src="assets/images/ab2.jpg" alt="img15" className="img-fluid" />
              </div>
              <div className="col-lg-7 features-w3layouts-txt">
                <div className="feature-grid-gap mb-lg-4 mb-md-3 mb-3">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 feature-icons text-center">
                      <span className="fa fa-tree" aria-hidden="true" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 features-left">
                      <h4 className="mb-3">Planting Trees and Plants</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="feature-grid-gap two-feature-wrk mb-lg-4 mb-md-3 mb-3">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 feature-icons text-center">
                      <span className="fa fa-cloud-upload" aria-hidden="true" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 features-left">
                      <h4 className="mb-3">Change Climate Bio-Epoxy</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="feature-grid-gap ">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 feature-icons text-center">
                      <span className="fa fa-shield" aria-hidden="true" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 features-left">
                      <h4 className="mb-3">Reduce Pollution For life</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*//features*/}
        {/*price */}
        <section className="price py-lg-4 py-md-3 py-sm-3 py-3" id="price">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="title-tag mb-lg-5 mb-md-4 mb-sm-4 mb-3 pb-lg-3 pb-md-2">
              <div className="row">
                <div className="col-lg-6 col-md-6 txt-rightside ">
                  <h6 className="title-top-txt mb-2">Our Plans </h6>
                  <h3 className="title clr">Our Prices</h3>
                </div>
                <div className="title-wls-text col-lg-6 col-md-6 clr-para">
                  <p className>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 pricing-grid">
                <div className="w3ls-bottom grid-two">
                  <div className="table-txt-grid">
                    <h4>GOLDEN</h4>
                  </div>
                  <div className="my-lg-4 my-3 price-w3layouts-table">
                    <h4>
                      {" "}
                      <span className="sup">$</span>
                      <span className="number-price">50</span> / month{" "}
                    </h4>
                  </div>
                  <div className="price-list-txt">
                    <ul className="count">
                      <li>Lorem ipsum </li>
                      <li>Dolor sit </li>
                      <li>Consectetuer</li>
                      <li>Adipiscing</li>
                      <li>Lorem ipsum </li>
                    </ul>
                  </div>
                  <div className="view-buttn mt-3">
                    <a href="#contact" className=" scroll">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 pricing-grid">
                <div className="w3ls-bottom grid-two">
                  <div className="table-txt-grid">
                    <h4>PREMIUM</h4>
                  </div>
                  <div className="my-lg-4 my-3 price-w3layouts-table">
                    <h4>
                      {" "}
                      <span className="sup">$</span>
                      <span className="number-price">60</span> / month{" "}
                    </h4>
                  </div>
                  <div className="price-list-txt">
                    <ul className="count">
                      <li>Lorem ipsum </li>
                      <li>Dolor sit </li>
                      <li>Consectetuer</li>
                      <li>Adipiscing</li>
                      <li>Lorem ipsum </li>
                    </ul>
                  </div>
                  <div className="view-buttn mt-3">
                    <a href="#contact" className=" scroll">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 pricing-grid">
                <div className="w3ls-bottom grid-two">
                  <div className="table-txt-grid">
                    <h4>PLATINUM</h4>
                  </div>
                  <div className="my-lg-4 my-3 price-w3layouts-table">
                    <h4>
                      {" "}
                      <span className="sup">$</span>
                      <span className="number-price">70</span> / month{" "}
                    </h4>
                  </div>
                  <div className="price-list-txt">
                    <ul className="count">
                      <li>Lorem ipsum </li>
                      <li>Dolor sit </li>
                      <li>Consectetuer</li>
                      <li>Adipiscing</li>
                      <li>Lorem ipsum </li>
                    </ul>
                  </div>
                  <div className="view-buttn mt-3">
                    <a href="#contact" className=" scroll">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 pricing-grid">
                <div className="w3ls-bottom grid-two">
                  <div className="table-txt-grid">
                    <h4>SILVER</h4>
                  </div>
                  <div className="my-lg-4 my-3 price-w3layouts-table">
                    <h4>
                      {" "}
                      <span className="sup">$</span>
                      <span className="number-price">80</span> / month{" "}
                    </h4>
                  </div>
                  <div className="price-list-txt">
                    <ul className="count">
                      <li>Lorem ipsum </li>
                      <li>Dolor sit </li>
                      <li>Consectetuer</li>
                      <li>Adipiscing</li>
                      <li>Lorem ipsum </li>
                    </ul>
                  </div>
                  <div className="view-buttn mt-3">
                    <a href="#contact" className=" scroll">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*//price*/}
        {/* clients */}
        <section className="clients py-lg-4 py-md-3 py-sm-3 py-3" id="clients">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="title-tag mb-lg-5 mb-md-4 mb-sm-4 mb-3 pb-lg-3 pb-md-2">
              <div className="row">
                <div className="title-wls-text col-lg-6 col-md-6 txt-rightside">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 ">
                  <h6 className="title-top-txt mb-2">What Say peoples</h6>
                  <h3 className="title">Our Clients</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 clients-txt">
                <div className="client-txt-color">
                  <img src="assets/images/c1.jpg" className="img-thumbnail" alt="" />
                  <div className="client-txt-info mt-md-4 mt-3 mb-2">
                    <h4> Ted Willson</h4>
                    <h6 className="mt-2"> Our Client</h6>
                    <p className="mt-sm-3 mt-2">
                      Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut
                      labore et consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 clients-txt">
                <div className="client-txt-color">
                  <img src="assets/images/c2.jpg" className="img-thumbnail" alt="" />
                  <div className="client-txt-info mt-md-4 mt-3 mb-2">
                    <h4>Orcand Keen</h4>
                    <h6 className="mt-2"> Our Client</h6>
                    <p className="mt-sm-3 mt-2 ">
                      Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut
                      labore et consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 clients-txt">
                <div className="client-txt-color">
                  <img src="assets/images/c3.jpg" className="img-thumbnail " alt="" />
                  <div className="client-txt-info mt-md-4 mt-3 mb-2">
                    <h4> Jack Killy</h4>
                    <h6 className="mt-2"> Our Client</h6>
                    <p className="mt-sm-3 mt-2">
                      Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut
                      labore et consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*//clients*/}
        {/* video */}
        <section className="video py-lg-4 py-md-3 py-sm-3 py-3" id="video">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="box">
              <a className="button" href="#popup1">
                <span className="fa fa-play-circle" aria-hidden="true" />
              </a>
            </div>
            <div id="popup1" className="overlay">
              <div className="popup">
                <a className="close" href="#video">
                  ×
                </a>
                <div className="content">
                  <iframe src="https://player.vimeo.com/video/31199236" title="company_profile" />
                </div>
              </div>
            </div>
            <div className="video-txt-para text-center mt-lg-5 mt-md-4 mt-3">
              <h4 className="mb-2">Save Forest And Nature</h4>
              <p>
                Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore
                et consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore{" "}
              </p>
            </div>
          </div>
        </section>
        {/*//video*/}
        {/*team*/}
        <section className="team py-lg-4 py-md-3 py-sm-3 py-3" id="team">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="title-tag mb-lg-5 mb-md-4 mb-sm-4 mb-3 pb-lg-3 pb-md-2">
              <div className="row">
                <div className="title-wls-text col-lg-6 col-md-6 txt-rightside">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 ">
                  <h6 className="title-top-txt mb-2">We Are Best</h6>
                  <h3 className="title">Our Volunteer</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 team-grid-list ">
                {/* team-img */}
                <div className="team-block">
                  <div className="team-img">
                    <img src="assets/images/t1.jpg" alt="" className="image-fluid" />
                    <div className="text text-center  mt-lg-4 mt-3">
                      <h4 className="mb-2 ">Lily will</h4>
                      <p className="team-meta ">Volunteer</p>
                      <div className="icons-client mt-3">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/">
                              <span className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <span className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/">
                              <span className="fa fa-rss" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.team-img */}
              <div className="col-lg-3 col-md-6 col-sm-6 team-grid-list ">
                {/* team-img */}
                <div className="team-block">
                  <div className="team-img">
                    <img src="assets/images/t2.jpg" alt="" className="image-fluid" />
                    <div className="text text-center  mt-lg-4 mt-3">
                      <h4 className="mb-2 ">Rose Hunt</h4>
                      <p className="team-meta ">Volunteer</p>
                      <div className="icons-client mt-3">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/">
                              <span className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <span className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/">
                              <span className="fa fa-rss" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.team-img */}
              <div className="col-lg-3 col-md-6 col-sm-6 team-grid-list ">
                {/* team-img */}
                <div className="team-block">
                  <div className="team-img">
                    <img src="assets/images/t3.jpg" alt="" className="image-fluid" />
                    <div className="text text-center  mt-lg-4 mt-3">
                      <h4 className="mb-2 ">Jill Kent</h4>
                      <p className="team-meta ">Volunteer</p>
                      <div className="icons-client mt-3">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/">
                              <span className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <span className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/">
                              <span className="fa fa-rss" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.team-img */}
              <div className="col-lg-3 col-md-6 col-sm-6 team-grid-list ">
                {/* team-img */}
                <div className="team-block">
                  <div className="team-img">
                    <img src="assets/images/t4.jpg" alt="" className="image-fluid" />
                    <div className="text text-center  mt-lg-4 mt-3">
                      <h4 className="mb-2 ">Mart kelly</h4>
                      <p className="team-meta ">Volunteer</p>
                      <div className="icons-client mt-3">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/">
                              <span className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <span className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/">
                              <span className="fa fa-rss" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*//team*/}
        {/*blog*/}
        <section className="blog py-lg-4 py-md-3 py-sm-3 py-3" id="blog">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="title-tag mb-lg-5 mb-md-4 mb-sm-4 mb-3 pb-lg-3 pb-md-2">
              <div className="row">
                <div className="col-lg-6 col-md-6 txt-rightside">
                  <h6 className="title-top-txt mb-2">See our Events</h6>
                  <h3 className="title clr">Our Blog</h3>
                </div>
                <div className="title-wls-text col-lg-6 col-md-6 clr-para">
                  <p className>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="blog-color col-lg-4">
                <div className="blog-grid-cover">
                  <div className="w3pvt-post-img">
                    <img src="assets/images/g1.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="blog-txt-info">
                    <h6 className="mb-2 mt-3">Blog</h6>
                    <h4>
                      <a href="#about" className=" scroll">
                        Quisque a rhoncus{" "}
                      </a>
                    </h4>
                    <p className="mt-lg-4 mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et
                    </p>
                    <div className="news-date-list mt-2 text-center">
                      <div className="d-flex justify-content-between">
                        <div className="date-tag">
                          <a href="#about" className=" scroll">
                            12/4/2019
                          </a>
                        </div>
                        <div className="commant-tag">
                          <a href="#about" className=" scroll">
                            3 Tags
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-color col-lg-4">
                <div className="blog-grid-cover">
                  <div className="w3pvt-post-img">
                    <img src="assets/images/g7.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="blog-txt-info">
                    <h6 className="mb-2 mt-3">Blog</h6>
                    <h4>
                      <a href="#about" className=" scroll">
                        Quisque a rhoncus{" "}
                      </a>
                    </h4>
                    <p className="mt-lg-4 mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et
                    </p>
                    <div className="news-date-list mt-2 text-center">
                      <div className="d-flex justify-content-between">
                        <div className="date-tag">
                          <a href="#about" className=" scroll">
                            12/4/2019
                          </a>
                        </div>
                        <div className="commant-tag">
                          <a href="#about" className=" scroll">
                            3 Tags
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-color col-lg-4">
                <div className="blog-grid-cover">
                  <div className="w3pvt-post-img">
                    <img src="assets/images/g6.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="blog-txt-info">
                    <h6 className="mb-2 mt-3">Blog</h6>
                    <h4>
                      <a href="#about" className=" scroll">
                        Quisque a rhoncus{" "}
                      </a>
                    </h4>
                    <p className="mt-lg-4 mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et
                    </p>
                    <div className="news-date-list mt-2 text-center">
                      <div className="d-flex justify-content-between">
                        <div className="date-tag">
                          <a href="#about" className=" scroll">
                            12/4/2019
                          </a>
                        </div>
                        <div className="commant-tag">
                          <a href="#about" className=" scroll">
                            3 Tags
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*//blog*/}
        {/* contact */}
        <section className="contact py-lg-4 py-md-3 py-sm-3 py-3" id="contact">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="title-tag mb-lg-5 mb-md-4 mb-sm-4 mb-3 pb-lg-3 pb-md-2">
              <div className="row">
                <div className="title-wls-text col-lg-6 col-md-6 txt-rightside">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 ">
                  <h6 className="title-top-txt mb-2">Get Touch in</h6>
                  <h3 className="title">Contact Us</h3>
                </div>
              </div>
            </div>
            <div className="contact-details">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <form action="#" method="post">
                    <div className=" form-group contact-forms">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="form-group contact-forms">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="form-group contact-forms">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        required
                      />
                    </div>
                    <div className="form-group contact-forms">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        rows={3}
                        required
                        defaultValue={""}
                      />
                    </div>
                    <button type="submit" className="btn btn-block sent-butnn">
                      Send
                    </button>
                  </form>
                </div>
                <div className="col-lg-6 col-md-6 address-grid">
                  <div className="row address-contact-form">
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <div className="footer-icon text-center">
                        <span className="fa fa-home" aria-hidden="true" />
                      </div>
                    </div>
                    <div className=" footer-contact-list col-lg-9 col-md-8 col-sm-8">
                      <h6 className="mb-3">Address</h6>
                      <p>South Brisbane,Old 4101 Australia</p>
                    </div>
                  </div>
                  <div className="row address-contact-form mt-lg-4 mt-3">
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <div className="footer-icon text-center">
                        <span className="fa fa-phone" aria-hidden="true" />
                      </div>
                    </div>
                    <div className=" footer-contact-list col-lg-9 col-md-8 col-sm-8">
                      <h6 className="mb-3">Phone</h6>
                      <p>+ 1 (234) 567 8901</p>
                      <p>+ 1 (000) 555 9901</p>
                    </div>
                  </div>
                  <div className="row address-contact-form mt-lg-4 mt-3">
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <div className="footer-icon text-center">
                        <span className="fa fa-envelope" aria-hidden="true" />
                      </div>
                    </div>
                    <div className=" footer-contact-list col-lg-9 col-md-8 col-sm-8">
                      <h6 className="mb-3">Email</h6>
                      <p>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </p>
                      <p>
                        <a href="mailto:info@example.com">info2@example.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*//contact */}
    
        {/* footer */}
        <footer className="py-lg-4 py-md-3 py-sm-3 py-3">
          <div className="container-fluid">
            <div className="footer-main text-center">
              <p>
                © 2023 WMT Project. All Rights Reserved
              </p>
            </div>
            <div className="icons txt-center mt-lg-4 mt-3 ">
              <ul>
                <li>
                  <a href="www.facebook.com">
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="www.twitter.com">
                    <span className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="www.github.com">
                    <span className="fa fa-rss" />
                  </a>
                </li>
                <li>
                  <a href="www.instagram.com">
                    <span className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* move icon */}
          <div className="txt-center">
            <a href="#header" className="move-top txt-center mt-3" >Scroll Up</a>
          </div>
          {/*//move icon */}
        </footer>
        {/*//footer */}
      </div>
    </Fragment>
  );
}

export default Index;

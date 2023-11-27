import React, { Fragment } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

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
                    <a href="/">WMT Project</a>
                  </h1>
                </div>
                <label htmlFor="drop" className="toggle">
                  Menu
                </label>
                <input type="checkbox" id="drop" />
                <ul className="menu mt-lg-3 mt-2">
                  <li className="active">
                    <a href="/">Home</a>
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
                    <a href="#contact" className="pr-0">
                      Contact
                    </a>
                  </li>
                  <li>
                    <div className="connectButton">
                      <ConnectButton />
                    </div>
                  
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
                <h4>Blockchain Based</h4>
              </div>
              <h5>Waste Management and Tracking</h5>
              <div className="slide-info-txt">
                <p>
                    A renewable waste management system utilising Blockchain for data transparency.
                </p>
              </div>
              <div className="two-mid-button d-flex justify-content-center mt-lg-5 mt-md-4 mt-sm-4 mt-3">
                <div className="read-buttn ">
                  <a href="#about" className=" scroll">
                    About Us
                  </a>
                </div>
                <div className="view-buttn">
                  <a href="/dashboard" className=" scroll">
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
                  We are here to solve the problem of environmental issues
                  <br />
                  by conducting waste management and tracking Blockchain-based waste.
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
                    We cannot afford to fail in our mission to save the
                    environtment
                  </h5>
                  <p>
                  We took the initiative to try to help the existing waste processing process using blockchain technology. 
                  Where the project that we offer is help manage waste and track waste based on blockchain. 
                  The waste that we will manage is and electronic waste which is a serious waste problem in Indonesia. 
                  that is quite serious in Indonesia. The project that we offer is called "WMT Project", where this project can track or track drop point-based waste using blockchain technology.
                  </p>
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
                  <p className = "" >
                  WMT Project provides cutting-edge solutions in waste management and blockchain-based tracking.
                  Our services include real-time waste monitoring, blockchain-based reporting, and seamless system integration.
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
                  <span className="fa fa-inbox" aria-hidden="true" />
                  <div className="ser-text-wthree">
                    <h4 className="mt-2">Input</h4>
                    <p className="mt-3">
                      Inputting waste data to Blockchain
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 ser-icon text-center">
                <div className="grid-wthree-service">
                  <span className="fa fa-money" aria-hidden="true" />
                  <div className="ser-text-wthree">
                    <h4 className="mt-2">Earn</h4>
                    <p className="mt-3">
                      Earn rupiah from your contribution
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 ser-icon text-center">
                <div className="grid-wthree-service">
                  <span className="fa fa-list-alt" aria-hidden="true" />
                  <div className="ser-text-wthree">
                    <h4 className="mt-2">Sorting</h4>
                    <p className="mt-3">
                        Waste sorting process based on its type
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 ser-icon text-center mt-lg-4 mt-3">
                <div className="grid-wthree-service">
                  <span className="fa fa-home" aria-hidden="true" />
                  <div className="ser-text-wthree">
                    <h4 className="mt-2">Droppoints</h4>
                    <p className="mt-3">
                        Warehaouse for us to manage waste 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 ser-icon text-center mt-lg-4 mt-3">
                <div className="grid-wthree-service">
                  <span className="fa fa-search" aria-hidden="true" />
                  <div className="ser-text-wthree">
                    <h4 className="mt-2">Tracking</h4>
                    <p className="mt-3">
                        Tracking your waste and avoiding fraud
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 ser-icon text-center mt-lg-4 mt-3">
                <div className="grid-wthree-service">
                  <span className="fa fa-shopping-cart" aria-hidden="true" />
                  <div className="ser-text-wthree">
                    <h4 className="mt-2">Marketplace</h4>
                    <p className="mt-3">
                        Coming Soon
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
                  <p className = "" >
                  Explore the world of waste management through our visual showcase in Our Gallery.
                  Witness inspirational images and innovative solutions we offer in waste management
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
        {/* clients */}
        <section className="clients py-lg-4 py-md-3 py-sm-3 py-3" id="clients">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="title-tag mb-lg-5 mb-md-4 mb-sm-4 mb-3 pb-lg-3 pb-md-2">
              <div className="row">
                <div className="title-wls-text col-lg-6 col-md-6 txt-rightside">
                  <p>
                  Individuals and customers to share their experiences, reviews, and testimonials.
                  Here, we celebrate the voices of the community by providing a space to share personal perspectives on.
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
                  <img src="assets/images/c4.jpg" className="img-thumbnail" alt="" />
                  <div className="client-txt-info mt-md-4 mt-3 mb-2">
                    <h4> Alfi Fajri</h4>
                    <h6 className="mt-2"> Our Client</h6>
                    <p className="mt-sm-3 mt-2">
                    "GreenTech Solutions, our first partner, is a leading company in the implementation of green technology.
                    Our collaboration helps them achieve their sustainability goals by maximizing efficiency and transparency in waste management"
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 clients-txt">
                <div className="client-txt-color">
                  <img src="assets/images/c2.jpg" className="img-thumbnail" alt="" />
                  <div className="client-txt-info mt-md-4 mt-3 mb-2">
                    <h4>Ridho Fauzi</h4>
                    <h6 className="mt-2"> Our Client</h6>
                    <p className="mt-sm-3 mt-2 ">
                    "EcoCraft Industries, our dedicated client, is a pioneer in the production of environmentally friendly goods.
                    With WMT Project solutions, they can track their waste footprint more effectively, ensuring that every step in production supports sustainability"
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 clients-txt">
                <div className="client-txt-color">
                  <img src="assets/images/c3.jpg" className="img-thumbnail " alt="" />
                  <div className="client-txt-info mt-md-4 mt-3 mb-2">
                    <h4> Ahmad Wildan</h4>
                    <h6 className="mt-2"> Our Client</h6>
                    <p className="mt-sm-3 mt-2">
                    "The Urban Renewal Authority entrusts us to provide reliable waste management solutions in their city development projects.
                    With a blockchain-based approach, we assist them in achieving the highest sustainability standards in their urban transformation"
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
              <h4 className="mb-2">Waste Management and Tracking Project</h4>
              <p>
              An innovative platform focused on waste management and tracking powered by blockchain technology. We aim to revolutionize waste management with a transparent and secure approach.
              Utilizing blockchain technology, we provide a trustworthy solution for efficiently managing, tracking, and reporting waste data.{" "}
              </p>
            </div>
          </div>
        </section>
        {/*//video*/}
        {/* contact */}
        <section className="contact py-lg-4 py-md-3 py-sm-3 py-3" id="contact">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="title-tag mb-lg-5 mb-md-4 mb-sm-4 mb-3 pb-lg-3 pb-md-2">
              <div className="row">
                <div className="title-wls-text col-lg-6 col-md-6 txt-rightside">
                  <p>
                  Need more information or want to discuss your waste management project? Contact us through the Contact Us menu.
                  Our dedicated team is ready to assist you in finding the best solutions for waste management and blockchain-based tracking.
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 ">
                  <h6 className="title-top-txt mb-2">Get in Touch</h6>
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
                      <p>South Serpong, South Tangerang, Indonesia</p>
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
                      <p>+62-899-7172-8380</p>
                      <p>+62-909-7034-9083</p>
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
                        <a href="mailto:blackrat872@gmail.com">wmtproject@gmail.com</a>
                      </p>
                      <p>
                        <a href="mailto:blackrat872@gmail.com">wmtproject.office@gmail.com</a>
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
            <a href="#header" className="move-top txt-center mt-3" > </a>
          </div>
          {/*//move icon */}
        </footer>
        {/*//footer */}
      </div>
    </Fragment>
  );
}

export default Index;

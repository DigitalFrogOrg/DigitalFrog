import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <div className="about-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Contact Us</h1>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h6>
            Home / <a href="/contact-us">Contact Us</a>
          </h6>
        </div>
        <div className="row">
            <div className="col-md-8"></div>
            <div className="col-md-4"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

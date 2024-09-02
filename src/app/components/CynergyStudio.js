"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  focusOnSelect: true,
};

function CynergyStudio() {
  return (
    <section className="cynergy_studio">
      <div className="container-fluid">
        <div className="cynergy_studio_col">
          <h2>Why Cynergy Studio</h2>
          <div className="cynergy_studio_detail container">
            <div className="row">
              <div className="col-sm-6">
                <div className="cs_detail_col">
                  <img src="/images/product_lab.png" alt="Product Lab" />
                  <h4>Product Lab</h4>
                  <p>
                    Yellow is a development company that creates its own
                    products. It allows us to gain extensive knowledge about the
                    product life cycle and apply it to your solution.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="cs_detail_col">
                  <img
                    src="/images/product_lab.png"
                    alt="Business Before Technology"
                  />
                  <h4>Business Before Technology</h4>
                  <p>
                    {" "}
                    Our software developers do not just code. We put your
                    business needs first to ensure that the future app or
                    website will fit your requirements and bring you profit.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="cs_detail_col">
                  <img src="/images/product_lab.png" alt="Security" />
                  <h4>Security</h4>
                  <p>
                    Before the start, we sign a non-disclosure agreement (NDA)
                    with you so there is no reason to worry about your data
                    safety.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="cs_detail_col">
                  <img src="/images/product_lab.png" alt="Product Lab" />
                  <h4>Excellent Track Record</h4>
                  <p>
                    Our partners have already highly rated Yellow as a
                    development company so for now we have 5 stars on Clutch and
                    GoodFirms.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 studio-slider">
              <Slider {...settings}>
                <div className="d-flex align-items-center justify-content-center">
                  <img src="/images/slider-image-3.png" />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img src="/images/slider-image-1.png" />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img src="/images/slider-image-2.png" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CynergyStudio;

"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
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
          <h2>Why Cynergy Studios?</h2>
          <div className="cynergy_studio_detail container">
            <div className="row">
              <div className="col-sm-6">
                <div className="cs_detail_01">
                  {/* <img src="/images/product_lab.png" alt="Product Lab" /> */}
                  <h4>Product Lab</h4>
                  <p className="w-50">
                    Our Product Lab fosters creativity and innovation, turning
                    your concepts into practical, market-ready solutions. We
                    refine ideas, prototype, and develop, ensuring each product
                    is optimized for success and user engagement.
                  </p>
                  <button>Read More</button>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="cs_detail_02">
                  {/* <img
                    src="/images/product_lab.png"
                    alt="Business Before Technology"
                  /> */}
                  <h4>
                    Business Before <br /> Technology
                  </h4>
                  <p className="w-50">
                    We prioritize understanding your business goals before
                    recommending technology. By aligning solutions with your
                    objectives, we deliver digital products that drive growth
                    and efficiency, putting your business needs first.
                  </p>
                  <button>Read More</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="cs_detail_03">
                  {/* <img src="/images/product_lab.png" alt="Security" /> */}
                  <h4>
                    Excellent Track <br /> Record
                  </h4>
                  <p className="w-50">
                    Cynergy Studios has a proven history of delivering
                    successful projects across various industries. Our
                    consistent quality and timely execution have earned us trust
                    and long-term partnerships with clients worldwide.
                  </p>
                  <button>Read More</button>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="cs_detail_04">
                  {/* <img src="/images/product_lab.png" alt="Product Lab" /> */}
                  <h4>
                    Security <br /> Apps
                  </h4>
                  <p className="w-50">
                    We prioritize security in every aspect of our development.
                    From data encryption to secure coding practices, we ensure
                    your digital products are safeguarded against threats,
                    protecting your business and user data.
                  </p>
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default CynergyStudio;

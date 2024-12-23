"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WeCommitSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="container IOS-services weCommitboxNavs appMobilePaddingSmall">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center">
          <h2 className="mainHeadingMobile">We Commit To Deliver</h2>
          <p>
            Among premier mobile app development companies, we batten
            exceptional assistance on a wider scale to flourish Android and iOS
            devices internationally. From the start to the launch of mobile
            development, we construct and refine the design and performance of
            the app productively. As a reputable provider of native mobile app
            development services, we strive to meet the exigencies of our
            valuable consumers.
          </p>
        </div>
        <div className="col-md-2"></div>

        <div className="col-md-12 mt-5">
          <Slider {...settings}>
            <div>
              <div className="weCommitbox">
                <img
                  src="./images/group1231.png"
                  alt="group1231"
                  className="w-100"
                />
                <h4>Full Stack Native App Development Services</h4>
                <p>
                  With years of dedicated experience, Cynergy Studios has
                  accompanied leading industries with powerful strategies to
                  rank the title among large enterprises. Our native mobile app
                  development services create platform-specific apps with modern
                  features and smooth functionality to upgrade digital presence.
                </p>
              </div>
            </div>
            <div>
              <div className="weCommitbox">
                <img
                  src="./images/group4523.png"
                  alt="group4523"
                  className="w-100"
                />
                <h4>Tablet App Development Services</h4>
                <p>
                  Tablet Native apps can also be built for multiple Apple
                  devices such as tablets and iPads. In modern technology,
                  developing tablet apps are still in immense demand. With years
                  of successful experience the native app development company
                  Dignite Studios has provided comprehensive native app
                  development services
                </p>
              </div>
            </div>
            <div>
              <div className="weCommitbox">
                <img
                  src="./images/group2352.png"
                  alt="group2352"
                  className="w-100"
                />
                <h4>Android App Development Services</h4>
                <p>
                  Native apps for Android platforms are created using a
                  streamlined, single-code development process. They form
                  different approaches and specific Android programming
                  languages i.e. Kotlin or Java. You can create native mobile
                  apps for both mobile and desktop.
                </p>
              </div>
            </div>
            <div>
              <div className="weCommitbox">
                <img
                  src="./images/group4232.png"
                  alt="group4232"
                  className="w-100"
                />
                <h4>IPad App Development Services</h4>
                <p>
                  When you’re establishing a native app for iPads, the mere
                  supremacy lies with its immersive layouts. Here, you just have
                  to take a large canvas to create more complex apps under
                  split-screen functionality. Additionally, a major advantage is
                  that you only need to develop
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WeCommitSlider;

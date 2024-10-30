"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IOSAppDesignServices = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="container IOS-services">
      <div className="row">
        <div className="col-md-8">
          <h2>IOS App Design Services</h2>
          <p>
            We create app designs that combine modern design aesthetics with
            user experience research to deliver outstanding app experiences for
            your users. Tailored to your brand and industry, our UI/UX app
            design services will help you drive user engagement and gain
            customer loyalty.
          </p>
        </div>
        <div className="col-md-4">
        </div>

        <div className="col-md-12 mt-5">
          <Slider {...settings}>
            <div>
              <div className="IOS-slider">
                <h3>Modernized Design Consultancy</h3>
                <p>
                  Get recommendations on your exclusive Apple projects and scale
                  your app store with modern app features, user experience,
                  design, and appealing user interface. Design consultancy helps
                  to roadmap the right path to your app idea, particularly to
                  dispense highly intuitive.
                </p>
                <button>Start your project</button>
              </div>
            </div>
            <div>
              <div className="IOS-slider">
                <h3>High-End UX/UI Design</h3>
                <p>
                  Apple has a unique and delusional form of design strategy to
                  make the iOS app store up-to-date with the latest hi-tech
                  design formations and procedures. Here, our iOS app designers
                  value consistency in crafting highly intrinsic apps to stand
                  out among global businesses. easy-to-use interfaces to hook
                  large audiences promptly.
                </p>
                <button>Start your project</button>
              </div>
            </div>
            <div>
              <div className="IOS-slider">
                <h3>Motion Design</h3>
                <p>
                  There is fierce competition to develop attractive motion
                  designs in the leading tech industries as it is the highest
                  captivating format to attract users on a larger scale. It
                  harbors powerful and essential tools to communicate with
                  consumers or clients effectively. Our top iPhone app design
                  team uses multiple graphic combinations.
                </p>
                <button>Start your project</button>
              </div>
            </div>
            <div>
              <div className="IOS-slider">
                <h3>High-End UX/UI Design</h3>
                <p>
                  Apple has a unique and delusional form of design strategy to
                  make the iOS app store up-to-date with the latest hi-tech
                  design formations and procedures. Here, our iOS app designers
                  value consistency in crafting highly intrinsic apps to stand
                  out among global businesses. easy-to-use interfaces to hook
                  large audiences promptly.
                </p>
                <button>Start your project</button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default IOSAppDesignServices;

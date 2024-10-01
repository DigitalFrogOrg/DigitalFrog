import React from "react";
// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaseStudy = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="case-study container py-5 my-5">
      <div className="row">
        <div className="col-md-10">
          <h2>Case Studies</h2>
        </div>
        <div className="col-md-2">
          <button>All Work</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <img
                  src="./images/blog-1.png"
                  alt="image-1"
                  className="w-100"
                />
                <h3>VideoApply</h3>
                <p>promo website, saas</p>
              </div>
              <div>
                <img
                  src="./images/blog-2.png"
                  alt="image-1"
                  className="w-100"
                />
                <h3>Follow Art</h3>
                <p>Promo Website, Saas</p>
              </div>
              <div>
                <img
                  src="./images/blog-3.png"
                  alt="image-1"
                  className="w-100"
                />
                <h3>Disona</h3>
                <p>Promo website, Trading platform</p>
              </div>
              <div>
                <img
                  src="./images/blog-2.png"
                  alt="image-1"
                  className="w-100"
                />
                <h3>Follow Art</h3>
                <p>promo website, saas</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
export default CaseStudy;

import React from "react";
// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaseStudy = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <div className="case-study py-5 my-5">
      <div className="row">
        <div className="col-md-12">
       <h2>mobile apps we develop</h2>
          <p>Diginite Studios creates top-notch mobile applications and cutting-edge mobile features for their users to clinch their potency and worthiness. Our mobile app services endeavor to build Android and IOS mobile applications that function as per the required needs of the user. Heading with successful mobile projects we fabricate app success in the procreation of unbeatable user interfaces, coding systems, database management, security, and maintenance</p>
        </div>
        {/* <div className="col-md-2">
          <button>All Work</button>
        </div> */}
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="slider-container">
            <Slider  {...settings}>
              <div style={{margin:"0px 20px",background:"linear-gradient(178.64deg, #F854AB -6.27%, #F33D5A 101.93%)"}}>
                <img
                  src="./images/blog-1.png"
                  alt="image-1"
                  // className="w-100"
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

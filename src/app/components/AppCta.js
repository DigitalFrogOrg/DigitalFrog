import React from "react";

const AppCta = ({CtaHeading}) => {
  return (
    <>
      <div style={{position: "relative"}} className="container">
        <div className="row app-cta">
          <div className="col-md-1"></div>
          <div  className="col-md-6">
            <h2 className="innovativeHeading">
              {CtaHeading}
            </h2>
            <a className="scheduleBtn" href="tel:13463608407">
            <button className="btn-schedule">
              Contact Us
            </button>
            </a>
          </div>
          <div className="col-md-5">
            <img
              src="./images/mobile-cta.png"
              alt="mobile-cta"
              className="w-100 mobile-cta"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCta;

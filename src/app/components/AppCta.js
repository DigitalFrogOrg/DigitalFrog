import React from "react";

const AppCta = ({CtaHeading}) => {
  return (
    <>
      <div className="container">
        <div className="row app-cta">
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <h2>
              {CtaHeading}
            </h2>
            <a href="tel:13463608407">
            <button>
              Schedule A call
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

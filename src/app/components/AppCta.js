import React from "react";

const AppCta = () => {
  return (
    <>
      <div className="container">
        <div className="row app-cta">
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <h2>
              into an Innovative <br /> Mobile App.
            </h2>
            <button>Schedule A call</button>
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

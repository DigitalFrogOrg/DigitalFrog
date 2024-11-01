import React from "react";

const MainBanner = ({ MainBannerHeading }) => {
  return (
    <>
      <div className="app-page">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
            <h1 className="mb-4" dangerouslySetInnerHTML={{ __html: MainBannerHeading }} />
            <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="col-md-4"></div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default MainBanner;

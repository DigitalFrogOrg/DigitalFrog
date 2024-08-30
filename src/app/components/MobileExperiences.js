import React from "react";

function MobileExperiences() {
  return (
    <>
      <div className="container-fluid mobile-experiences">
        <h2 className="text-center">
          Make the industries section like the screenshot <br /> Reimagine
          Mobile Experiences Across Every Industry
        </h2>
        <p className="text-center">
          Cynergy Studios delivers impactful mobile apps across a variety of
          industries. From healthcare to retail, education to <br />{" "}
          entertainment, we create solutions that drive success and enhance user
          experiences, no matter the field.
        </p>
        <div className="row mt-5">
          <div className="col-md-1"></div>
          <div className="col-md-2 text-center">
            <img
              src="/images/Healthcare.png"
              alt="Healthcare"
              className="w-100"
            />
            <h4 className="my-4">Healthcare</h4>
          </div>
          <div className="col-md-2 text-center">
            <img
              src="/images/Ecommerce.png"
              alt="Ecommerce"
              className="w-100"
            />
            <h4 className="my-4">Ecommerce</h4>
          </div>
          <div className="col-md-2 text-center">
            <img
              src="/images/Agriculture.png"
              alt="Agriculture"
              className="w-100"
            />
            <h4 className="my-4">Agriculture</h4>
            <button>Show More</button>
          </div>
          <div className="col-md-2 text-center">
            <img src="/images/Food.png" alt="Food" className="w-100" />
            <h4 className="my-4">Food</h4>
          </div>
          <div className="col-md-2 text-center">
            <img
              src="/images/Logistics.png"
              alt="Logistics"
              className="w-100"
            />
            <h4 className="my-4">Logistics</h4>
          </div>

          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}

export default MobileExperiences;

import React from "react";

function MobileExperiences() {
  return (
    <>
      <div className="container-fluid mobile-experiences">
        <h2 className="text-center">
          Make the industries section like the screenshot
          <br /> Reimagine Mobile Experiences Across Every Industry.
        </h2>
        <p className="text-center">
          Cynergy Studios crafts powerful mobile apps across a wide range of
          industries. Whether in healthcare, retail, education, <br/> or
          entertainment, we design solutions that foster success and enhance
          user experiences, regardless of the sector.
        </p>
        <div className="row mt-5">
          <div className="col-md-1"></div>
          <div className="col-md-2 text-center">
            <img
              src="/images/firstimg.png"
              alt="Healthcare"
              className="w-100"
            />
            <h4 className="my-4">Healthcare</h4>
          </div>
          <div className="col-md-2 text-center">
            <img src="/images/imageTwo.png" alt="Ecommerce" className="w-100" />
            <h4 className="my-4">Ecommerce</h4>
          </div>
          <div className="col-md-2 text-center">
            <img
              src="/images/Logistics.png"
              alt="Logistics"
              className="w-100"
            />
            <h4 className="my-4">Logistics</h4>
          </div>
          <div className="col-md-2 text-center">
            <img src="/images/imageThree.png" alt="Food" className="w-100" />
            <h4 className="my-4">Food</h4>
          </div>
          <div className="col-md-2 text-center">
            <img
              src="/images/imageFour.png"
              alt="Agriculture"
              className="w-100"
            />
            <h4 className="my-4">Agriculture</h4>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row">
          <button>Show More</button>
        </div>
      </div>
    </>
  );
}

export default MobileExperiences;

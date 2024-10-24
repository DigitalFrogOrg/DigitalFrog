import React from "react";

function HotspotSection() {
  return (
    <>
      <div className="container-fluid hotspotSection">
        <div className="row">
          <div className="col-md-8">
            <div className="mapContainer">
              <img
                src="/images/worldMap.png"
                alt="World Map"
                className="mapImage"
              />
              {/* Hotspot Markers */}
              <div className="hotspot" style={{ top: "-15%", left: "34%" }}>
                <div className="label">
                  <h6>USA</h6>
                  <p>
                    1 E Erie St Ste 525 Chicago, IL 60611
                    <br /> Kingdom
                  </p>
                </div>
                <div className="marker"></div>
              </div>
              <div className="hotspot" style={{ top: "-8%", left: "61%" }}>
                <div className="label">
                  <h6>UK</h6>
                  <p>
                    82 King Street, Manchester, <br /> Lancashire, M2 4WQ,
                  </p>
                </div>
                <div className="marker"></div>
              </div>
              <div className="hotspot" style={{ top: "0%", left: "76%" }}>
                <div className="label">
                  <h6>USA</h6>
                  <p>1 E Erie St Ste 525 Chicago, IL 60611</p>
                </div>
                <div className="marker"></div>
              </div>
              <div className="hotspot" style={{ top: "7%", left: "73%" }}>
                <div className="label">
                  <h6>UAE</h6>
                  <p>
                    82 King Street, Manchester, <br /> Lancashire, M2 4WQ,
                    United
                    <br /> Kingdom
                  </p>
                </div>
                <div className="marker"></div>
              </div>
              <div className="hotspot" style={{ top: "1%", left: "89%" }}>
                <div className="label">
                  <h6 style={{ width: "100px" }}>AUSTRALIA</h6>
                  <p>
                    8 Elonera Road, Noble Park North, Victoria, Australia 3174
                  </p>
                </div>
                <div className="marker"></div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <div className="contactContainer">
              <h2 className="fw-bold">
                Let's Start <br /> Working Together.
                <br /> Get In Touch!
              </h2>
              <a href="#" className="btn">
                Make An Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotspotSection;

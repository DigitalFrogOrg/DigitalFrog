import React from "react";

function Evolution() {
  return (
    <section className="evolution-sec">
      <div className="container">
        <div className="evolution-head">
          <h2>Step Inside Our Evolution Lab</h2>
        </div>
        <div className="phase_a">
          <div className="phase_a-head">
            <h4>PHASE A</h4>
          </div>
          <div className="phase_a-first-row">
            <div className="row">
              <div className="col-sm-6"></div>
              <div className="col-sm-6">
                <div className="phase_a-first-col">
                  <div class="dot-container">
                    <div class="dot"></div>
                  </div>
                  <img src="/images/specifications.png"  alt="Specifications & Planning" />
                  <h3>Specifications & Planning</h3>
                  <p>Dive into the specs to:</p>
                  <ul>
                    <li>Solidify what is being built so we are aligned.</li>
                    <li>
                      Research libraries and services that will be integrated
                      with the software.
                    </li>
                    <li>
                      Decide on coding language architecture and other unique
                      elements.
                    </li>
                  </ul>
                  <button type="button" class="whole-btn2">
                    Show More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="phase_a-second-row">
            <div className="row">
            <div className="col-sm-6">
                <div className="phase_a-second-col">
                  <div class="dot-container">
                    <div class="dot"></div>
                  </div>
                  <img src="/images/specifications.png" alt="Designs, Wireframe & Prototype" />
                  <h3>Designs, Wireframe & Prototype</h3>
                  <p>Build out designs to determine what the software/app/website will look like, and how it will function (and make it beautiful).</p>
                  <button type="button" class="whole-btn2">
                    Show More
                  </button>
                </div>
              </div>
              <div className="col-sm-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Evolution;

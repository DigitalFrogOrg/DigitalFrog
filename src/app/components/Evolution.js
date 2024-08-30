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
                  <div className="dot-container">
                    <div className="dot"></div>
                  </div>
                  <img
                    src="/images/specifications.png"
                    alt="Specifications & Planning"
                  />
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
                  <button type="button" className="whole-btn2">
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
                  <div className="dot-container">
                    <div className="dot"></div>
                  </div>
                  <img
                    src="/images/specifications.png"
                    alt="Designs, Wireframe & Prototype"
                  />
                  <h3>Designs, Wireframe & Prototype</h3>
                  <p>
                    Build out designs to determine what the software/app/website
                    will look like, and how it will function (and make it
                    beautiful).
                  </p>
                  <button type="button" className="whole-btn2">
                    Show More
                  </button>
                </div>
              </div>
              <div className="col-sm-6"></div>
            </div>
          </div>
          <div className="phase_a-third-row">
            <div className="row">
              <div className="col-sm-6"></div>
              <div className="col-sm-6">
                <div className="phase_a-third-col">
                  <div class="dot-container">
                    <div class="dot"></div>
                  </div>
                  <img
                    src="/images/specifications.png"
                    alt="Specifications & Planning"
                  />
                  <h3>Estimates & Timeline</h3>
                  <p>
                    Using all the information from the specs and designs, we
                    build a spreadsheet estimating all the tasks involved,
                    timeline and total cost.
                  </p>

                  <button type="button" class="whole-btn2">
                    Show More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="phase_b">
          <div className="phase_b-head">
            <h4>PHASE B</h4>
          </div>
          <div className="phase_b-process">
            <div className="phase_b-first-row">
              <div className="row">
                <div className="col-sm-6">
                  <div className="phase_b-first-col">
                    <div class="dot-container">
                      <div class="dot"></div>
                    </div>
                    <img
                      src="/images/specifications.png"
                      alt="Designs, Wireframe & Prototype"
                    />
                    <h3>Build</h3>
                    <p>
                      Engineers build the software, adding new features, fixing
                      old features & constantly improving code architecture &
                      scalability.
                    </p>
                    <button type="button" class="whole-btn2">
                      Show More
                    </button>
                  </div>
                </div>
                <div className="col-sm-6"></div>
              </div>
            </div>
            <div className="phase_b-second-row">
              <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-6">
                  <div className="phase_b-second-col">
                    <div class="dot-container">
                      <div class="dot"></div>
                    </div>
                    <img
                      src="/images/specifications.png"
                      alt="Specifications & Planning"
                    />
                    <h3>Test</h3>
                    <p>
                      QA tests the latest build, identifying any bugs that need
                      to be fixed or features that need improving.
                    </p>
                    <button type="button" class="whole-btn2">
                      Show More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="phase_b-third-row">
              <div className="row">
                <div className="col-sm-6">
                  <div className="phase_b-third-col">
                    <div class="dot-container">
                      <div class="dot"></div>
                    </div>
                    <img
                      src="/images/specifications.png"
                      alt="Designs, Wireframe & Prototype"
                    />
                    <h3>Deploy</h3>
                    <p>
                      {" "}
                      Our deployment engineers release the newest build to the
                      testing platforms, or live, to the App Store, Google Play
                      store or website.{" "}
                    </p>
                    <button type="button" class="whole-btn2">
                      Show More
                    </button>
                  </div>
                </div>
                <div className="col-sm-6"></div>
              </div>
            </div>
            <div className="phase_b-forth-row">
              <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-6">
                  <div className="phase_b-forth-col">
                    <div class="dot-container">
                      <div class="dot"></div>
                    </div>
                    <img
                      src="/images/specifications.png"
                      alt="Specifications & Planning"
                    />
                    <h3>Measure</h3>
                    <p>
                      QA tests the latest build, identifying any bugs that need
                      to be fixed or features that need improving.
                    </p>
                    <button type="button" class="whole-btn2">
                      Show More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="phase_b-inprocess">
            <div className="phase_b-fifth-row">
              <div className="row">
                <div className="col-sm-6">
                  <div className="phase_b-fifth-col">
                    <div class="dot-container">
                      <div class="dot"></div>
                    </div>
                    <img
                      src="/images/specifications.png"
                      alt="Designs, Wireframe & Prototype"
                    />
                    <h3>Maintain</h3>
                    <p>
                      Should we exit the software development loop, we have
                      lightweight plans available for continued, long-term
                      maintenance.
                    </p>
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
      </div>
    </section>
  );
}

export default Evolution;

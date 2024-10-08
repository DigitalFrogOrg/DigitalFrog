"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { useEffect, useRef } from "react";
import RecentNews from "../components/RecentNews";
import CaseStudy from "../components/CaseStudy";
import CaseStudySlider from "../components/CaseStudySlider";

function page() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
          } else {
            entry.target.classList.remove("is-active");
          }
        });
      },
      { threshold: 0.7 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <>
      <Header />
      {/* Main Banner */}
      <div className="about-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>How We Do It</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-5">
            <Tabs>
              <TabList>
                <Tab>Our Process</Tab>
                <Tab>Agile</Tab>
                <Tab>Waterfall</Tab>
                <Tab>Hybrid</Tab>
              </TabList>

              <div className="tab-pannell rounded">
                <TabPanel>
                  <div className="row">
                    <div
                      className="col-md-3 sticky-number"
                      ref={(el) => (sectionsRef.current[0] = el)}
                    >
                      <h2>01</h2>
                    </div>
                    <div className="col-md-9">
                      <h3>PHASE A - R&D</h3>
                      <div className="row how-steps">
                        <img
                          src="./images/dotted.png"
                          alt="dotted"
                          className="dotted"
                        />
                        <div className="col-md-4">
                          <h4>
                            Specifications & <span> Planning</span>
                          </h4>
                        </div>
                        <div className="col-md-8">
                          <h5>
                            Specifications & Planning Comprehensive Approach to
                            Website and App Development Process
                          </h5>
                          <p>
                            Through several guided discovery sessions, we build
                            out a specifications document that clearly outlines
                            our project goal.
                          </p>
                          <ul>
                            <li>
                              What are we building, for what users, and with
                              what features?
                            </li>
                            <li>
                              What languages, frameworks & services should we
                              use to optimize cost vs functionality?
                            </li>
                          </ul>
                          <p>
                            Our team of professionals help guide this process
                            through
                          </p>
                          <ul>
                            <li>
                              Feature Suggestions (for example, did you think of
                              building an admin panel to track usership &
                              analytics).
                            </li>
                            <li>
                              80/20 principles where its possible to build a
                              similar feature but for much cheaper.
                            </li>
                          </ul>
                          <p>Here is a sample of a Specifications Sheet.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div
                      className="col-md-3 sticky-number"
                      ref={(el) => (sectionsRef.current[1] = el)}
                    >
                      <h2>02</h2>
                    </div>
                    <div className="col-md-9">
                      <div className="row how-steps">
                        <img
                          src="./images/dotted.png"
                          alt="dotted"
                          className="dotted"
                        />
                        <div className="col-md-4">
                          <h4>
                            Designs, <span> Wireframe</span> & Prototype
                          </h4>
                        </div>
                        <div className="col-md-8">
                          <h5>Designs, Wireframe & Prototype </h5>
                          <p>
                            Through several guided discovery sessions, we build
                            out a specifications document that clearly outlines
                            our project goal.
                          </p>
                          <ul>
                            <li>
                              Based on our specifications, we create a beautiful
                              wireframe + prototype.
                            </li>
                            <li>
                              We then click through it together to make sure it
                              looks and feels the way we want our final product
                              to feel.
                            </li>
                          </ul>
                          <p>
                            Sample Wireframe & Prototype (feel free to click
                            around on the prototype).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div
                      className="col-md-3 sticky-number"
                      ref={(el) => (sectionsRef.current[2] = el)}
                    >
                      <h2>03</h2>
                    </div>
                    <div className="col-md-9">
                      <div className="row how-steps">
                        <img
                          src="./images/dotted.png"
                          alt="dotted"
                          className="dotted"
                        />
                        <div className="col-md-4">
                          <h4>
                            Estimates &<span>Timeline</span>
                          </h4>
                        </div>
                        <div className="col-md-8">
                          <h5>Estimates & Timeline </h5>
                          <p>
                            Through several guided discovery sessions, we build
                            out a specifications document that clearly outlines
                            our project goal.
                          </p>
                          <ul>
                            <li>
                              Based on specifications and designs, we’ll create
                              a detailed estimate on the project cost + a
                              timeline to deployment.
                            </li>
                            <li>
                              The estimate can then be modified, removing or
                              adding optional features to suit your budget
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <h2>Agile</h2>
                  <p>Content for Agile tab.</p>
                </TabPanel>
                <TabPanel>
                  <h2>Waterfall</h2>
                  <p>Content for Waterfall tab.</p>
                </TabPanel>
                <TabPanel>
                  <h2>Hybrid</h2>
                  <p>Content for Hybrid tab.</p>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <CaseStudySlider />
      </div>
      <div className="mt-5">
        <RecentNews />
      </div>
      <Footer />
    </>
  );
}

export default page;

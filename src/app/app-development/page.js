"use client";
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
// import OneTestimonial from "../components/OneTestimonial";
import RecentNews from "../components/RecentNews";
import TestimonialTabs from "../components/TestimonialTabs";
import MarqueeSlider from "../components/MarqueeSlider";
import CaseStudy from "../components/CaseStudy";

function page() {
  return (
    <>
      <Header />
      <div className="app-page">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Mobile App Development Services.</h1>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h3>Android App Development Services</h3>
            </div>
            <div className="col-md-4"></div>
          </div>
          <hr />
          <div className="row py-4">
            <div className="col-md-6 d-flex justify-content-start align-items-center">
              <h3>Overview</h3>
            </div>
            <div className="col-md-6">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen bookIt has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="second-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pe-5 py-2">
              <img
                src="./images/faqs-sec.png"
                alt="faqs-sec"
                className="h-100 w-100"
              />
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Strategy
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen bookIt has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      UI Design
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen bookIt has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      UX Design
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen bookIt has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Front-end development
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen bookIt has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <CaseStudy />

      {/* Fourth Section */}
      {/* <div className="second-trusted">
        <div className="container">
          <div className="row">
            <h2 className="text-center">
              Trusted by Innovators, Loved by Users
            </h2>
            <div className="col-md-2 mt-5">
              <img src="./images/quotation.svg" alt="quotation" />
            </div>
            <div className="col-md-6 mt-5"></div>
            <div className="col-md-4 mt-5">
              <OneTestimonial />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="marquee-slider mt-5">
                <div className="marquee-content">
                  {duplicatedMarqueeItems.map((item, index) => (
                    <div className={`item ${item.class}`} key={index}>
                      <img src={item.src} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <TestimonialTabs />

      <MarqueeSlider />
      <div className="mt-5">
        <RecentNews />
      </div>
      <Footer />
    </>
  );
}


export default page;

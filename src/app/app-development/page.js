"use client";
import React from "react";
// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import OneTestimonial from "../components/OneTestimonial";
import RecentNews from "../components/RecentNews";

function page() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const marqueeItems = [
    {
      src: "./images/client/img-1.png",
      text: "$850m",
      description: "Funding secured for our clients",
      class: "clr-r",
    },
    {
      src: "./images/client/img-2.png",
      text: "35M+",
      description: "Downloads of our developed apps",
      class: "clr-t",
    },
    {
      src: "./images/client/img-3.png",
      text: "420",
      description: "Successful projects completed",
      class: "clr-r",
    },
    {
      src: "./images/client/img-4.png",
      text: "95%",
      description: "Client satisfaction rate",
      class: "clr-y",
    },
    {
      src: "./images/client/img-5.png",
      text: "18+",
      description: "Years of combined team experience",
      class: "clr-t",
    },
    {
      src: "./images/client/img-6.png",
      text: "120+",
      description: "Awards won for our designs",
      class: "clr-r",
    },
    {
      src: "./images/client/img-7.png",
      text: "40K+",
      description: "Lines of code written",
      class: "clr-u",
    },
  ];

  const duplicatedMarqueeItems = [...marqueeItems, ...marqueeItems];

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
            <div className="col-md-7"></div>
            <div className="col-md-5">
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
      <div className="case-study container py-5 my-5">
        <div className="row">
          <div className="col-md-10">
            <h2>Case Studies</h2>
          </div>
          <div className="col-md-2">
            <button>All Work</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <img
                    src="./images/slider-imgs/image-1.png"
                    alt="image-1"
                    className="w-100"
                  />
                  <h3>VideoApply</h3>
                  <p>promo website, saas</p>
                </div>
                <div>
                  <img
                    src="./images/slider-imgs/image-2.png"
                    alt="image-1"
                    className="w-100"
                  />
                  <h3>Follow Art</h3>
                  <p>Promo Website, Saas</p>
                </div>
                <div>
                  <img
                    src="./images/slider-imgs/image-3.png"
                    alt="image-1"
                    className="w-100"
                  />
                  <h3>Disona</h3>
                  <p>Promo website, Trading platform</p>
                </div>
                <div>
                  <img
                    src="./images/slider-imgs/image-2.png"
                    alt="image-1"
                    className="w-100"
                  />
                  <h3>Follow Art</h3>
                  <p>promo website, saas</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="second-trusted">
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
                      {/* <span>{item.text}</span> */}
                      {/* <br /> */}
                      {/* {item.description} */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <RecentNews />
      </div>
      <Footer />
    </>
  );
}

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
export default page;

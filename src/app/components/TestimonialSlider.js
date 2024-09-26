"use client";
import React, { useState } from "react";
import { IoArrowBackOutline, IoArrowForwardSharp } from "react-icons/io5";

function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const testimonials = [
    {
      id: 1,
      subTitle: "Case Study:",
      title: "Parceled",
      text: "Parceled is a powerful real estate tool designed to simplify property data access for users. With its comprehensive map-based search, users can explore parcel details, property boundaries, and ownership information across the United States. By integrating public records, aerial imagery, and advanced filtering options, Parceled provides an intuitive interface that makes it easy for real estate professionals, developers, and property buyers to make informed decisions. The app's accuracy and user-friendly experience have enabled it to become a valuable resource for navigating the complexities of land data, ensuring quick and efficient real estate analysis and planning.",
      imgSrc: "/images/mobileSlider.png",
    },
    {
      id: 2,
      subTitle: "Your gateway to endless possibilities.",
      title: "Experience the Power of App Title 2",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imgSrc: "/images/mobile-slide.png",
    },
    {
      id: 3,
      subTitle: "Unleash your creativity with App Title 3.",
      title: "Embrace the Future of Innovation",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imgSrc: "/images/mobile-slide.png",
    },
  ];
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getSlideClass = (index) => {
    if (index === activeIndex) return "current";
    if (index === (activeIndex + testimonials.length - 1) % testimonials.length)
      return "prev";
    if (index === (activeIndex + 1) % testimonials.length) return "next";
    return "";
  };

  return (
    <div className="container-fluid">
      <div className="testimonial-slider">
        <div className="row">
          <div
            className="col-md-4 orange-sec"
            style={{ background: "#dc5f00" }}
          >
            {/* <IoArrowBackOutline onClick={handlePrev} /> */}
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`image-container ${getSlideClass(index)}`}
              >
                <img
                  src={testimonial.imgSrc}
                  alt={`testimonial-img-${index + 1}`}
                />
              </div>
            ))}
            {/* <IoArrowForwardSharp onClick={handleNext} /> */}
          </div>
          <div className="col-md-8 testimonials">
            <div className="one-test">
              <div className="divider"></div>
              <h4>{activeIndex + 1 }</h4>
              
              <h5>{testimonials[activeIndex].subTitle}</h5>
              <h3>{testimonials[activeIndex].title}</h3>
              <p>{testimonials[activeIndex].text}</p>
              <br />
              <br />
              <div className="d-flex w-100 gap-5">
                <button style={{backgroundColor:"transparent",color:"#DC5F00",borderColor:"#DC5F00",borderWidth:1}}> App Design</button>
                <button style={{backgroundColor:"#DC5F00",color:"#fff"}}>App Development</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSlider;

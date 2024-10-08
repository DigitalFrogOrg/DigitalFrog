"use client"
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const CaseStudySlider = () => {
    const slider = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowAltCircleRight />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowAltCircleLeft />
            </div>
        );
    }

    return (
        <>
            <div className="case-studies-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Case Studies</h2>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-end gap-2">
                            <button onClick={() => slider?.current?.slickPrev()}>
                                <FaArrowAltCircleLeft />
                            </button>
                            <button onClick={() => slider?.current?.slickNext()}>
                                <FaArrowAltCircleRight />
                            </button>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-12">
                            <Slider ref={slider} {...settings}>
                                <div className="slide-item">
                                    <img src="./images/blog-1.png" alt="Case 1" className="w-100" />
                                    <h3>ASL Flurry</h3>
                                    <p>ASL Flurry is an educational app designed.</p>
                                </div>
                                <div className="slide-item">
                                    <img src="./images/blog-2.png" alt="Case 2" className="w-100" />
                                    <h3>The Fortune Teller App by Full Moon</h3>
                                    <p>The Fortune Teller App by Full Moon offers.</p>
                                </div>
                                <div className="slide-item">
                                    <img src="./images/blog-3.png" alt="Case 3" className="w-100" />
                                    <h3>Eksperience MyApp</h3>
                                    <p>Eksperience MyApp is a versatile</p>
                                </div>
                                <div className="slide-item">
                                    <img src="./images/blog-2.png" alt="Case 4" className="w-100" />
                                    <h3>The Fortune Teller App by Full Moon</h3>
                                    <p>The Fortune Teller App by Full Moon offers.</p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CaseStudySlider;

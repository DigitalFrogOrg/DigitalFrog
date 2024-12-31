"use client";
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
// import OneTestimonial from "../components/OneTestimonial";
import RecentNews from "../components/RecentNews";
import TestimonialTabs from "../components/TestimonialTabs";
import MarqueeSlider from "../components/MarqueeSlider";
import CaseStudy from "../components/CaseStudy";
import HotspotSection from "../components/HotspotSection";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import AppCta from "../components/AppCta";
import MainBanner from "../components/MainBanner";
import Link from "next/link";
import {topRanked,faqData,benefitsWorking,uptoTime} from './data'

function page() {
 
  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Mobile Game Development Services" />

      {/* Second Section */}

      <div className="second-last-section appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-7 d-flex align-items-center justify-content-center">
              <div className="text-section">
                <h2 className="mainHeadingMobile">Discover Our History</h2>
                <p className="paragraphText col-md-11 mt-4">
                Leading with years of experience, Dignite Studios has been centering on the modernization of mobile software specifications to create magnificent web and mobile applications for their valuable clients. Our company of mobile business intelligence has a proven track record of triumphant mobile projects which are illustrious in today’s digital realm. 
                <br />
                <br />
                We have achieved phenomenal growth in empowering diverse businesses with innovation and contemporary ideas to enliven various blueprints. We have globally earned remarkable endorsement and apprehension in the “INC 5000 list.” Throughout the journey, our unwavering focus has remained on transformation, client satisfaction, and making an indelible impact in the realms of technology and software.
                </p>
                <Link href="/contact-us">
                  <button className="second-btn mt-3">Start Your Project</button>
                </Link>
              </div>
            </div>
            <div className="col-md-5 py-2 mgTop25 paddingRight3">
              <img
                src="./images/third-section.png"
                alt="faqs-sec"
                className="h-100 w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="second-section appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-6 paddingRight3 py-2">
              <img
                src="./images/faqs-sec.png"
                alt="faqs-sec"
                className="h-100 w-100"
              />
            </div>
            <div className="col-md-6 mt-5">
              <div className="accordion mt-2" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header w-100">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span className="accordionText">
                        Strategy
                      </span>
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
                      <span className="accordionText">
                        UI Design
                      </span>
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
                      <span className="accordionText">
                        UX Design
                      </span>
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
                      <span className="accordionText">
                        Front-end development
                      </span>
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
      
      <div
        className="second-last-section appMobilePaddingSmall"
        style={{ backgroundColor: "#FFFBF8", padding: "30px 0px 60px 0px" }}
      >
        <div className="container ios-android">
          <div className="row">
            <div className="col-md-9 py-5 d-flex align-items-center justify-content-center">
              <div className="text-section">
                <h1 className="mainHeadingMobile">
                  Mobile Game Development Services For <span>IOS & ANDROID</span>
                </h1>
                <p className="paragraphText">
                  Our software development life cycle empowers companies to
                  functionalize their brand identity by building an effective
                  and powerful mobile app for its users. To create more clicks
                  and produce more revenue we provide a complete mobile solution
                  to make a global recognition of your mobile applications.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 d-flex align-items-center justify-content-center">
              <img
                src="./images/mobile-app.png"
                alt="faqs-sec"
                className="h-100 w-100 object-fit-cover rounded"
              />
            </div>

            <div className="col-md-7  py-2 mgTop25 paddingLeft3 paddingRight3">
              <div className="text-section">
                <h1 className="title-page-2">
                  <span>Android App Development</span>
                </h1>
                <p className="paragraphText">
                  Struggling to find an innovative partner for your android
                  mobile app development? Here we offer the best mobile app
                  solutions to propel your business in the world of the mobile
                  stratosphere with our eccentric development approach. Whereas,
                  Android apps are the cornerstone of the transformative
                  development process.
                </p>
              </div>
              <div className="text-section">
                <h1 className="title-page-2">
                  <span>iOS App Development</span>
                </h1>
                <p className="paragraphText">
                  Turn your illustrations into an unprecedented model that
                  robust iOS mobile applications in an exclusive manner. From
                  code to launch, the top-notch developers of Dignite Studios
                  will transform your entire mobile app with eminent
                  methodologies of mobile development to make your app version
                  highly functional, optimized, systemized, and scalable on any
                  platform. We take pride in our development efforts to help
                  businesses achieve their rapid ROIs and conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second-last-section appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <h1 className="top-ranked mainHeadingMobile">
              Top Ranked Solutions for
              <br /> Multiple Platforms
            </h1>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                src="./images/line-chart.png"
                alt="faqs-sec"
                className="line-image"
              />
              <div>
                  {topRanked.map((item,i)=>(
                      <div className="text-section-hover mobileCardPadding" key={i}>
                      <h1 className="cardHeading">
                        {item.heading}
                      </h1>
                      <p className="cardDesc">
                        {item.description}
                      </p>
                      </div>
                  ))}
              </div>
            </div>
            <div className="col-md-6 py-2 paddingRight3">
              <img
                src="./images/solution.png"
                alt="faqs-sec"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="second-last-section appMobilePaddingSmall"
        style={{ backgroundColor: "#FFFBF8", padding: "30px 0px 60px 0px" }}
      >
        <div className="container benefits-of-working">
          <div className="row">
            <div className="col-md-9 py-5">
              <h2 className="mainHeadingMobile">
                Benefits of working with <br /> Cynergy Studios
              </h2>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-end">
             <Link href="#getInTouch">
              <button className="second-btn">Start Your Project</button>
             </Link>
            </div>
          </div>
          <div className="row">
            {benefitsWorking.slice(0,3).map((item, i) => (
               <div className="col-md-4" key={i}>
               <div className="mid-app-divs">
                 <h4 className="cardHeading">{item.heading}</h4>
                 <p className="cardDesc">
                   {item.description}
                 </p>
               </div>
             </div>
            ))
            }
          </div>
          <div className="row">
          {benefitsWorking.slice(3,6).map((item, i) => (
               <div className="col-md-4" key={i}>
               <div className="mid-app-divs mobileCardPadding">
                 <h4 className="cardHeading ">{item.heading}</h4>
                 <p className="cardDesc">
                   {item.description}
                 </p>
               </div>
             </div>
            ))
            }
          </div>
        </div>
      </div>

      <div
        className="last-section appMobilePaddingSmall"
        style={{ backgroundColor: "#fff", padding: "30px 0px 100px 0px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5 d-flex align-items-center justify-content-center flex-column">
              <div className="text-section">
                <h1 className=" mainHeadingMobile">Optimized Process</h1>
              </div>
              <img
                src="./images/banner-bottom.png"
                alt="banner-bottom"
                className="w-100 mt-5"
              />
            </div>
          </div>
        
        </div>
      </div>


      <div className="container-fluid navs-app appMobilePadding">
        <div className="row">
          {/* <div className="col-md-1"></div> */}
          <div className="col-md-1 navappImg d-flex align-items-end">
            <img
              src="./images/App-Navs/python.svg"
              alt="python"
              className="w-100 pythonImg tilt-effect"
            />
          </div>
          <div className="col-md-1 navappImg d-flex align-items-center">
            <img
              src="./images/App-Navs/kotlin.svg"
              alt="kotlin"
              className="w-100 kotlinImg tilt-effect"
            />
          </div>
          <div className="col-md-1 navappImg d-flex align-items-start">
            <img
              src="./images/App-Navs/react-native.svg"
              alt="react-native"
              className="w-100 reactnativeImg tilt-effect"
            />
          </div>
          <div className="col-md-6">
            <img
              src="./images/App-Navs/main-laptop.png"
              alt="main-laptop"
              className="w-100"
            />
          </div>
          <div className="col-md-1 navappImg d-flex align-items-start">
            <img
              src="./images/App-Navs/ruby.svg"
              alt="ruby"
              className="w-100 rubyImg tilt-effect"
            />
          </div>
          <div className="col-md-1 navappImg d-flex align-items-center">
            <img
              src="./images/App-Navs/flutter.svg"
              alt="flutter"
              className="w-100 flutterImg tilt-effect"
            />
          </div>
          <div className="col-md-1 navappImg d-flex align-items-end">
            <img
              src="./images/App-Navs/xios.svg"
              alt="xios"
              className="w-100 xiosImg tilt-effect"
            />
          </div>
          {/* <div className="col-md-1"></div> */}
        </div>
      </div>

      <div className="case-study py-5 my-5 appMobilePaddingSmall">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mainHeadingMobile">up-to-the-minute</h2>
            <p className="paragraphText">
              Our software development life cycle empowers companies to
              functionalize their brand identity by building an effective and
              powerful mobile app for its users. To create more clicks and
              produce more revenue we provide a complete mobile solution to make
              a global recognition of your mobile applications.
            </p>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            {uptoTime.map((item, i) => (
              <div className={`col-md-6 ${i > 1 ? "mt-3" : "mgTop15"} `} key={i}>
              <div className="up-to-mints-div mobileCardPadding">
                <h4 className="cardHeading">{item.heading}</h4>
                <p className="cardDesc">
                  {item.description}
                </p>
              </div>
            </div>
            ))}
          
    
          </div>
        </div>
      </div>

      <AppCta CtaHeading="Into an Innovative Mobile App." />

      <div className="mt-5">
        <FaqsSection faqs={faqData} />
        <BudgetSection />
      </div>
      <Footer />
    </>
  );
}

export default page;

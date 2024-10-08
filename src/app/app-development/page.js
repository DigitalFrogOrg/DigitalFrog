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
              <h3></h3>
            </div>
            <div className="col-md-4"></div>
          </div>
          <hr />
        </div>
      </div>

      {/* Second Section */}

      <div className="second-last-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="text-section">
                <h1 className="title-page">discover our history</h1>
                <p className="title-page-p">
                  Leading with years of experience, Dignite Studios has been
                  centering on the modernization of mobile software
                  specifications to create magnificent web and mobile
                  applications for their valuable clients. Our company of mobile
                  business intelligence has a proven track record of triumphant
                  mobile projects which are illustrious in today’s digital
                  realm.
                </p>
                <p className="title-page-p">
                  We have achieved phenomenal growth in empowering diverse
                  businesses with innovation and contemporary ideas to enliven
                  various blueprints. We have globally earned remarkable
                  endorsement and apprehension in the “INC 5000 list.”
                  Throughout the journey, our unwavering focus has remained on
                  transformation, client satisfaction, and making an indelible
                  impact in the realms of technology and software.
                </p>
                <button className="btn-app">Start Your Project</button>
              </div>
            </div>
            <div className="col-md-6 pe-5 py-2">
              <img
                src="./images/third-section.png"
                alt="faqs-sec"
                className="h-100 w-100"
              />
            </div>
          </div>
        </div>
      </div>

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
            <div className="col-md-6 mt-5">
              <div className="accordion mt-2" id="accordionExample">
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
      <div
        className="second-last-section"
        style={{ backgroundColor: "#FFFBF8", padding: "30px 0px 60px 0px" }}
      >
        <div className="container ios-android">
          <div className="row">
            <div className="col-md-9 py-5 d-flex align-items-center justify-content-center">
              <div className="text-section">
                <h1 className="title-page">
                  Mobile app development services for <span>IOS & ANDROID</span>
                </h1>
                <p className="title-page-p">
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

            <div className="col-md-7 pe-5 py-2 ps-5">
              <div className="text-section">
                <h1 className="title-page-2">
                  <span>Android App Development</span>
                </h1>
                <p className="title-page-p-2">
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
                <p className="title-page-p-2">
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

      <div className="second-last-section">
        <div className="container">
          <div className="row">
            <h1 className="top-ranked">
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
                <div className="text-section-hover">
                  <h1 className="title-page-2">
                    Native Mobile App Development
                  </h1>
                  <p className="title-page-p-2">
                    Our software development life cycle empowers companies to
                    functionalize their brand identity by building an effective
                    and powerful mobile app for its users.
                  </p>
                </div>
                <div className="text-section-hover">
                  <h1 className="title-page-2">
                    Cross-Platform App Developmen
                  </h1>
                  <p className="title-page-p-2">
                    React Native, Xamarin, and Flutter are the most popular
                    languages to increase a project's versatility, efficiency,
                    and speed. Thus, that can be delivered promptly through our
                    mobile application services.
                  </p>
                </div>
                <div className="text-section-hover">
                  <h1 className="title-page-2">
                    Hybrid Mobile App Development
                  </h1>
                  <p className="title-page-p-2">
                    Mobile app development technologies have created a strong
                    and unique amalgamate of cross-platform apps that cater to a
                    suitable environment and we make it happen in a smooth way
                    to provide a required mobile solution.
                  </p>
                </div>
                <div className="text-section-hover">
                  <h1 className="title-page-2">
                    Progressive Web App Development
                  </h1>
                  <p className="title-page-p-2">
                    You can easily communicate with anyone with our exclusive
                    progressive web app functionality, which is similar to
                    native-like potential and competency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 pe-5 py-2">
              <img
                src="./images/solution.png"
                alt="faqs-sec"
                className="h-100 w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="second-last-section"
        style={{ backgroundColor: "#FFFBF8", padding: "30px 0px 60px 0px" }}
      >
        <div className="container benefits-of-working">
          <div className="row">
            <div className="col-md-9 py-5">
              <h2>
                Benefits of working with <br /> Cynergy Studios
              </h2>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-end">
              <button className="btn-app">Start Your Project</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="mid-app-divs">
                <h4>Project Outlook</h4>
                <p>
                  Cynergy Studios eradicates all risk factors including
                  incomplete business requirements, unrealistic client
                  expectations, and conducts in-depth interviews concerning
                  value-added improvements in the process, resources, and clear
                  workflow to conduct the projects. We aim to meet project
                  dimensions, milestones, and fast development in the given
                  period. We have established hundreds of successful mobile app
                  development projects by promising clients obligations{" "}
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="mid-app-divs">
                <h4>Collaboration</h4>
                <p>
                  Mobile apps we develop with proper research and interpretation
                  to cater to in-depth project flow. Also, we contribute to
                  collaborate frequently with the client to provide all the
                  updates in the app's development process.Mobile apps we
                  develop with proper research and interpretation to cater to
                  in-depth project flow. Also, we contribute to collaborate
                  frequently with the client to provide all the updates in the
                  app's development process.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mid-app-divs">
                <h4>Cost Estimation</h4>
                <p>
                  Explore a wide range of factors that include creating mobile
                  development effectively and under time constraints with our
                  mobile app developers.Therefore, development costs vary from
                  project to project, however clear and precise project
                  estimation can help to build accurate mobile project planning
                  by covering all its variables. We also analyze various
                  complexities of the apps before moving it further.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="mid-app-divs">
                <h4>Project Outlook</h4>
                <p>
                  Cynergy Studios eradicates all risk factors including
                  incomplete business requirements, unrealistic client
                  expectations, and conducts in-depth interviews concerning
                  value-added improvements in the process, resources, and clear
                  workflow to conduct the projects. We aim to meet project
                  dimensions, milestones, and fast development in the given
                  period. We have established hundreds of successful mobile app
                  development projects by promising clients obligations{" "}
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="mid-app-divs">
                <h4>Collaboration</h4>
                <p>
                  Mobile apps we develop with proper research and interpretation
                  to cater to in-depth project flow. Also, we contribute to
                  collaborate frequently with the client to provide all the
                  updates in the app's development process.Mobile apps we
                  develop with proper research and interpretation to cater to
                  in-depth project flow. Also, we contribute to collaborate
                  frequently with the client to provide all the updates in the
                  app's development process.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mid-app-divs">
                <h4>Cost Estimation</h4>
                <p>
                  Explore a wide range of factors that include creating mobile
                  development effectively and under time constraints with our
                  mobile app developers.Therefore, development costs vary from
                  project to project, however clear and precise project
                  estimation can help to build accurate mobile project planning
                  by covering all its variables. We also analyze various
                  complexities of the apps before moving it further.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="last-section"
        style={{ backgroundColor: "#fff", padding: "30px 0px 100px 0px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5 d-flex align-items-center justify-content-center">
              <div className="text-section">
                <h1 className="title-page">optimized process</h1>
              </div>
            </div>
          </div>
          <img
            src="./images/banner-bottom.png"
            alt="faqs-sec"
            className="h-100 w-100"
          />
        </div>
      </div>
      <div className="container-fluid navs-app">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-1 d-flex align-items-end">
            <img
              src="./images/App-Navs/python.svg"
              alt="python"
              className="w-100 mb-5 tilt-effect"
            />
          </div>
          <div className="col-md-1 d-flex align-items-center">
            <img
              src="./images/App-Navs/kotlin.svg"
              alt="kotlin"
              className="w-100 mb-5 tilt-effect"
            />
          </div>
          <div className="col-md-1 d-flex align-items-start">
            <img
              src="./images/App-Navs/react-native.svg"
              alt="react-native"
              className="w-100 mt-5 tilt-effect"
            />
          </div>
          <div className="col-md-4">
            <img
              src="./images/App-Navs/main-laptop.png"
              alt="main-laptop"
              className="w-100"
            />
          </div>
          <div className="col-md-1 d-flex align-items-start">
            <img
              src="./images/App-Navs/ruby.svg"
              alt="ruby"
              className="w-100 mt-5 tilt-effect"
            />
          </div>
          <div className="col-md-1 d-flex align-items-center">
            <img
              src="./images/App-Navs/flutter.svg"
              alt="flutter"
              className="w-100 mb-5 tilt-effect"
            />
          </div>
          <div className="col-md-1 d-flex align-items-end">
            <img
              src="./images/App-Navs/xios.svg"
              alt="xios"
              className="w-100 mb-5 tilt-effect"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <div className="case-study py-5 my-5">
        <div className="row">
          <div className="col-md-12">
            <h2>up-to-the-minute</h2>
            <p>
              Our software development life cycle empowers companies to
              functionalize their brand identity by building an effective and
              powerful mobile app for its users. To create more clicks and
              produce more revenue we provide a complete mobile solution to make
              a global recognition of your mobile applications.
            </p>
          </div>
          {/* <div className="col-md-2">
          <button>All Work</button>
        </div> */}
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="up-to-mints-div">
                <h4>User Centric Design</h4>
                <p>
                  Consider your users while structuring the layout of the app.
                  Focusing on users will lead you to a victory-based app. And,
                  to acquire user-appealing demographics the experts of Dignite
                  Studios frame a highly interactive, innovative, and
                  user-friendly app for your more active users, higher
                  engagement, and wide audiences. Therefore, our top-tier mobile
                  app development services lie in shaping a highly functional
                  and operational software solution.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="up-to-mints-div">
                <h4>Modern Technology</h4>
                <p>
                  Consider your users while structuring the layout of the app.
                  Focusing on users will lead you to a victory-based app. And,
                  to acquire user-appealing demographics the experts of Dignite
                  Studios frame a highly interactive, innovative, and
                  user-friendly app for your more active users, higher
                  engagement, and wide audiences. Therefore, our top-tier mobile
                  app development services lie in shaping a highly functional
                  and operational software solution.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="up-to-mints-div">
                <h4>Intuitive UX and UI</h4>
                <p>
                  Consider your users while structuring the layout of the app.
                  Focusing on users will lead you to a victory-based app. And,
                  to acquire user-appealing demographics the experts of Dignite
                  Studios frame a highly interactive, innovative, and
                  user-friendly app for your more active users, higher
                  engagement, and wide audiences. Therefore, our top-tier mobile
                  app development services lie in shaping a highly functional
                  and operational software solution.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="up-to-mints-div">
                <h4>Cross-Platform App</h4>
                <p>
                  Consider your users while structuring the layout of the app.
                  Focusing on users will lead you to a victory-based app. And,
                  to acquire user-appealing demographics the experts of Dignite
                  Studios frame a highly interactive, innovative, and
                  user-friendly app for your more active users, higher
                  engagement, and wide audiences. Therefore, our top-tier mobile
                  app development services lie in shaping a highly functional
                  and operational software solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <TestimonialTabs /> */}

      <div className="container">
        <div className="row app-cta">
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <h2>
              into an Innovative <br /> Mobile App.
            </h2>
            <button>Schedule A call</button>
          </div>
          <div className="col-md-5">
            <img
              src="./images/mobile-cta.png"
              alt="mobile-cta"
              className="w-100 mobile-cta"
            />
          </div>
        </div>
      </div>

      {/* <MarqueeSlider /> */}
      <div className="mt-5">
        <FaqsSection />
        <BudgetSection />
        {/* <HotspotSection /> */}
        {/* <RecentNews /> */}
      </div>
      <Footer />
    </>
  );
}

export default page;

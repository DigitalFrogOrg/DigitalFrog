import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MainBanner from "../components/MainBanner";
import Link from "next/link";
import { faqData,designProcess,androidAppDesign,whyChooseUs } from "./data";

const page = () => {

  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Android App Design <br /> Services" />

      <div className="why-choose-us appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="./images/Group1707479732.png"
                alt="why-choose-us"
                className="w-100"
              />
            </div>
            <div className="col-md-6 d-flex align-items-start justify-content-center flex-column paddingLeft3">
              <h2 className="mainHeadingMobile marginTopMobile">Android Mobile App Design Company</h2>
              <p className="paragraphText">
                Setting the eccentric platform of Android mobile app design
                services for years, our top-notch company follows design
                guidelines to thrive businesses beyond innovation to maximize
                user engagement and brand identity. Setting the eccentric
                platform of Android mobile app design services for years, our
                top-notch company follows design guidelines to thrive businesses
                beyond innovation to maximize user engagement and brand
                identity.
              </p>
            <Link href="#getInTouch">
              <button className="second-btn">Drop us a line</button>
            </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mobileAppDesign appMobilePadding ">
        <div className="row">
          <div className="col-md-6 d-flex align-items-start mgBottom flex-column justify-content-center">
            <h2 className="mainHeadingMobile"> Mobile App Design Services</h2>
            <p className="paragraphText">
            Focusing on our definite approach and unwavering efforts to craft phenomenal Android mobile screens. Our well-qualified and experiencedFocusing on our definite approach and unwavering efforts to craft phenomenal Android mobile screens. Our well-qualified and experienced designers deliver ever-evolving custom designs to create user-friendly interfaces that stand out globally.Focusing on our definite approach and unwavering efforts to craft phenomenal Android mobile screens. 
            <br />
            <br />
            Our well-qualified and experienced designers deliver ever-evolving custom designs to create user-friendly interfaces that stand out globally. designers deliver ever-evolving custom designs to create user-friendly interfaces that stand out globally.
            </p>
            <Link href="#getInTouch">
              <button className="second-btn">Drop us a line</button>
            </Link>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <div className="mobileAppDesignBox mobileCardPadding">
                  <img
                    src="./images/mobile-search_12600961.png"
                    alt="mobile-search_12600961"
                  />
                  <h4 className="cardHeading">UX/UI Design</h4>
                  <p className="cardDesc">
                    Cynergy Studios has an exceptional team of custom app
                    development services who can creatively build your Android
                    app to break through your business amplitude to the next
                    level.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="mobileAppDesignBox mobileCardPadding">
                  <img src="./images/rgb_85900432.png" alt="rgb_85900432" />
                  <h4 className="cardHeading">Motion Design</h4>
                  <p className="cardDesc">
                    Adding some flavourful features and high-end specifications
                    to capture attention and enhance the overall user experience
                    of the Android app. Cynergy’s professional Android UI
                    designers build intuitive app layouts to provide Android
                    navigation, high functionality.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mgTop25">
                <div className="mobileAppDesignBox mobileCardPadding">
                  <img
                    src="./images/mobile-development_70753731.png"
                    alt="mobile-development_70753731"
                  />
                  <h4 className="cardHeading">Branding</h4>
                  <p className="cardDesc">
                    It plays a significant role in enhancing the representation
                    of the brand's identity and its usefulness across multiple
                    platforms that resonate with your target audience. Our
                    powerful Android app design team works persistently to rank
                    Android app UI\UX design among the top mobile competencies.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="mobileAppDesignBox mobileCardPadding">
                  <img
                    src="./images/cloud-computing_63418351.png"
                    alt="cloud-computing_63418351"
                  />
                  <h4 className="cardHeading">Design Consultancy</h4>
                  <p className="cardDesc">
                    This refers to the expert guidance to evaluate Android
                    mobile design aesthetically to function exceptionally in a
                    profound manner as per the client's exigencies. They work
                    closely with professionals to roadmap successful solutions
                    for your mobile apps for Android app designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="DesignProcess appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="mainHeadingMobile">Design Process</h2>
              <p className="paragraphText">
                We harness tried-and-tested strategies to streamline the Android
                app design process in full stack. To ensure the app
                functionality and comprehensive design architecture of Android
                mobile app development, Cynergy’s team implements suitable
                related services to make UI and UX design hassle-free and
                competent.
              </p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
            <a href="tel:13463608407">
              <button className="second-btn">Drop us a line</button>
            </a>
            </div>
          </div>
          <div className="row mt-5">
            {designProcess.map((item,i)=>(
              <div className="col-md-4" key={i}>
              <div className="DesignProcessBox mobileCardPadding">
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

      <div className="container highAndroid appMobilePadding">
        <div className="row">
          <div className="col-md-8">
            <h2 className="mainHeadingMobile">Android Mobile App Design</h2>
            <p className="paragraphText">
              The high-end Android mobile app design service scope lies in
              strategizing project flow with proficiency and addressing complex
              structures of UI/UX designs of Android apps. We’ve developed a
              streamlined technical flow to accommodate the key challenges of
              our clients promptly.
            </p>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-end">
          <a href="tel:13463608407">
            <button className="second-btn">Drop us a line</button>
          </a>
          </div>
        </div>
        <div className="row">
          {androidAppDesign.map((item,i)=>(
            <div className="col-md-6 mt-4" key={i}>
            <div className="up-to-mints-div mobileCardPadding">
              <h4 className="cardHeading">{item.heading}</h4>
              <p className="cardDesc">
                {item.description}
              </p>
            </div>
            </div>
          ))

          }
        </div>
      </div>

      <div className="WhyChooseUsMobile appMobilePaddingSmall">
        <div className="container">
          <h2 className="mainHeadingMobile">Why Choose Us</h2>
          <p className="text-center paragraphText">
            We construct strategic, creative, and technical methodologies to
            produce an exceptional user experience that transcends
            <br /> the client’s requisites. Our phenomenal Android mobile app
            design services leverage top-notch app solutions to accelerate
            <br /> the brand’s volume and revenue generation.
          </p>
          <div className="row mt-5">
            {whyChooseUs.map((item,i)=>(
              <div className="col-md-4">
              <div className="MobileQaBoxes mobileCardPadding">
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

      <div className="my-4">
        <AppCta CtaHeading="Into an Innovative Mobile App." />
      </div>
      <div className="my-4">
        <FaqsSection faqs={faqData} />
      </div>
      <BudgetSection />
      <Footer />
    </>
  );
};

export default page;

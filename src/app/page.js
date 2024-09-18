import Header from "./components/Header";
import Footer from "./components/Footer";
import HotspotSection from "./components/HotspotSection";
import FaqsSection from "./components/FaqsSection";
import BudgetSection from "./components/BudgetSection";
import FutureSection from "./components/FutureSection";
import Evolution from "./components/Evolution";
// import MidMobileScroll from "./components/MidMobileScroll";
import TestimonialSlider from "./components/TestimonialSlider";
import Trustees from "./components/Trustees";
import TestimonialTabs from "./components/TestimonialTabs";
import MobileExperiences from "./components/MobileExperiences";
import CynergyStudio from "./components/CynergyStudio";
import RecentNews from "./components/RecentNews";
// Icons
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// import MarqueeSlider from "./components/MarqueeSlider";
import { VideoSec } from "./components/VideoSec";
import GrowthSec from "./components/GrowthSec";

export default function Home() {
  return (
    <>
      <Header />
      <div className="main-banner">
        <div className="container-fluid h-100">
          <div className="row">
            <div className="col-md-10 d-flex align-items-center justify-content-center">
              {/* <div className=""> */}
              <h1 className="mt-5">
                We Design Apps That{" "}
                <span style={{ color: "#dc5f00" }}> Connect</span>
              </h1>
              {/* <p>
                  We specialize in delivering creative mobile app solutions that
                  make a real difference. Our mission is to combine creativity
                  and technology to deliver solutions that exceed expectations
                  and drive success.
                </p> */}
              {/* <button>Start Now</button> */}
              {/* </div> */}
            </div>
            {/* <div className="mid-mobile-div col-md-4 d-flex align-items-center justify-content-center">
              <img
                src="/images/mid-banner-mobile.png"
                class="mid-mobile-img"
                alt="mid-banner-mobile"
              />
            </div> */}
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <div className="banner-numbers">
                {/* <h4>98%</h4>
                <p>
                  The Data and Information <br /> Displayed is accurate.
                </p>
                <h4>875k+</h4>
                <p>
                  Users who are satisfied with the
                  <br /> interface and experience of the app.
                </p>
                <button>
                  How It Works <CiPlay1 />
                </button> */}
                <div className="right-banner-div">
                  <div className="banner-social">
                    <FaLinkedin />
                    <FaInstagram />
                    <FaFacebook />
                  </div>
                  <span>We Are The Mobile Business Builders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoSec />
      <GrowthSec />
      {/* <MarqueeSlider /> */}
      <FutureSection />
      {/* <MidMobileScroll /> */}
      <Evolution />
      <CynergyStudio />
      <RecentNews />
      <TestimonialSlider />
      <MobileExperiences />
      <TestimonialTabs />
      <Trustees />
      <FaqsSection />
      <BudgetSection />
      <HotspotSection />
      <Footer />
    </>
  );
}

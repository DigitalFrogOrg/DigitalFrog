import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileAppTabs from "../components/MobileAppTabs";
import MaintenanceProcess from "../components/MaintenanceProcess";
import MainBanner from "../components/MainBanner";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import AppCta from "../components/AppCta";
import Link from "next/link";
import {faqData,topNotch,whyCynergy,testingApp} from './data'
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";

const page = () => {
  
  
  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Mobile App testing<br /> Services" />

      <div className="container app-testing appMobilePadding" >
        <div className="row">
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column">
            <h2 className="mainHeadingMobile">Mobile App Testing Services</h2>
            <p className="paragraphText my-3">
              The first-class mobile testing team of cynergy Studios fabricates
              automated testing of apps to hasten effective solutions instantly.
            </p>
           <DropUsALine />
          </div>
          <div className="col-md-6 appTestRight footerSection">
            <div className="row">
             <div className="col-md-6">
                {testingApp.slice(0,2).map((item,i)=>(
                  <div className="col-md-12 mb-5" key={i}>
                    <AppCard height={355} hoverEffect="effect9" heading={item.heading} isCenter={true} description={item.description} />
                  </div>
                ))}
             </div>
             <div className="col-md-6">
             {testingApp.slice(2,4).map((item,i)=>(
                  <div  className="col-md-12 mgTop15" style={{margin:i==0?'6rem 0 3rem 0':''}} key={i}>
                    <AppCard height={355} hoverEffect="effect9" heading={item.heading} isCenter={true} description={item.description} />
                  </div>
                ))}
             </div>
           
            </div>
          </div>
        </div>
      </div>

      <div className="topNotchSection appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-start justify-content-center flex-column">
              <h2 className="mainHeadingMobile">
                Top-Notch <span>Benefits</span>
              </h2>
              <p className="paragraphText">
                The first-class application testing services of Cynergy Studios
                pursue the perfection of landscape to meet the reality of
                diverse devices, and user expectations to ensure refined
                customized solutions for your apps.
              </p>

              {topNotch.map((item) => (
                <div className="">
                  <h4 className="cardHeading">{item.heading}</h4>
                  <p className="cardDesc">{item.description}</p>
                </div>
              ))}

           
            </div>
            <div className="col-md-6">
              <img className="imgWidth95" src="./images/Group1707479828.png" alt="Group1707479828" />
            </div>
          </div>
        </div>
      </div>

      <MobileAppTabs />

      <div className="TestingProcess appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h2 className="mainHeadingMobile">Inevitable Testing Process</h2>
              <p className="paragraphText">
                The top-class mobile app testing services of Cynergy Studios
                streamline highly effective testing methodology to prevent
                disasters and provide the most reliable solutions to their
                partners and customers.The top-class mobile app testing services
                of Cynergy Studios streamline highly effective testing
                methodology to prevent disasters and provide the most reliable
                solutions to their partners and customers.
              </p>
            </div>
            <div className="col-md-3 mgBottom25 d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>
          </div>
          <MaintenanceProcess />
        </div>
      </div>

      <div className="StudiosWhy appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className="mainHeadingMobile">Why Cynergy Studios</h2>
              <p className="paragraphText">
                The top-class mobile app testing services of Cynergy Studios
                streamline highly effective testing methodology to prevent
                disasters and provide the most reliable solutions to their
                partners and customers.
              </p>
            </div>
            <div className="col-md-5 d-flex align-items-center justify-content-end">
            <DropUsALine />
            </div>
          </div>
          <div className="row">
            {whyCynergy.map((item,i) => (
               <div className="col-md-4 mgTop25" key={i}>
                <AppCard height={303} hoverEffect="effect2" showLine={true} isCenter={true} heading={item.heading} description={item.description} />
             
             
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
};

export default page;

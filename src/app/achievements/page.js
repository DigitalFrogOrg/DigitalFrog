import Header from "../components/Header";
import Footer from "../components/Footer";
import CaseStudySlider from "../components/CaseStudySlider";
import RecentNews from "../components/RecentNews";
import {cardData} from './data'

const page = () => {
  return (
    <>
      <Header />
      <div className="about-banner" style={{ paddingBottom: "2rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Achievement</h1>
            </div>
          </div>
          <hr />
          <div className="d-flex mt-2 align-items-center justify-content-between">
            <div className="">@2024</div>
            <div className="d-flex gap-2 align-items-center">
              <div>
              Filter: All Work
              </div>
              <div>
              <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.3501" cy="9.521" r="9.396" fill="#DC5F00"/>
                <path d="M10.0401 13.8715C10.2116 14.043 10.4896 14.043 10.6611 13.8715L13.4556 11.077C13.6271 10.9055 13.6271 10.6275 13.4556 10.456C13.2841 10.2845 13.0061 10.2845 12.8346 10.456L10.3506 12.94L7.86659 10.456C7.6951 10.2845 7.41707 10.2845 7.24559 10.456C7.0741 10.6275 7.0741 10.9055 7.24559 11.077L10.0401 13.8715ZM9.91147 5.48096L9.91147 13.561L10.7897 13.561L10.7897 5.48096L9.91147 5.48096Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container achievements-page appMobilePadding mt-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src="./images/achievement-page/orderPaying.png"
              alt="image-1"
              className="w-100"
            />
          </div>
          <div className="arrows-div mgTop25 col-md-6 d-flex align-items-start justify-content-center flex-column paddingLeft3">
            <img src="./images/achievement-page/arrow-1.png" alt="arrow-1" />
            <h1 className="heading50">OrderPay: Mobile Ordering</h1>
            <p className="paragraphText">
            Take more tips, drive higher spend and turn tables faster, with the UK’s most cost-effective order and payment provider.We don’t believe in one-size-fits-all technology. Whether you’re a national restaurant chain, an independent cafe or an 18-hole golf course, we’ll help you find the right solution for your business.Let your customers order and pay the way that suits them, with no need to download an app or wait for a card terminal.
            </p>
            <div className="tags">
              <button>#softwaredevelopment</button>
              <button>#strategy</button>
              <button>#designservices</button>
            </div>
          </div>
        </div>
        <hr className="my-5" />

        <div className="row">
        {cardData.map((item,i)=>(
          <div className={`col-md-6 my-4 ${i < cardData.length - 2?'border-bottom pb-5':'' }`} key={i}>
          <img
            src={`/images/achievement-page/${item.imageUrl}`}
            className="w-100"
            alt="image-2"
          />
          <div className="arrows-div d-flex align-items-start me-4 justify-content-center flex-column mt-4">
            <img src="./images/achievement-page/arrow-1.png" alt="arrow-1" />
            <h2 className="heading50">{item.heading}</h2>
            <p className="paragraphText">
              {item.description}
            </p>
            <div className="tags">
              {item.tags.map((tag,index)=>(<button key={index}>{tag}</button>))}
            </div>
          </div>
          </div>
        ))}
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
};

export default page;

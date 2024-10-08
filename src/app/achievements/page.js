import Header from "../components/Header";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <div className="about-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Achievement</h1>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">@2024</div>
            <div className="col-md-6 text-end">
              <p>Filter: All Work</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container achievements-page">
        <div className="row">
          <div className="col-md-6">
            <img
              src="./images/achievement-page/image-1.png"
              alt="image-1"
              className="w-100"
            />
          </div>
          <div className="arrows-div col-md-6 d-flex align-items-start justify-content-center flex-column ps-5">
            <img src="./images/achievement-page/arrow-1.png" alt="arrow-1" />
            <h2>Active SOS</h2>
            <p>
              We may share the information that we collect, both personal and
              non-personal, with third parties such as advertisers, contest
              sponsors, promotional and marketing partners, and others who
              provide our content or whose products or services we think may
              interest you.
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
          <div className="col-md-6">
            <img
              src="./images/achievement-page/image-2.png"
              className="w-100"
              alt="image-2"
            />
            <div className="arrows-div d-flex align-items-start justify-content-center flex-column mt-4">
              <img src="./images/achievement-page/arrow-1.png" alt="arrow-1" />
              <h2>App Store Preview</h2>
              <p>
                We may share the information that we collect, both personal and
                non-personal, with third parties such as advertisers, contest
                sponsors, promotional and marketing partners, and others who
                provide our content or whose products or services we think may
                interest you.
              </p>
              <div className="tags">
                <button>#softwaredevelopment</button>
                <button>#strategy</button>
                <button>#designservices</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="./images/achievement-page/image-3.png"
              className="w-100"
              alt="image-2"
            />
            <div className="arrows-div d-flex align-items-start justify-content-center flex-column mt-4">
              <img src="./images/achievement-page/arrow-1.png" alt="arrow-1" />
              <h2>KC Elite Ecommerce Store</h2>
              <p>
                We may share the information that we collect, both personal and
                non-personal, with third parties such as advertisers, contest
                sponsors, promotional and marketing partners, and others who
                provide our content or whose products or services we think may
                interest you.
              </p>
              <div className="tags">
                <button>#softwaredevelopment</button>
                <button>#strategy</button>
                <button>#designservices</button>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />
      </div>

      
      <Footer />
    </>
  );
};

export default page;

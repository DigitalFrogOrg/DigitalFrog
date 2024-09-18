import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function page() {
  return (
    <>
      <Header />
      {/* main banner */}
      <div className="about-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>About Us</h1>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src="./images/about-picture.png"
              alt="about-picture"
              className="w-100"
            />
          </div>
          <div className="col-md-6 about-text">
            <h2>
              <span>Cyne</span>
              rgy Studio
            </h2>
            <p>
              We may share the information that we collect, both personal and
              non-personal, with third parties such as advertisers, contest
              sponsors, promotional and marketing partners, and others who
              provide our content or whose products or services we think may
              interest you. We may also share it with our current and future
              affiliated companies and business partners, and if we are involved
              in a merger, asset sale or other business reorganization, we may
              also share or transfer your personal and non-personal information
              to our successors-in-interest.
              <br /> <br />
              We may engage trusted third party service providers to perform
              functions and provide services to us, such as hosting and
              maintaining our servers and the website, database storage and
              management, e-mail management, storage marketing, credit card
              processing, customer service and fulfilling orders for products
              and services you may purchase through the website. We will likely
              share your personal information, and possibly some non-personal
              information, with these third parties to enable them to perform
              these services for page 3/8 us and for you.
              <br /> <br />
              We may share portions of our log file data, including IP
              addresses, for analytics purposes with third parties such as web
              analytics partners, application developers, and ad networks. If
              your IP address is shared, it may be used to estimate general
              location and other technographics such as connection speed,
              whether you have visited the website in a shared location.
            </p>
          </div>
        </div>
        <div className="row pt-5 pb-5">
          <div className="col-md-12">
            <p style={{ fontSize: "17px" }}>
              We may share the information that we collect, both personal and
              non-personal, with third parties such as advertisers, contest
              sponsors, promotional and marketing partners, and others who
              provide our content or whose products or services we think may
              interest you. We may also share it with our current and future
              affiliated companies and business partners, and if we are involved
              in a merger, asset sale or other business reorganization, we may
              also share or transfer your personal and non-personal information
              to our successors-in-interest.We may engage trusted third party
              service providers to perform functions and provide services to us,
              such as hosting and maintaining our servers and the website,
              database storage and management, e-mail management, storage
              marketing, credit card processing, customer service and fulfilling
              orders for products and services you may purchase through the
              website. We will likely share your personal information, and
              possibly some non-personal information, with these third parties
              to enable them to perform these services for page 3/8 us and for
              you.
              <br /> <br />
              We may share portions of our log file data, including IP
              addresses, for analytics purposes with third parties such as web
              analytics partners, application developers, and ad networks. If
              your IP address is shared, it may be used to estimate general
              location and other technographics such as connection speed,
              whether you have visited the website in a shared location.We may
              share the information that we collect, both personal and
              non-personal, with third parties such as advertisers, contest
              sponsors, promotional and marketing partners, and others who
              provide our content or whose products or services we think may
              interest you. We may also share it with our current and future
              affiliated companies and business partners, and if we are involved
              in a merger, asset sale or other business reorganization, we may
              also share or transfer your personal and non-personal information
              to our successors-in-interest.
              <br /> <br />
              We may engage trusted third party service providers to perform
              functions and provide services to us, such as hosting and
              maintaining our servers and the website, database storage and
              management, e-mail management, storage marketing, credit card
              processing, customer service and fulfilling orders for products
              and services you may purchase through the website. We will likely
              share your personal information, and possibly some non-personal
              information, with these third parties to enable them to perform
              these services for page 3/8 us and for you.
              <br /> <br />
              We may share portions of our log file data, including IP
              addresses, for analytics purposes with third parties such as web
              analytics partners, application developers, and ad networks. If
              your IP address is shared, it may be used to estimate general
              location and other technographics such as connection speed,
              whether you have visited the website in a shared location.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;

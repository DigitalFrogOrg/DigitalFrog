import React from "react";

function FutureSection() {
  return (
    <section className="future-mobile">
      <div className="container">
        <div className="future-head">
          <h2>We Build the Future of Mobile Experiences</h2>
          {/* <p>
            We specialize in delivering creative mobile app solutions that make
            a real difference. Our mission is to combine creativity and
            technology to deliver solutions that exceed expectations and drive
            success.
          </p> */}
        </div>
        {/* <div className="row">
          <div className="col-md-4">
            <div className="future-box">
              <div className="future-img">
                <img src="/images/mobile.png" alt="Mobile App Development" />
              </div>
              <h4>Mobile App Development</h4>
              <p>
                After digesting your idea/project, our professional mobile app
                designers will build out a beautiful Wireframe & Clickable
                Prototype to bring your project to life with color and brand.
              </p>
              <ul>
                <li>Average Time: 2 weeks</li>
                <li>Average Cost: $5,000</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="future-box">
              <div className="future-img">
                <img src="/images/ai.png" alt="Artificial Intelligence" />
              </div>
              <h4>Artificial Intelligence</h4>
              <p>
                After digesting your idea/project, our professional mobile app
                designers will build out a beautiful Wireframe & Clickable
                Prototype to bring your project to life with color and brand.
              </p>
              <ul>
                <li>Average Time: 2 weeks</li>
                <li>Average Cost: $5,000</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="future-box">
              <div className="future-img">
                <img src="/images/android.png" alt="Android Development" />
              </div>
              <h4>Android Development</h4>
              <p>
                After digesting your idea/project, our professional mobile app
                designers will build out a beautiful Wireframe & Clickable
                Prototype to bring your project to life with color and brand.
              </p>
              <ul>
                <li>Average Time: 2 weeks</li>
                <li>Average Cost: $5,000</li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* <button type="button" className="whole-btn2">
          Show More
        </button> */}
        <div className="row process-01">
          <div className="col-md-6">
            <img
              src="./images/span-01.svg"
              alt="process-01"
              className="w-100 pe-5"
            />
          </div>
          <div className="col-md-6 text-start d-flex align-items-center justify-content-center">
            <div>
              <h2>
                <strong>
                  <em>Mobile App Development</em>
                </strong>
              </h2>
              <p>
                After digesting your idea/project, our professional mobile app
                designers will build out a beautiful Wireframe & Clickable
                Prototype to bring your project to life with color and
                brand.After digesting your idea/project, our professional mobile
                app designers will build out a beautiful Wireframe.
              </p>
              <h6>
                <strong> Average Time: 2 weeks Average Cost: $5,000</strong>
              </h6>
            </div>
            <img
              src="./images/mingcute_arrow-up-line.png"
              alt="arrow"
              className="process-arrow-01"
            />
          </div>
        </div>

        <div className="row process-02">
          <div className="col-md-6 text-start d-flex align-items-center justify-content-center ps-5">
            <div className="ps-5">
              <h2>
                <strong>
                  <em>Artificial Intelligence</em>
                </strong>
              </h2>
              <p>
                After digesting your idea/project, our professional mobile app
                designers will build out a beautiful Wireframe & Clickable
                Prototype to bring your project to life with color and
                brand.After digesting your idea/project, our professional mobile
                app designers will build out a beautiful Wireframe.
              </p>
              <h6>
                <strong> Average Time: 2 weeks Average Cost: $5,000</strong>
              </h6>
            </div>
            <img
              src="./images/mingcute_arrow-left-line.png"
              alt="arrow"
              className="process-arrow-02"
            />
          </div>
          <div className="col-md-6">
            <img
              src="./images/span-02.svg"
              alt="process-02"
              className="w-100 ps-5"
            />
          </div>
        </div>
        <div className="row process-03">
          <div className="col-md-6">
            <img
              src="./images/span-03.svg"
              alt="process-03"
              className="w-100 pe-5"
            />
          </div>
          <div className="col-md-6 text-start d-flex align-items-center justify-content-center">
            <div>
              <h2>
                <strong>
                  <em>Android Development</em>
                </strong>
              </h2>
              <p>
                After digesting your idea/project, our professional mobile app
                designers will build out a beautiful Wireframe & Clickable
                Prototype to bring your project to life with color and
                brand.After digesting your idea/project, our professional mobile
                app designers will build out a beautiful Wireframe.
              </p>
              <h6>
                <strong> Average Time: 2 weeks Average Cost: $5,000</strong>
              </h6>
            </div>
            <img
              src="./images/mingcute_arrow-up-white.png"
              alt="arrow"
              className="process-arrow-03"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FutureSection;

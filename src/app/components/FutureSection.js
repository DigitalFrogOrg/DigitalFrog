import React from "react";

function FutureSection() {
  return (
    <section className="future-mobile">
      <div className="container">
        <div className="future-head">
          <h2>We Build the Future of Mobile Experiences</h2>
          <p>
            We specialize in delivering creative mobile app solutions that make
            a real difference. Our mission is to combine creativity and
            technology to deliver solutions that exceed expectations and drive
            success.
          </p>
        </div>
        <div className="row">
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
        </div>
        <button type="button" class="whole-btn2">Show More</button>
      </div>
    </section>
  );
}

export default FutureSection;

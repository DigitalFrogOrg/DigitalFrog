import React from "react";

function TestimonialTabs() {
  return (
    <>
      <div className="container-fluid testimonial-tabs">
        <h2 className="text-center">Trusted Innovators, Loved by Users</h2>
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="review review-2">
              <div className="avatar">
                <div className="me-2">
                  <img src="/images/review-avatar-1.png" alt="avatar" />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h5>Alex R.</h5>
                  <h6>Tech Startup Founder</h6>
                </div>
              </div>
              <p>
                Working with Cynergy Studios was a game-changer for our
                business. Their team turned our vision into a stunning mobile
                app, delivered on time, and exceeded our expectations. Highly
                recommend!
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="review">
              <div className="avatar">
                <div className="me-2">
                  <img src="/images/review-avatar-2.png" alt="avatar" />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h5>Maria T.</h5>
                  <h6>E-commerce Business Owner</h6>
                </div>
              </div>
              <p>
                Cynergy Studios' expertise in web development is unmatched.
                They understood our needs, offered creative solutions, and
                delivered a flawless product. The ongoing support has been
                exceptional.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="review review-2">
              <div className="avatar">
                <div className="me-2">
                  <img src="/images/review-avatar-3.png" alt="avatar" />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h5>John K.</h5>
                  <h6>Digital Marketing Agency CEO</h6>
                </div>
              </div>
              <p>
                From concept to launch, Cynergy Studios was with us every step
                of the way. Their professionalism, technical skills, and focus
                on security made our web app a great success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialTabs;

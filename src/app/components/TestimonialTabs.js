// "use client";
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const testimonialsData = [
//   {
//     name: "Alex R.",
//     role: "Tech Startup Founder",
//     avatar: "/images/review-avatar-1.png",
//     review:
//       "Working with Cynergy Studios was a game-changer for our business. Their team turned our vision into a stunning mobile app, delivered on time, and exceeded our expectations. Highly recommend!",
//   },
//   {
//     name: "Maria T.",
//     role: "E-commerce Business Owner",
//     avatar: "/images/review-avatar-2.png",
//     review:
//       "Cynergy Studios' expertise in web development is unmatched. They understood our needs, offered creative solutions, and delivered a flawless product. The ongoing support has been exceptional.",
//   },
//   {
//     name: "John K.",
//     role: "Digital Marketing Agency CEO",
//     avatar: "/images/review-avatar-3.png",
//     review:
//       "From concept to launch, Cynergy Studios was with us every step of the way. Their professionalism, technical skills, and focus on security made our web app a great success.",
//   },
//   // Add more testimonials as needed...
// ];

// function TestimonialTabs() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="container-fluid testimonial-tabs">
//       <h2 className="text-center">Trusted Innovators, Loved by Users</h2>
//       <Slider {...settings}>
//         {testimonialsData.map((testimonial, index) => (
//           <div key={index} className="review">
//             <div className="avatar d-flex">
//               <div className="me-2">
//                 <img src={testimonial.avatar} alt="avatar" />
//               </div>
//               <div className="d-flex flex-column justify-content-center">
//                 <h5>{testimonial.name}</h5>
//                 <h6>{testimonial.role}</h6>
//               </div>
//             </div>
//             <p>{testimonial.review}</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default TestimonialTabs;

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
                Cynergy Studios' expertise in web development is unmatched. They
                understood our needs, offered creative solutions, and delivered
                a flawless product. The ongoing support has been exceptional.
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

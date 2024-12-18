"use client";
import React, { useState } from "react";
import Link from "next/link";

function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      subTitle: "Case Study:",
      title: "Parceled",
      text: "Parceled is a powerful real estate tool designed to simplify property data access for users. With its comprehensive map-based search, users can explore parcel details, property boundaries, and ownership information across the United States. By integrating public records, aerial imagery, and advanced filtering options, Parceled provides an intuitive interface that makes it easy for real estate professionals, developers, and property buyers to make informed decisions. The app's accuracy and user-friendly experience have enabled it to become a valuable resource for navigating the complexities of land data, ensuring quick and efficient real estate analysis and planning.",
      imgSrc: "/images/mobileSlider.png",
    },
    {
      id: 2,
      subTitle: "Case Study:",
      title: "ASL Flurry",
      text: "ASL Flurry is an educational app designed to make learning American Sign Language (ASL) both engaging and accessible. Offering interactive lessons, games, and quizzes, the app helps all of the users of skill levels, from beginners to advanced, master ASL at their own pace. With a vast library of vocabulary and phrases, ASL Flurry supports visual learners through high-quality video demonstrations of each sign. Its gamified approach encourages regular practice, boosting retention and fluency. By providing a user-friendly and immersive experience, ASL Flurry plays a pivotal role in fostering communication within the Deaf community and beyond.",
      imgSrc: "/images/mobileSlider-2.png",
    },
    {
      id: 3,
      subTitle: "Case Study:",
      title: "Eksperience MyApp",
      text: "Experience MyApp is a versatile tool tailored for professionals in the beauty and wellness industry. Designed to streamline salon and spa operations, the app provides features such as appointment scheduling, client management, and inventory tracking. By centralizing these essential tasks, Eksperience MyApp helps businesses enhance efficiency, reduce manual work, and improve customer service. The app also supports staff management, allowing easy tracking of schedules and performance. With an intuitive interface and customizable options, Eksperience MyApp empowers beauty businesses to focus more on delivering exceptional services while keeping administrative tasks organized and simplified.",
      imgSrc: "/images/mobileSlider-3.png",
    },
    {
      id: 4,
      subTitle: "Case Study:",
      title: "The Fortune Teller App by Full Moon",
      text: "The Fortune Teller App by Full Moon offers users a captivating experience with personalized fortune readings and insights. Leveraging astrology, tarot, and palmistry, the app provides daily, weekly, and monthly predictions tailored to individual users' life paths. With an intuitive interface and visually appealing design, users can explore multiple facets of their future, including love, career, and health. The app’s interactive features, such as daily horoscopes and live fortune-telling sessions, engage users and keep them returning for insights. After you combine ancient wisdom with modern technology, The Fortune Teller App has built a loyal user base seeking guidance and entertainment.",
      imgSrc: "/images/mobileSlider-4.png",
    },
  ];

  const getSlideClass = (index) => {
    if (index === activeIndex) return "current";
    if (index === (activeIndex + testimonials.length - 1) % testimonials.length)
      return "prev";
    if (index === (activeIndex + 1) % testimonials.length) return "next";
    return "hidden";
  };

  const handleNumberClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container-fluid">
      <div className="testimonial-slider">
        <div className="row">
          <div
            className="col-md-4 orange-sec"
            style={{ background: "#dc5f00" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`image-container ${getSlideClass(index)}`}
              >
                <img
                  src={testimonial.imgSrc}
                  alt={`testimonial-img-${index + 1}`}
                />
              </div>
            ))}
          </div>
          <div className="col-md-8 testimonials">
            <div className="one-test">
              <div className="number-selector">
                {testimonials.map((_, index) => (
                  <h4
                    key={index}
                    onClick={() => handleNumberClick(index)}
                    className={activeIndex === index ? "active" : ""}
                    style={{ cursor: "pointer" }}
                  >
                    {index + 1}
                  </h4>
                ))}
              </div>

              <h5>{testimonials[activeIndex].subTitle}</h5>
              <h3>{testimonials[activeIndex].title}</h3>
              <p>{testimonials[activeIndex].text}</p>
              <br />
              <br />
              <div className="d-flex w-100 gap-5">
                <Link href="/mobile-app-design">
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "#DC5F00",
                    borderColor: "#DC5F00",
                    borderWidth: 1,
                  }}
                  >
                  App Design
                </button>
                  </Link>
                  <Link href="/native-app-development">
                <button style={{ backgroundColor: "#DC5F00", color: "#fff" }}>
                  App Development
                </button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSlider;

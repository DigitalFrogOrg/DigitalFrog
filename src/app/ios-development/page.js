import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MainBanner from "../components/MainBanner";
import Link from "next/link";

const page = () => {
  const faqData = [
    {
      questionId: "01",
      question: "Who designs Android mobile apps?",
      answer:
        "Android mobile apps are designed by a team that typically includes Android app designers, UI/UX specialists, and developers. This collaboration ensures that the app is visually appealing, user-friendly, and functional.",
    },
    {
      questionId: "02",
      question: "What does an Android mobile app designer do?",
      answer:
        "An Android mobile app designer focuses on creating the visual and interactive elements of the app. They ensure the user interface is engaging and intuitive, aligning with user needs and business goals.",
    },
    {
      questionId: "03",
      question:
        "What is the difference between an Android app developer and an Android app designer?",
      answer:
        "An Android app developer is responsible for coding and building the app’s functionality, while an Android app designer concentrates on the app's aesthetics and user experience. Together, they create a cohesive product.",
    },
    {
      questionId: "04",
      question:
        "What is the difference between Android app design vs. iOS app design?",
      answer:
        "The primary difference lies in the design guidelines and user interface principles dictated by Google for Android and Apple for iOS. Each platform has distinct design philosophies, affecting layout, navigation, and overall user experience.",
    },
    {
      questionId: "05",
      question: "How much does it cost to design an Android app?",
      answer:
        "The cost of designing an Android app can vary widely, depending on factors such as complexity, features, and the designer's experience. On average, you might expect costs to range from a few thousand to tens of thousands of dollars.",
    },
  ];
  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="IOS Development<br /> Services" />

      <div className="container app-testing">
        <div className="row">
          <div className="col-md-6">
            <img
              src="./images/22201.png"
              alt="22201"
              className="w-100"
              style={{ margin: "-50px" }}
            />
          </div>
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column px-5">
            <h2>Development Company</h2>
            <p>
              Experience well-structured development of mobile apps, with our
              years of strong acquaintance in the field of iOS development that
              leverage unique tools, languages, and wireframes to excel in the
              business of digital cosmos. Make your iOS app development the most
              advanced with current functionalities and operations.
            </p>
            <Link href="#getInTouch">
            <button className="second-btn mt-2">
              Let’s Start Your Project
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "#FFFBF8" }}
        className="IOSDevelopmentServices"
      >
        <div className="container">
          <h2 className="text-center">IOS Development Services</h2>
          <p className="text-center">
            The leading iOS application development company Cynergy Studios
            provides the best layout of
            <br /> applications with a standardized and well-developed approach
            for user-friendly apps.
          </p>
          <div className="row mt-5">
            <div className="col-md-6 pe-5 second-section">
              <div className="accordion mt-2 ahh2" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header w-100">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Custom IOS App Development
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen bookIt has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      IPhone App Designing
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen bookIt has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Integration Services
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen bookIt has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      App Migration and Upgrades
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen bookIt has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ps-5">
              <img
                src="./images/Group1707479746.png"
                alt="Group1707479746"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-4">
        <AppCta CtaHeading="Into an Innovative Mobile App." />
      </div>
      <div className="my-4">
        <FaqsSection faqs={faqData} />
      </div>
      <BudgetSection />
      <Footer />
    </>
  );
};

export default page;

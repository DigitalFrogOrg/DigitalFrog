import Header from "../components/Header";
import Footer from "../components/Footer";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MainBanner from "../components/MainBanner";

const page = () => {
  const faqData = [
    {
      questionId: "01",
      question: "How much does a mobile app designer cost?",
      answer:
        "The cost of hiring a mobile app designer varies widely based on experience, location, and project complexity. On average, freelance designers may charge between $50 to $150 per hour, while design agencies can range from $100 to $250 per hour or more.",
    },
    {
      questionId: "02",
      question: "What does a mobile app designer do?",
      answer:
        "A mobile app designer is responsible for creating the visual elements and user experience of an app. They design the layout, icons, and overall aesthetics, ensuring the app is user-friendly and aligns with branding.",
    },
    {
      questionId: "03",
      question: "Who designs mobile apps?",
      answer:
        "Mobile apps are designed by a combination of professionals, including UI/UX designers, graphic designers, and sometimes product managers, who collaborate to create an intuitive and visually appealing user experience.",
    },
    {
      questionId: "04",
      question:
        "What is the difference between an app developer and an app designer?",
      answer:
        "An app developer focuses on coding and building the app's functionality, while an app designer concentrates on the visual aspects and user experience. Both roles are essential for successful app development.",
    },
    {
      questionId: "05",
      question: "How can to improve the app experience?",
      answer:
        "To enhance the app experience, prioritize user feedback, conduct usability testing, streamline navigation, optimize loading times, and ensure consistent updates with new features. User-centric design and continuous improvement are key.",
    },
  ];
  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="PWA Development<br/> Services" />

      <div className="why-choose-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-start justify-content-center flex-column gap-3">
              <h2>Web App Development Company</h2>
              <p>
                With years of proven track record, Cynergy Studios lays an
                efficient structure to build a highly intuitive progressive web
                app (PWA), connecting iOS, Android, and Web assets under a
                single codebase. We acquire next-gen features to make your PWA
                deliver the fastest, reliable, and engaging development process
                to meet the needs of the users.
              </p>
              <button className="second-btn">Schedule A Call</button>
            </div>
            <div className="col-md-6">
              <img
                src="./images/Group1707479745.png"
                alt="why-choose-us"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>



      
      <div className="my-4">
        <AppCta CtaHeading={"Cynergy’s Service Scope?"} />
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

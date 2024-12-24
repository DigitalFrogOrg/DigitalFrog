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
      <MainBanner MainBannerHeading="No Code/Low-Code<br /> Revolution" />

      <div className="container LowCodeNoCode appMobilePadding">
        <div className="row">
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column">
            <h2 className="mainHeadingMobile">Low-Code/No-Code Mastery: Platforms We Excel In</h2>
            <h4 className="subHeading">Our Expertise in Action Services</h4>
            <p>
              At cynergy LA, we bring low-code and no-code solutions to life
              with a comprehensive suite of services. From rapid prototyping for
              swift market validation to crafting in-house products like CRMs or
              ERPs, and facilitating the complete development lifecycle of
              products destined for launch and scale.
            </p>
            <Link href="#getInTouch">
            <button className="second-btn">Start Your Project</button>
            </Link>
          </div>
          <div className="col-md-6 footerSection">
            <img
              src="./images/Group37653456.png"
              alt="Group37653456"
              className="w-100"
            />
          </div>
        </div>
      </div>

      <div className="DesignProcess appMobilePaddingSmall">
        <div className="container">
          <h2 className="text-center mainHeadingMobile">
            Empower with Ease: No-
            <br />
            Code/Low-Code
          </h2>
          <p className="text-center">
            ow-code platforms like Bubble are fantastic for rapidly developing
            web and mobile applications without needing extensive
            <br /> coding knowledge. They excel in creating prototypes, MVPs
            (Minimum Viable Products), and simple to moderately complex
            <br /> applications, offering drag-and-drop interfaces and pre-built
            templates for ease of use.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="DesignProcessBox" style={{ height: "90%" }}>
                <h4>Low-Code/No-Code Solutions</h4>
                <p>
                  Cynergy LA offers specialized services in low-code and no-code
                  solutions, streamlining development processes for quicker and
                  more cost-effective application deployment.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="DesignProcessBox" style={{ height: "90%" }}>
                <h4>Rapid Prototyping</h4>
                <p>
                  Rapid Prototyping: Our services enable clients to swiftly
                  visualize and iterate on their ideas, accelerating the
                  development cycle without the need for extensive coding,
                  ensuring efficient concept validation.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="DesignProcessBox" style={{ height: "90%" }}>
                <h4>Scalable Product Launch</h4>
                <p>
                  Scalable Product Launch: We support clients in seamlessly
                  launching and scaling their products, harnessing the agility
                  and flexibility inherent in low-code and no-code development
                  for efficient and adaptable solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="DesignProcessBox" style={{ height: "90%" }}>
                <h4>Cross-Platform Proficiency</h4>
                <p>
                  Cross-Platform Proficiency: With expertise in various
                  platforms like WordPress, Wix, Bubble, FlutterFlow, and
                  Appian, Cynergy ensures a versatile and tailored approach to
                  development, catering to diverse client needs across different
                  technologies.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="DesignProcessBox" style={{ height: "90%" }}>
                <h4>Support And Maintenance</h4>
                <p>
                  After our native app development services. we establish
                  maintenance packages to update the app features and designs on
                  monthly or yearly terms and conditions. top-notch solutions
                  for your apps to make it flawless and unique.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="DesignProcessBox" style={{ height: "90%" }}>
                <h4>Innovative Development</h4>
                <p>
                  Innovative Development: Cynergy excels in bringing innovative
                  ideas to life through no-code and low-code platforms,
                  providing clients with a cutting-edge and customized approach
                  to digital development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="SuccessfullDeveloped appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mainHeadingMobile">
                Our Successfully <br /> Developed Projects
              </h2>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end footerSection">
            <Link href="#getInTouch">
              <button className="second-btn">Start Your Project</button>
            </Link>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <div className="SuccessfullBox">
                <img src="./images/232343.png" alt="232343" className="w-100" />
                <h3 className="mainHeadingMobile">App Store Preview</h3>
                <p>
                  We may share the information that we collect, both personal
                  and non-personal, with third parties such as advertisers,
                  contest sponsors, promotional and marketing partners, and
                  others who provide our content or whose products or services
                  we think may interest you.
                </p>
                <img src="./images/Arrow17.svg" alt="Arrow17" className="Arrow17"/>
                <div className="d-flex gap-4 mt-4">
                  <button>#softwaredevelopment</button>
                  <button>#strategy</button>
                  <button>#design services</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 marginTopMobile">
            <div className="SuccessfullBox">
                <img src="./images/756834.png" alt="756834" className="w-100" />
                <h3 className="mainHeadingMobile">KC Elite Ecommerce Store</h3>
                <p>
                  We may share the information that we collect, both personal
                  and non-personal, with third parties such as advertisers,
                  contest sponsors, promotional and marketing partners, and
                  others who provide our content or whose products or services
                  we think may interest you.
                </p>
                <img src="./images/Arrow17.svg" alt="Arrow17" className="Arrow17"/>
                <div className="d-flex gap-4 mt-4">
                  <button>#softwaredevelopment</button>
                  <button>#strategy</button>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="SuccessfullBox">
                <img src="./images/748358.jpg" alt="748358" className="w-100" />
                <h3 className="mainHeadingMobile">Cooper's Hawk</h3>
                <p>
                  We may share the information that we collect, both personal
                  and non-personal, with third parties such as advertisers,
                  contest sponsors, promotional and marketing partners, and
                  others who provide our content or whose products or services
                  we think may interest you.
                </p>
                <img src="./images/Arrow17.svg" alt="Arrow17" className="Arrow17"/>
                <div className="d-flex gap-4 mt-4">
                  <button>#strategy</button>
                  <button>#design services</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 marginTopMobile">
            <div className="SuccessfullBox">
                <img src="./images/396874.png" alt="396874" className="w-100" />
                <h3 className="mainHeadingMobile">Disfruta</h3>
                <p>
                  We may share the information that we collect, both personal
                  and non-personal, with third parties such as advertisers,
                  contest sponsors, promotional and marketing partners, and
                  others who provide our content or whose products or services
                  we think may interest you.
                </p>
                <img src="./images/Arrow17.svg" alt="Arrow17" className="Arrow17"/>
                <div className="d-flex gap-4 mt-4">
                  <button>#softwaredevelopment</button>
                  <button>#design services</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4">
        <AppCta CtaHeading={"into an Innovative Mobile App."} />
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

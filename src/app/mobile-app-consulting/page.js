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
      question: "Who will be working on my project?",
      answer:
        "Your project will be handled by a dedicated team of experts, including developers, designers, and project managers, all selected based on the specific needs of your project.",
    },
    {
      questionId: "02",
      question:
        "Who owns the legal rights to the technology developed by Cynergy Studios?",
      answer:
        "Once the project is completed and payment is finalized, you will retain full legal rights and ownership of the technology developed by our team.",
    },
    {
      questionId: "03",
      question:
        "How do you ensure the data security of mobile apps and websites?",
      answer:
        "We prioritize data security through stringent protocols, including encryption, secure coding practices, regular audits, and adherence to industry standards, ensuring your data remains safe.",
    },
    {
      questionId: "04",
      question: "How frequently do you share updates on the process?",
      answer:
        "We provide regular updates throughout the development cycle. The frequency of communication can be customized to meet your preferences, ensuring you’re always informed.",
    },
    {
      questionId: "05",
      question: "How will I be making the payments?",
      answer:
        "Payments can be made through a flexible structure, which may include milestone-based or scheduled payments, using secure and convenient payment options.",
    },
  ];

  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Mobile App Consulting <br /> Services" />

      <div className="orange-wrap">
        <div className="second-last-section">
          <div className="container">
            <div className="row">
              <div className="col-md-7 d-flex align-items-center justify-content-center pe-5">
                <div className="text-section">
                  <h2 className="title-page">Our Value Expedition</h2>
                  <p className="title-page-p">
                    The world’s preeminent ensemble Cynergy Studios, harnesses
                    the power of sustainability, believability, and solution to
                    empower business growth. We aim to bestow next-level expert
                    guidance and innovative solutions to deploy unique
                    infrastructure to your mobile and web apps. Also, you’ll
                    experience multiple opportunities at each facet of your
                    application transformation.
                    <br />
                    <br />
                    We aim to bestow next-level expert guidance and innovative
                    solutions to deploy unique infrastructure to your mobile and
                    web apps. Also, you’ll experience multiple opportunities at
                    each facet of your application transformation.
                  </p>
                  <Link href="#getInTouch">
                  <button className="btn-app">Get In Touch</button>
                </Link>
                </div>
              </div>
              <div className="col-md-5 pe-5 py-2">
                <img
                  src="./images/Group1707479835.png"
                  alt="image-consulting"
                  className="h-100 w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second-last-section">
        <div className="container">
          <div className="row">
            <h2 className="top-ranked text-center mb-5">
              Mobile App Development
              <br /> Consulting Strategies
            </h2>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                src="./images/Group-1707479639.png"
                alt="faqs-sec"
                className="line-image-1"
              />
              <div>
                <div className="text-section-01">
                  <h2 className="title-page-2">Market Research</h2>
                  <p className="title-page-p-2">
                    Market analysis for mobile apps improves to identification
                    of potential consumers and highlights the customization
                    required from the audience in the application. In the
                    competitive space, the mobile app market has surpassed the
                    worth of $197 billion in 2021.
                  </p>
                </div>
                <div className="text-section-01">
                  <h2 className="title-page-2">Product Roadmap</h2>
                  <p className="title-page-p-2">
                    In the arena of innovative mobile structures, it helps to
                    navigate the entire procedure of mobile app development from
                    what features need to be prioritized and how to streamline
                    the goals and the product’s vision.
                  </p>
                </div>
                <div className="text-section-01">
                  <h2 className="title-page-2">
                    Infrastructure And Mobile Technology
                  </h2>
                  <p className="title-page-p-2">
                    Infrastructure pertains to the foundational framework and
                    mandatory resources to replenish digital products. It
                    encircles hardware, software, networks, and services that
                    produce optimal functioning of the apps, and websites.
                  </p>
                </div>
                <div className="text-section-01">
                  <h2 className="title-page-2">Testing and Launch</h2>
                  <p className="title-page-p-2">
                    Mobile app testing refers to the proceeding of corroborating
                    app functionality and usability before the mobile app launch
                    phase of (Android or iOS) apps. Here, we provide the best
                    mobile app consulting services
                  </p>
                </div>
                <div className="text-section-01">
                  <h2 className="title-page-2">Maintenance and Support</h2>
                  <p className="title-page-p-2">
                    After the mobile application development process, it is very
                    important to update the longevity and cogency of your mobile
                    app. It not only helps in fixing bugs but also eradicates
                    the errors interrupting the performance of your mobile
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 ps-5 py-2">
              <img
                src="./images/Group1707479662.png"
                alt="faqs-sec"
                className="h-100 w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container right-let-mid">
        <div className="row">
          <div className="col-md-6">
            <img src="./images/Group986783.png" className="w-100 h-100" />
          </div>
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column ps-5 gap-3">
            <h2>Mobile App Optimization & Audit</h2>
            <p>
              Audit plays a significant role in the development process of
              mobile app, as it tests the security measures of the mobile apps,
              and also analyzes the compliant policy and all rules and
              regulations. On the other hand, it helps in detecting security
              threats that steer to data breaches. At cynergy Studios, our
              product consulting provides thorough guidance on the testing
              capabilities of our entire process.
            </p>
            <Link href="#getInTouch">
            <button>Get In Touch</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container right-let-mid">
        <div className="row">
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column pe-5 gap-3">
            <h2>Mobile App Modernization</h2>
            <p>
              The use of updated technologies and procedures is a mere need in
              today’s world. Adapting and enhancing prevalent mobile project
              implementation will attract more user engagement. Whereas, mobile
              development initiatives must hold the smartest ways to craft a
              newfangled strategy for further mobile development initiatives.
              While processing new app we create state-of-the-art features to
              build highly modernized mobile projects.
            </p>
            <Link href="#getInTouch">
            <button>Get In Touch</button>
            </Link>
          </div>
          <div className="col-md-6">
            <img src="./images/Group235483574.png" className="w-100 h-100" />
          </div>
        </div>
      </div>

      <div className="container right-let-mid">
        <div className="row">
          <div className="col-md-6">
            <img src="./images/Group2235467.png" className="w-100 h-100" />
          </div>
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column ps-5 gap-3">
            <h2>Mobile App Design</h2>
            <p>
              In the era of digitalization, mobile app design holds specific
              importance in the field of multiple mobile app types. It carries a
              wide range of uses, that catalyze fascinating features,
              user-accessibility, engagement rate, and overall experience of the
              apps. In the era of digitalization, mobile app design holds
              specific importance in the field of multiple mobile app types.We
              ensure cost-effective design modules for various mobile platforms
              either Native, hybrid, or cross-platform apps.
            </p>
            <Link href="#getInTouch">
            <button>
              Get In Touch</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="orange-wrap py-5">
        <div className="container py-5 text-center">
          <h2 className="top-ranked">Why Choose Us</h2>
          <p>
            With more than a decade of unmatchable experience in mobile
            consulting projects and mobile development, cynergy <br /> Studios
            has gained a spectacular place in the terrain of digital technology.
            Here, we’ve helped multiple industries and
            <br /> brands to flourish their businesses with modernized
            strategies and produce super easiest formulas to drive growth and{" "}
            <br />
            progress in mobile and web development.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="up-to-mints-div">
                <h4 className="text-center mt-2">Focused Strategies</h4>
                <p className="text-center">
                  Cynergy Studios' service scope presents extremely immersed
                  mobile application development consulting services while
                  exerting multiple apps like social networking app p, mobile
                  banking, or user-friendly fitness
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="up-to-mints-div">
                <h4 className="text-center mt-2">Drive Business Growth</h4>
                <p className="text-center">
                  Cynergy Studios, 100% proven track record will lead your
                  business in the new dimensions of its growth, where you will
                  experience top-notch mobile application consulting privileges.
                  Whether you value Android app development
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="up-to-mints-div">
                <h4 className="text-center mt-2">Transparent Process</h4>
                <p className="text-center">
                  We believe in transparency of mobile application development
                  and so our mobile application consultation depends on the firm
                  objectives, and solutions to avoid any future obstacles in the
                  processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4">
        <AppCta CtaHeading="Let’s Talk and Drive Business Together" />
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

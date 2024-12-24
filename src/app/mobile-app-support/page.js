import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileAppTabs from "../components/MobileAppTabs";
import AppCta from "../components/AppCta";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import MaintenanceProcess from "../components/MaintenanceProcess";
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
      <MainBanner MainBannerHeading="Mobile App Support <br /> & Maintenance <br /> Services" />

      <div className="second-last-section appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-7 d-flex align-items-center justify-content-center paddingRight3">
              <div className="text-section">
                <h1 className="title-page mainHeadingMobile">Mobile App Maintenance Company</h1>
                <p className="title-page-p">
                  With years of proven track record in maintenance and support,
                  Dignite Studios furnishes comprehensive mobile app maintenance
                  services, compliance management services, and security
                  management services to keep your app updated and optimized to
                  ensure technological amelioration.
                  <br />
                  <br /> The scope of our services prevails in new app features,
                  app compliance, and maintenance KPIs throughout the process to
                  boost large and small enterprises with unbeatable results.
                  With protracted skills, delineated process, and indigenous
                  strategy our maintenance and support experts construct your
                  mobile app with astounded tech features to achieve your
                  productive business goals.
                </p>
                <Link href="#getInTouch">
                  <button className="btn-app">Start Your Project</button>
                </Link>
              </div>
            </div>
            <div className="col-md-5 mgTop25 paddingRight3 py-2">
              <img
                src="./images/image-consulting.png"
                alt="image-consulting"
                className="h-100 w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container benefits-of-working py-5 appMobilePadding">
        <div className="row">
          <div className="col-md-12 py-5 d-flex align-items-center justify-content-center flex-column text-center">
            <h2 className="mb-4 mainHeadingMobile">Support and Maintenance Services</h2>
            <p className="mb-4">
              The scope of our services prevails in new app features, app
              compliance, and maintenance KPIs throughout the process to boost
              large
              <br /> and small enterprises with unbeatable results. With
              protracted skills, delineated process, and indigenous strategy our
              maintenance and <br />
              support experts construct your mobile app with astounded tech
              features to achieve your productive business goals.
            </p>
            <img
              src="./images/banner-bottom.png"
              alt="banner-bottom"
              className="w-100 mt-5"
            />
          </div>
        </div>
      </div>

      <div className="maintenance-process appMobilePaddingSmall">
        <div className="container">
          <h2 className="text-center mainHeadingMobile">Maintenance Process</h2>
          <p className="text-center">
            The top management of Dignite Studios characterizes each support and
            maintenance step with beneficial
            <br />
            processes to streamline the app's performance and potency with
            clarity.
          </p>

          <MaintenanceProcess />

          <div className="mt-5 d-flex align-items-center justify-content-center">
            <button className="second-btn">Get A Quote</button>
          </div>
        </div>
      </div>

      <MobileAppTabs />

      <div className="app-quality-main appMobilePaddingSmall">
        <div className="container">
          <h2 className="text-center mainHeadingMobile">
            Cynergy <span>Studios</span>
          </h2>
          <p className="text-center">
            Harnessing productive measures to provision adequate mobile app
            evolution roadmap for the partners
            <br /> and clients to bystander sterling mobile app re-architecting
            from our top-notch support activities.
          </p>
          <div className="row mt-5">
            <div className="col-md-7">
              <div className="app-quality">
                <h3>Enhance App Quality</h3>
                <p>
                  Under one roof you can build and maintain your application
                  with the impeccable maintenance and support team of Dignite
                  Studios. Here, we offer tremendous mobile solutions from
                  mobile app code to mobile app updates. Our services present
                  continuous support in developing several types of mobile apps
                  and reviewing feedback, and performance updates. Therefore,
                </p>
              </div>
              <div className="app-quality">
                <h3>Unwavering Reassurance</h3>
                <p>
                  At Cynergy Studios, we aim to demonstrate the precious design
                  of mobile app support and maintenance projects to fabricate
                  data-driven solutions as per modified mobile software. We
                  provide extensive support Cynergy Studios, -driven solutions
                  as per modified mobile software. We provide extensive support
                  hours to ensure customer satisfaction by all means.
                </p>
              </div>
              <div className="app-quality">
                <h3>Embankment Support</h3>
                <p>
                  Application support includes regular mobile app security
                  monitoring, mobile app integrations, and featured enhancements
                  of mobile apps. Cynergy’s world-class compliance management
                  services ensure abetted service launch to support KPIs of
                  multiple mobile projects.
                </p>
              </div>
              <div className="app-quality">
                <h3>Cost-Effective Excellence</h3>
                <p>
                  Cynergy’s highly optimized app maintenance services entail
                  maximum productivity under well-maintained operational
                  guidelines with minimum maintenance cost. In-app support
                  bestows quick responses on each support request under a
                  limited cost flowwell-maintained operational guidelines with
                  minimum maintenance cost.
                </p>
              </div>
            </div>
            <div className="col-md-5 marginTopMobile">
              <img
                src="./images/landing_prospecting.png"
                alt="landing_prospecting"
                className="w-100 h-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="why-choose-sec appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2 className="mainHeadingMobile">Why Choose Us</h2>
              <p>
                In the modern times of technological enhancement software mobile
                app support and maintenance is as necessary as a penny, to keep
                the IT environment healthy and viable. So, are you wondering
                about hiring app support and maintenance partners? At Dignite
                Studios, we not only update mobile applications but also
                discover and implement new launch processes to scale apps in a
                split second.
              </p>
            </div>
            <div className="col-md-5 d-flex justify-content-end align-items-center">
            <Link href="#getInTouch">
              <button className="second-btn">Start Your Project</button>
            </Link>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="choose-sec-1">
                <h4 className="mainHeadingMobile">Expert Developers</h4>
                <p>
                  The top-notch specialists of Cynergy Studios dive deep into
                  project dimensions and the latest trends to provide reliable
                  solutions to their clients. Also, provide mobile app
                  registration for the businesses.
                </p>
                <div className="choose-rectangle"></div>
              </div>
            </div>
            <div className="col-md-4 mgTop25">
              <div className="choose-sec-1">
                <h4 className="mainHeadingMobile">Track Record Of Bugs</h4>
                <p>
                  We formulate effective measures to identify errors and bugs
                  promptly. Our strategic approach secures data integration and
                  entails optimizing mobile app operations smoothly.
                </p>
                <div className="choose-rectangle"></div>
              </div>
            </div>
            <div className="col-md-4 mgTop25">
              <div className="choose-sec-1">
                <h4 className="mainHeadingMobile">Exeptional Performance</h4>
                <p>
                  We prioritize user experience and optimization of performance
                  closely. Dignite’s reliable services will develop your mobile
                  app with the latest tools and technology to upgrade your
                  software.
                </p>
                <div className="choose-rectangle"></div>
              </div>
            </div>
          </div>
          <div className="row cardTopMargin">
            <div className="col-md-4 mgTop15">
              <div className="choose-sec-1">
                <h4 className="mainHeadingMobile">Proative & Preventive</h4>
                <p>
                  The secret recipe of our services anticipates your potential
                  problems and ensures highly innovative mobile app design with
                  a cutthroat edge. highly innovative mobile app design with a
                  cutthroat edge.
                </p>
                <div className="choose-rectangle"></div>
              </div>
            </div>
            <div className="col-md-4 mgTop25">
              <div className="choose-sec-1">
                <h4 className="mainHeadingMobile">Flexibility & Scalability</h4>
                <p>
                  Our services endow flexible and unique services to meet the
                  needs of the valuable client or partner. We stand out in
                  providing support and maintenance services accurately and
                  adequately.
                </p>
                <div className="choose-rectangle"></div>
              </div>
            </div>
            <div className="col-md-4 mgTop25">
              <div className="choose-sec-1">
                <h4 className="mainHeadingMobile">Transparency Processes</h4>
                <p>
                  You will experience a transparent process throughout the
                  project maintenance at Dignite Studios. With regular
                  monitoring, we provide progress reports to bring to your
                  knowledge timely.
                </p>
                <div className="choose-rectangle"></div>
              </div>
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

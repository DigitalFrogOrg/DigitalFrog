"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import {
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Popup from "./Popup";
// import { MdWbSunny } from "react-icons/md";
// import { FaMoon } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

function header() {
  const [activeTab, setActiveTab] = useState("development");
  const tabsContent = {
    development: {
      heading: "Development",
      links: [
        { href: "/web-app-development", text: "Web App Development Services" },
        {
          href: "/pwa-development",
          text: "PWA Development Services",
        },
        {
          href: "/native-app-development",
          text: "Native App Development Service",
        },
        {
          href: "/mobile-game-development",
          text: "Mobile Game Development Services",
        },
      ],
      links2: [
        {
          href: "/ios-development",
          text: "IOS Development Services",
        },
        { href: "/android-development", text: "Android Development Services" },
        { href: "/no-code-development", text: "No Code/Low Code Development Services" },
        { href: "/ai-app-development", text: "AI App Development Services" },
      ],
    },
    design: {
      heading: "Design",
      links: [
        { href: "/android-app-design", text: "Android App Design Services" },
        { href: "/ios-app-design", text: "iOS App Design Services" },
      ],
      links2: [
        { href: "/mobile-app-design", text: "Mobile App Design Services" },
      ],
    },
    maintenance: {
      heading: "Maintenance & Consulting",
      links: [
        { href: "/mobile-app-consulting", text: "Mobile App Consulting Services" },
        {
          href: "/mobile-app-support",
          text: "Mobile App Support & Maintenance Services",
        },
      ],
      links2: [{ href: "/mobile-app-testing", text: "Mobile App Testing Services" }],
    },
  };

  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isActive = (href) => {
    return pathname === href ? "active" : "";
  };
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className="navbar navbar-expand-lg">
        <div className="container-fluid" id="header">
          <Link href="/">
            <img
            className="logo"
              src={
                theme === "light"
                  ? "./images/black-Logo.png"
                  : "./images/white-Logo.png"
              }
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "d-none" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className={`navbar-nav m-auto ${isOpen ? "d-none" : ""}`}>
              <div className="navigation">
                <ul>
                  <li className="nav-item">
                    <div className="what-we-do-container">
                      <Link href="#" className="what-we-do">
                        What We Do
                      </Link>

                      <div className="mega_menu">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-4 mid-mega-option">
                              <a
                                onMouseEnter={() => setActiveTab("development")}
                                className={
                                  activeTab === "development" ? "active" : ""
                                }
                              >
                                Development
                              </a>
                              <a
                                onMouseEnter={() => setActiveTab("design")}
                                className={
                                  activeTab === "design" ? "active" : ""
                                }
                              >
                                Design
                              </a>
                              <a
                                onMouseEnter={() => setActiveTab("maintenance")}
                                className={
                                  activeTab === "maintenance" ? "active" : ""
                                }
                              >
                                Maintenance & Consulting
                              </a>
                            </div>
                            <div className="col-md-7">
                              <div className="right-mega-menu">
                                <h2>{tabsContent[activeTab].heading}</h2>
                                <div className="d-flex align-items-center justify-content-evenly pb-5">
                                  <ul>
                                    {tabsContent[activeTab].links.map(
                                      (link, index) => (
                                        <li key={index}>
                                          <Link
                                            href={link.href}
                                            className={isActive(link.href)}
                                          >
                                            {link.text}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                  <ul>
                                    {tabsContent[activeTab].links2.map(
                                      (link, index) => (
                                        <li key={index}>
                                          <Link
                                            href={link.href}
                                            className={isActive(link.href)}
                                          >
                                            {link.text}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/how-we-do-it"
                      className={isActive("/how-we-do-it")}
                    >
                      How We Do It
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/achievements"
                      className={isActive("/achievements")}
                    >
                      Achievements
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
            {/* <div className={`${isOpen ? "d-none" : ""}`}> */}
              <div className="buttons">
                <Link href="contact-us">
                <button className="second-btn">
                  Contact Us
                </button>
                </Link>
              </div>
            {/* </div> */}
          </div>
        </div>
      </header>
      {/* Button to toggle the menu */}
      <div
        className={`bars-btn-container ${(showMenu, showButton ? "show" : "")}`}
      >
        <button className="bars-btn" onClick={toggleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Main full-screen menu */}
      <div className={`main-full-menu ${showMenu ? "menu-active" : ""}`}>
        <div className="row h-100">
          <div className="col-md-8 h-100 right-main-menu">
            <Link href="/">
              <img
                src={
                  theme === "light"
                    ? "./images/black-Logo.png"
                    : "./images/white-Logo.png"
                }
                alt="Logo"
              />
            </Link>

            <ul className="main-ul-li">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
              <li>
                <Link href="/app-development">What we do</Link>
              </li>
              <li>
                <Link href="/how-we-do-it">How we do it</Link>
              </li>
              <li>
                <Link href="/achievements">Achievements</Link>
              </li>
              <li>
                <Link href="/faqs">Faqs</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact us</Link>
              </li>
            </ul>

            <ul className="social-media">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
            </ul>
          </div>
          <div className="col-md-4 left-menu-img h-100"></div>
        </div>
      </div>

      {/* Mobile Screen Navbar */}
      <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
        <div className="div-header">
          <Link className="navbar-brand" href="/">
            <img src="./images/white-Logo.png" alt="MainLogo" />
          </Link>
          <button className="close-btn" onClick={toggleNavbar}>
            <RxCross1 />
          </button>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about-us">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/app-development">
              What We Do
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/how-we-do-it">
              How We Do It
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/achievements">
              Achievements
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/faqs">
              Faqs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact-us">
              Contact us
            </Link>
          </li>
        </ul>
      </div>

      {isPopupVisible && <Popup togglePopup={togglePopup} />}

      {/* Dark Mode Button */}
      {/* <button
        onClick={toggleTheme}
        className={theme === "light" ? "light-mode" : "dark-mode"}
        aria-label="Toggle Theme"
      >
        {theme === "light" ? <MdWbSunny /> : <FaMoon />}
      </button> */}
    </>
  );
}

export default header;

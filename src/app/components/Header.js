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
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

function header() {
  const [activeTab, setActiveTab] = useState("development");
  const tabsContent = {
    development: {
      heading: "Development",
      links: [
        { href: "/app-development", text: "Android App Development Services" },
        {
          href: "/ios-app-development-services",
          text: "iOS App Development Services",
        },
        {
          href: "/native-app-development-services",
          text: "Native App Development Services",
        },
        {
          href: "/web-app-development-services",
          text: "Web App Development Services",
        },
      ],
      links2: [
        {
          href: "/mobile-game-development",
          text: "Hire Android App Developers",
        },
        { href: "/mobile-app-development", text: "Hire iOS App Developers" },
        { href: "/ai-app-development", text: "Hybrid App Development Service" },
        { href: "/pwa-development-services", text: "PWA Development Services" },
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
        { href: "/mobile-app-consulting", text: "Mobile App Consulting" },
        {
          href: "/mobile-app-support-and-maintenance",
          text: "Mobile App Support and Maintenance",
        },
      ],
      links2: [{ href: "/mobile-app-testing", text: "Mobile App Testing" }],
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
          <a href="/">
            <img
              src={
                theme === "light"
                  ? "./images/black-Logo.png"
                  : "./images/white-Logo.png"
              }
              alt="Logo"
            />
          </a>
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
                      <a href="#" className="what-we-do">
                        What We Do
                      </a>

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
                                          <a
                                            href={link.href}
                                            className={isActive(link.href)}
                                          >
                                            {link.text}
                                          </a>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                  <ul>
                                    {tabsContent[activeTab].links2.map(
                                      (link, index) => (
                                        <li key={index}>
                                          <a
                                            href={link.href}
                                            className={isActive(link.href)}
                                          >
                                            {link.text}
                                          </a>
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
                    <a
                      href="/how-we-do-it"
                      className={isActive("/how-we-do-it")}
                    >
                      How We Do It
                    </a>
                  </li>
                  <li>
                    <a
                      href="/achievements"
                      className={isActive("/achievements")}
                    >
                      Achievements
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
            <div className={`${isOpen ? "d-none" : ""}`}>
              <div className="buttons">
                <button onClick={togglePopup} className="second-btn">
                  Contact Us
                </button>
              </div>
            </div>
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
            <a href="/">
              <img
                src={
                  theme === "light"
                    ? "./images/black-Logo.png"
                    : "./images/white-Logo.png"
                }
                alt="Logo"
              />
            </a>

            <ul className="main-ul-li">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About us</a>
              </li>
              <li>
                <a href="/app-development">What we do</a>
              </li>
              <li>
                <a href="/how-we-do-it">How we do it</a>
              </li>
              <li>
                <a href="/achievements">Achievements</a>
              </li>
              <li>
                <a href="/faqs">Faqs</a>
              </li>
              <li>
                <a href="/contact-us">Contact us</a>
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
          <a className="navbar-brand" href="/">
            <img src="./images/white-Logo.png" alt="MainLogo" />
          </a>
          <button className="close-btn" onClick={toggleNavbar}>
            <RxCross1 />
          </button>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about-us">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/app-development">
              What We Do
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/how-we-do-it">
              How We Do It
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/achievements">
              Achievements
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/faqs">
              Faqs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact-us">
              Contact us
            </a>
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

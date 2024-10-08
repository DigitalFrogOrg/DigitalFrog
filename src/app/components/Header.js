"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  FaBars
} from "react-icons/fa6";
import {
  FaTimes,
  FaFacebookF, FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import Popup from "./Popup";

function header() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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
      <header>
        <div id="header">
          <div className="container-fluid">
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-3">
                <a href="/">
                  <img src="./images/black-Logo.png" alt="Logo" />
                </a>
              </div>
              <div className="col-md-6">
                <div className="navigation">
                  <ul>
                    <li>
                      <a href="/" className={isActive("/")}>
                        Home
                      </a>
                    </li>
                    <li>
                      <div className="what-we-do-container">
                        <a href="#" className="what-we-do">
                          What We Do
                        </a>

                        <div className="mega_menu">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-1"></div>
                              <div className="col-md-4 mid-mega-option">
                                <a href="#" className="">
                                  Mobile App Development Services
                                </a>
                                <a
                                  href="/design-services"
                                  className={isActive("/design-services")}
                                >
                                  Design Services
                                </a>
                                <a
                                  href="/maintenance-services"
                                  className={isActive("/maintenance-services")}
                                >
                                  Maintenance & Consulting Services
                                </a>
                              </div>
                              <div className="col-md-7">
                                <div className="right-mega-menu">
                                  <h2>Mobile App Development Services</h2>
                                  <ul>
                                    <li>
                                      <a
                                        href="/app-development"
                                        className={isActive(
                                          "/android-app-development-services"
                                        )}
                                      >
                                        Android App Development Services
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="/ios-app-development-services"
                                        className={isActive(
                                          "/ios-app-development-services"
                                        )}
                                      >
                                        iOS App Development Services
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="/native-app-development-services"
                                        className={isActive(
                                          "/native-app-development-services"
                                        )}
                                      >
                                        Native App Development Services
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="/web-app-development-services"
                                        className={isActive(
                                          "/web-app-development-services"
                                        )}
                                      >
                                        Web App Development Services
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="/pwa-development-services"
                                        className={isActive(
                                          "/pwa-development-services"
                                        )}
                                      >
                                        PWA Development Services
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="/mobile-game-development"
                                        className={isActive(
                                          "/mobile-game-development"
                                        )}
                                      >
                                        Mobile Game Development
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="/mobile-app-development"
                                        className={isActive(
                                          "/mobile-app-development"
                                        )}
                                      >
                                        Mobile App Development
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="/ai-app-development"
                                        className={isActive(
                                          "/ai-app-development"
                                        )}
                                      >
                                        AI App Development
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="/no-code-low-code"
                                        className={isActive(
                                          "/no-code-low-code"
                                        )}
                                      >
                                        No-Code/Low-Code
                                      </a>
                                    </li>
                                  </ul>
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
              </div>

              <div className="col-md-3">
                <div className="buttons">
                  {/* <button type="button" className="whole-btn">Contact Us</button> */}
                  {/* <button type="button" className="dark-mode">
                    <img src="./images/night-mode.svg" />
                  </button> */}
                  {/* <a className="second-btn" href="/contact-us">
                    Contact Us
                  </a> */}
                  <button onClick={togglePopup} className="second-btn">Contact Us</button>
              
                  {/* <button type="button" className="light-mode">
                  <MdWbSunny />
                </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Button to toggle the menu */}
      <div className={`bars-btn-container ${showMenu,showButton ? "show" : ""}`}>
        <button className="bars-btn" onClick={toggleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Main full-screen menu */}
      <div className={`main-full-menu ${showMenu ? "menu-active" : ""}`}>
        <div className="row h-100">
          <div className="col-md-8 h-100 right-main-menu">
            <a href="/">
              <img src="./images/black-Logo.png" alt="Logo" />
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

      {isPopupVisible && <Popup togglePopup={togglePopup} />}
    </>
  );
}

export default header;

"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";

function header() {
  const pathname = usePathname();

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
                  <a className="second-btn" href="/contact-us">
                    Contact Us
                  </a>
                  {/* <button type="button" className="light-mode">
                  <MdWbSunny />
                </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`bars-btn-container ${showButton ? "show" : ""}`}>
        <button className="bars-btn">
          <FaBars />
        </button>
      </div>
    </>
  );
}

export default header;

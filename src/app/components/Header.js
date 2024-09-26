"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import { GoMoon } from "react-icons/go";
// import { MdWbSunny } from "react-icons/md";
// import { VscCallOutgoing } from "react-icons/vsc";
// import { RxHamburgerMenu } from "react-icons/rx";

function header() {
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname === href ? "active" : "";
  };
  const [activeTab, setActiveTab] = useState(false);
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
                    {/* <li>
                      <a href="/about-us" className={isActive("/about-us")}>
                        About Us
                      </a>
                    </li> */}
                    <li>
                      <div className="what-we-do-container">
                        <a href="#" className="what-we-do">
                          What We Do
                        </a>

                        <div className="mega_menu">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-1"></div>
                              <div className="col-md-6 mid-mega-option">
                                <a
                                  href="#"
                                  className={isActive("/app-development")}
                                  onClick={() => setActiveTab(true)}
                                >
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
                              {activeTab ? 
                              <div className="col-md-5">
                                <div className="right-mega-menu">
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
                              : null}
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
                    {/* <li>
                      <a
                        href="/achievements"
                        className={isActive("/achievements")}
                      >
                        Achievements
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div className="buttons">
                  {/* <button type="button" className="whole-btn">Contact Us</button> */}
                  {/* <button type="button" className="dark-mode">
                    <img src="./images/night-mode.svg" />
                  </button> */}
                  <button type="button" className="second-btn">
                    Contact Us
                  </button>
                  {/* <button type="button" className="light-mode">
                  <MdWbSunny />
                </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mega_menu">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 mid-mega-option">
                <a href="/">Mobile App Development Services</a>
                <a href="/">Design Services</a>
                <a href="/">Maintenance & Consulting Services</a>
              </div>
              <div className="col-md-4">
                <div className="right-mega-menu">
                  <ul>
                    <li>
                      <a href="/">Android App Development Services</a>
                    </li>
                    <li>
                      <a href="/">iOS App Development Services</a>
                    </li>
                    <li>
                      <a href="/">Native App Development Services</a>
                    </li>
                    <li>
                      <a href="/">Web App Development Services</a>
                    </li>
                    <li>
                      <a href="/">PWA Development Services</a>
                    </li>
                    <li>
                      <a href="/">Mobile Game Development</a>
                    </li>
                    <li>
                      <a href="/">Mobile App Development</a>
                    </li>
                    <li>
                      <a href="/">AI App Development</a>
                    </li>
                    <li>
                      <a href="/">No-Code/Low-Code</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </header>
    </>
  );
}

export default header;

import React from "react";
// import { GoMoon } from "react-icons/go";
// import { MdWbSunny } from "react-icons/md";
// import { VscCallOutgoing } from "react-icons/vsc";
// import { RxHamburgerMenu } from "react-icons/rx";

function header() {
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
                    {/* <li><i><RxHamburgerMenu /></i></li> */}
                    <li>
                      <div className="what-we-do-container">
                        <a href="#" className="what-we-do">
                          What We Do
                        </a>

                        <div className="mega_menu">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-4"></div>
                              <div className="col-md-4 mid-mega-option">
                                <a href="/app-development">
                                  Mobile App Development Services
                                </a>
                                <a href="/">Design Services</a>
                                <a href="/">
                                  Maintenance & Consulting Services
                                </a>
                              </div>
                              <div className="col-md-4">
                                <div className="right-mega-menu">
                                  <ul>
                                    <li>
                                      <a href="/">
                                        Android App Development Services
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        iOS App Development Services
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        Native App Development Services
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        Web App Development Services
                                      </a>
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
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#">How We Do It </a>
                    </li>
                    <li>
                      <a href="#">Achievements</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div className="buttons">
                  {/* <button type="button" className="whole-btn">Contact Us</button> */}
                  <button type="button" className="dark-mode">
                    <img src="./images/night-mode.svg" />
                  </button>
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

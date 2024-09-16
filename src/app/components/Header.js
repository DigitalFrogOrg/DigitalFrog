import React from "react";
import { GoMoon } from "react-icons/go";
// import { MdWbSunny } from "react-icons/md";
// import { VscCallOutgoing } from "react-icons/vsc";
// import { RxHamburgerMenu } from "react-icons/rx";

function header() {
  return (
    <>
      <header>
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
                    <a href="#">What We Do</a>
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
      </header>
    </>
  );
}

export default header;

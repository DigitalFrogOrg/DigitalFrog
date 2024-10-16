"use client";
import { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function footer() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <footer>
      <div className="container-fluid">
        <div className="first-row">
          <img
            src={
              theme === "light"
                ? "./images/get-in-touch.png"
                : "./images/get-in-touch-white.png"
            }
            alt="get-in-touch"
            className="get-in-touch"
          />
          <br />
          <br />
          <br />
          <br />
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-sm-3">
              {/* <p>
                After digesting your idea/project, our professional mobile app
                designers will build out a beautiful  Prototype to bring your
                project to life with color and brand.
              </p> */}
              <a href="/" className="pt-4">
                <img
                  src={
                    theme === "light"
                      ? "./images/black-Logo.png"
                      : "./images/white-Logo.png"
                  }
                  alt="Logo"
                />
              </a>
              <ul className="footer-info">
                <li>
                  <FaPhoneAlt /> <a href="tel:13463608407">+1 (346) 360-8407</a>
                </li>
                <li>
                  <FaEnvelope />{" "}
                  <a href="mailto:info@cynergystudio.com">
                    info@cynergystudio.com
                  </a>
                </li>
                <li>
                  <FaLocationDot /> <a>1 E Erie St Ste 525 Chicago, IL 60611</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <div className="footer-link">
                <h5>Overview</h5>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="/terms-condition">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/faqs">Faqs</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-link">
                <h5>What we do</h5>
                <ul>
                  <li>
                    <a href="/app-development">Mobile App Development</a>
                  </li>
                  <li>Android App Development</li>
                  <li>IOS App Development</li>
                  <li>App Consulting</li>
                  <li>See More.</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-link">
                <h5>Follow Us</h5>
                <ul>
                  <li>Facebook </li>
                  <li>Instagram </li>
                  <li>Github</li>
                  <li>LinkedIn</li>
                  <li>X</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="second-row">
          <h2>Contact Us</h2>
        </div> */}
        <div className="copyright-sec">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-sm-5">
              <p>
                Copyright @ 2024. <strong> Cynergy Studio</strong>. All Right
                Reserved.
              </p>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-5 d-flex justify-content-end">
              {/* <p className="text-end">
                Designed & Developed By Cynergy Studios
              </p> */}
              {/* <ul className="social-media">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;

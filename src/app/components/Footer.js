import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="first-row">
          <img src="./images/get-in-touch.png" alt="get-in-touch" className="get-in-touch" />
          <br />
          <br />
          <br />
          <br />
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-sm-3">
              <p>
                After digesting your idea/project, our professional mobile app
                designers will build out a beautiful  Prototype to bring your
                project to life with color and brand.
              </p>
              <a href="/" className="pt-4">
                <img
                  src="./images/black-Logo.png"
                  alt="Logo"
                  className="pt-4"
                />
              </a>
              {/* <ul className="footer-info">
                <li>
                  <span>For Sales :</span>{" "}
                  <b>
                    <a href="tel:8635106352">(863) 510-6352</a>
                  </b>
                </li>
                <li>
                  <span>For Billing :</span>{" "}
                  <b>
                    <a href="tel:+18568635034">+1 856-863-5034</a>
                  </b>
                </li>
                <li>
                  <span>Email :</span>{" "}
                  <b>
                    <a href="mailto:info@cynergystudio.com">
                      info@cynergystudio.com
                    </a>
                  </b>
                </li>
                <li>
                  <span>Address :</span>{" "}
                  <b>
                    <a>20 Cooper Square, New York, NY 10003, USA</a>
                  </b>
                </li>
              </ul> */}
            </div>
            <div className="col-sm-3">
              <div className="footer-link">
                <h5>Quick Links</h5>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Our Process</li>
                  <li>Portfolio</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-link">
                <h5>Our Service</h5>
                <ul>
                  <li>Mobile App Development</li>
                  <li>Android App Development</li>
                  <li>IOS App Development</li>
                  <li>App Consulting</li>
                  <li>See More.</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-link">
                <h5>Our Locations</h5>
                <ul>
                  <li>Dallas </li>
                  <li>New York </li>
                  <li>Chicago</li>
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
              <p>Copyright @ 2024. Cynergy Studio. All Right Reserved.</p>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-5 d-flex justify-content-end">
              {/* <p className="text-end">
                Designed & Developed By Cynergy Studios
              </p> */}
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
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;

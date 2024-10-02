"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import HotspotSection from "../components/HotspotSection";

const page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    budget: 0,
    timeline: "",
  });
  const handleBudgetChange = (e) => {
    setFormData({ ...formData, budget: e.target.value });
  };

  return (
    <>
      <Header />
      <div className="about-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Contact Us</h1>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div className="container contact-main">
        <div className="row">
          <h6>
            <a href="/" style={{ color: "#000" }}>
              Home
            </a>{" "}
            /{" "}
            <a href="/contact-us" style={{ color: "#000" }}>
              Contact Us
            </a>
          </h6>
        </div>
        <div className="row mt-3">
          <div className="col-md-7">
            <h2>Got a project in mind?</h2>
            <p>Fill in this form or send us an e-mail</p>
            <form className="contact-form">
              <input
                type="text"
                placeholder="Name *"
                className="w-100 form-control"
              />
              <div className="d-flex justify-content-between mt-3">
                <input
                  type="tel"
                  placeholder="Phone number *"
                  className="form-control"
                  style={{ width: "48%" }}
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="form-control"
                  style={{ width: "48%" }}
                />
              </div>
              <div className="form-group my-3">
                <label>Budget Range</label>
                <input
                  type="range"
                  className="range-cyn"
                  min="0"
                  max="500000"
                  step="10000"
                  name="budget"
                  value={formData.budget}
                  onChange={handleBudgetChange}
                />
                <div className="budgetDisplay">
                  <span>0 $</span>
                  <span
                    style={{
                      border: "1px solid #e84c3d",
                      padding: "6px",
                      borderRadius: "12px",
                    }}
                  >
                    {formData.budget} $
                  </span>
                  <span>500,000 $</span>
                </div>
              </div>
              <div className="mt-3">
                <input className="form-control" type="file" id="formFile" />
              </div>
              <button type="submit">Contact Us</button>
            </form>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="contact-right">
              <h4>What's next?</h4>
              <div className="steps">
                <div className="step-1">
                  <p>
                    Our experts will analyze your requirements and contact you
                    within 1-2 business days.
                  </p>
                </div>
                <div className="step-2">
                  <p>
                    Our team will collect all requirements for your project, and
                    if needed, we will sign an NDA to ensure the highest level
                    of privacy.
                  </p>
                </div>
                <div className="step-3">
                  <p>
                    We will develop a comprehensive proposal and an action plan
                    for your project with estimates, timelines etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6">
                <h6>Phones:</h6>
                <ul className="phone-details">
                  <li>+1 (415) 470-2865</li>
                  <li>info@cynergystudio.com</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h6>Follow:</h6>
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
          <div className="col-md-1"></div>
          <div className="col-md-4"></div>
        </div>
      </div>

      <HotspotSection />
      <Footer />
    </>
  );
};

export default page;

"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import HotspotSection from "../components/HotspotSection";
import Link from "next/link";
import { submitForm } from "@/api/formServices";

const page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber:"",
    email: "",
    budget: 0,
  });
  const handleBudgetChange = (e) => {
    setFormData({ ...formData, budget: e.target.value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   const handleSubmit = async (e) => {
      e.preventDefault();
      for (const [key, value] of Object.entries(formData)) {
        if (!value.trim()) { 
          alert(`Please fill in the ${key} field.`);
          return;
      }
    }
      try {
        const response = await submitForm(formData)
        alert(response.data.message)
      } catch (error) {
        alert("Failed to submit form.")
      }
  
      setFormData({
        fullName: "",
        email: "",
        phoneNumber:"",
        budget: 0,
      });
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
            <Link href="/" style={{ color: "#000" }}>
              Home
            </Link>{" "}
            /{" "}
            <Link href="/contact-us" style={{ color: "#000" }}>
              Contact Us
            </Link>
          </h6>
        </div>
        <div className="row mt-3">
          <div className="col-md-7">
            <h2>Got a project in mind?</h2>
            <p>Fill in this form or send us an e-mail</p>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                placeholder="Name *"
                className="w-100 form-control"
                onChange={handleChange}
              />
              <div className="d-flex justify-content-between mt-3">
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  name="phoneNumber"
                  placeholder="Phone number *"
                  className="form-control"
                  style={{ width: "48%" }}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email *"
                  className="form-control"
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                    Our experts will review your requirements and reach out to
                    you within 1-2 business days.
                  </p>
                </div>
                <div className="step-2">
                  <p>
                    Our team will gather all the requirements for your project,
                    and if necessary, we'll sign an NDA to ensure complete
                    confidentiality and privacy.
                  </p>
                </div>
                <div className="step-3">
                  <p>
                    We will create a detailed proposal and action plan for your
                    project, including estimates, timelines, and other essential
                    details.
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

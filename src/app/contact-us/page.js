"use client";
import React, { useState,useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import HotspotSection from "../components/HotspotSection";
import Link from "next/link";
import { submitForm } from "@/api/formServices";
import MainBanner from "../components/MainBanner";

const page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber:"",
    email: "",
    budget: 0,
  });
  const fileInputRef = useRef(null);
  const [loading,setLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null);
  const handleBudgetChange = (e) => {
    setFormData({ ...formData, budget: e.target.value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };


   const handleSubmit = async (e) => {
      e.preventDefault();
      
      for (const [key, value] of Object.entries(formData)) {
        if (!value.trim()) { 
          alert(`Please fill in the ${key} field.`);
          return;
      }
    }
    setLoading(true)
      try {
        const payload = new FormData();
        payload.append("fullName", formData.fullName);
        payload.append("email", formData.email);
        payload.append("phoneNumber", formData.phoneNumber);
        payload.append("budget", formData.budget);
        if (selectedFile) {
          payload.append("file", selectedFile);
        }


        const response = await submitForm(payload)

        alert(response.data.message)
      } catch (error) {
        alert("Failed to submit form.")
      }

      setLoading(false)
  
      setFormData({
        fullName: "",
        email: "",
        phoneNumber:"",
        budget: 0,
      });
      setSelectedFile(null); 

      if (fileInputRef.current) {
          fileInputRef.current.value = ""; 
      }
    };

  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Contact Us" />

      {/* <div className="about-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Contact Us</h1>
            </div>
          </div>
          <hr />
        </div>
      </div> */}

      <div className="container contact-main appMobilePadding contactusContainer">
        <div className="row">
          <h6>
            <Link href="/" style={{ color: "#AFAFAF" }}>
              Home
            </Link>
            <span className="ms-2 me-2" style={{ color: "#AFAFAF" }}>
              /
            </span>
              Contact Us
          </h6>
        </div>
        <div className="row mt-3">
          <div className="col-md-7">
            <h2 className="heading50">Got a project in mind?</h2>
            <p className="contactUsPara">Fill in this form or <span style={{textDecoration:'underline'}}><a style={{color:'#AFAFAF'}} href="mailto:info@cynergystudios.com">send us an e-mail</a></span></p>
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
                <input className="form-control"  ref={fileInputRef} type="file" name="file" onChange={handleFileChange} id="formFile" />
              </div> 
              <div className='mt-2 d-flex align-items-center justify-content-end'>
                    <button type='submit' disabled={loading} className='second-btn'>Send Message</button>
              </div>
            </form>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4 footerSection">
            <div className="contact-right">
              <h4>What's next?</h4>
              <div className="steps d-flex flex-column">
                <div className="d-flex gap-4 my-3">
                  <div className="col-md-1 lineCircle">1</div>
                  <p className="col-md-10" style={{marginLeft:'55px'}}>
                    Our experts will review your requirements and reach out to
                    you within 1-2 business days.
                  </p>
                </div>
                <div className="d-flex  gap-4 my-3">
                  <div className="col-md-1 lineCircle">2</div>
                  <p className="col-md-10" style={{marginLeft:'55px'}}>
                    Our team will gather all the requirements for your project,
                    and if necessary, we'll sign an NDA to ensure complete
                    confidentiality and privacy.
                  </p>
                </div>
                <div className="d-flex gap-4 my-3">
                  <div className="col-md-1 lineCircle">3</div>
                  <p className="col-md-10" style={{marginLeft:'55px'}}>
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
                  <li>info@cynergystudios.com</li>
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

"use client";
import React, { useState,useRef } from "react";
import { submitForm } from "@/api/formServices";

function BudgetSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    // budget: 100000,
    timeline: "",
  });
  const fileInputRef = useRef(null);
  const [nda, setNda] = useState(false);
    const [loading,setLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNdaChange = (e) => {
    setNda(e.target.checked);
  };
  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
        fileInputRef.current.click(); 
    }
};

const handleFileChange = (e) => {
  const file = e.target.files[0];
  setSelectedFile(file); 
};

  const handleBudgetChange = (e) => {
    setFormData({ ...formData, budget: e.target.value });
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
      payload.append("projectType", formData.projectType);
      payload.append("timeline", formData.timeline);
      payload.append("nda", nda ? 'Yes' : 'No');
      if (selectedFile) {
        payload.append("file", selectedFile);
      }

      const response = await submitForm(payload)
      alert(response.data.message)
    } catch (error) {
      alert("Failed to submit form.")
    }
    setLoading(false)
    setSelectedFile(null); 
    setFormData({
      fullName: "",
      email: "",
      projectType: "",
      timeline: "",
    });
    setNda(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; 
    }
  };

  return (
    <>
      <div id="getInTouch" className="budget-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              {/* <img
                src="/images/SmartObject.png"
                alt="SmartObject"
                className="w-100 h-100"
              /> */}
              <h2 style={{ fontFamily: "NobelUno-Bold !important" }} className="budgetHeading">
                Exploring Our App
                <br /> Development Services?
              </h2>
              <h4 className="subHeading my-4 budgetSubHeading">Share Your Project Details!</h4>
              <h3 className="mt-3 subHeading">
                <img
                  src="/images/clock_icon.png"
                  alt="SmartObject"
                  className="Clock-style"
                />
                We respond promptly, typically within 30 minutes!
              </h3>
              <div className="mt-4 p-3 rounded budg-sec">
                <ul>
                  <li>
                    We’ll hop on a call and hear out your idea, protected by our
                    NDA.
                  </li>
                  <li>
                    We’ll provide a free quote + our thoughts on the best
                    approach for you.
                  </li>
                  <li>
                    Even if we don’t work together, feel free to consider us a
                    free technicalresource to bounce your thoughts/questions off
                    of.
                  </li>
                </ul>
              </div>
              {/* <div className="divider"></div> */}
              <br />

              <h6 className="budgetLast">
                Alternatively, contact us via phone
                <a href="tel:13463608407"><span style={{fontWeight:"bold"}}> +1 (346) 360-8407 </span></a>
                or email
                <a href="mailto:info@cynergystudio.com">
                <span style={{fontWeight:"bold"}}> info@cynergystudios.com</span>
                </a>
              </h6>
            </div>
            <div className="col-md-5 divPadding d-flex align-items-center">
              <form onSubmit={handleSubmit} className="projectForm w-100">
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Full Name..."
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mt-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email Address..."
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group mt-3">
                  <select
                    className="form-select"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="" hidden>
                      Type Of Project
                    </option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="design">Design</option>
                  </select>
                </div>

                {/* <div className="form-group mt-3">
                  <label className="budgetLabel">Budget Range</label>
                  <input
                    type="range"
                    className="range-cyn"
                    min="100000"
                    max="500000"
                    step="10000"
                    name="budget"
                    value={formData.budget}
                    onChange={handleBudgetChange}
                  />
                  <div className="budgetDisplay">
                    <span>100,000 $</span>
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
                </div> */}

                <div className="form-group mt-3">
                  <select
                    className="form-select"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="" hidden>
                      Select Timeline
                    </option>
                    <option value="1_month">1 Month</option>
                    <option value="2_months">2 Months</option>
                    <option value="3_months">3 Months</option>
                  </select>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
                </div>

                <div className="form-group d-flex gap-2 ms-2 align-items-center mt-4 mb-3">
                <div class="custom-checkbox">
                  <input type="checkbox" name='nda' checked={nda} onChange={handleNdaChange}  id="checkbox" />
                  <label for="checkbox"></label>
                </div>
                <div style={{fontSize: "16px",color:'#2C3E52',fontWeight:'400',marginLeft:'5px'}}>
                  Protect Under NDA
                </div>
                </div>

                <div className="d-flex align-items-center gap-3 flex-wrap">
                <button type="submit" disabled={loading} className="btn">
                  Start Your Project
                </button>
                <button type="button" onClick={handleFileButtonClick} className="file-btn">
                <img
                    src="./images/file-upload.png"
                    />
                </button>
                {selectedFile && (<span>
                  {selectedFile.name}
                </span>)}
                {/* <button type="button" onClick={handleFileButtonClick} className="btn file-btn">
                  <img
                    src="./images/file-upload.png"
                    />
                {selectedFile && (<span className="m-2">
                  {selectedFile.name}
                </span>)}
                </button> */}
                </div>  
              
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BudgetSection;

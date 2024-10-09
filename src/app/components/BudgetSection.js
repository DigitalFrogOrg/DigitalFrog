"use client";
import React, { useState } from "react";

function BudgetSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    budget: 100000,
    timeline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBudgetChange = (e) => {
    setFormData({ ...formData, budget: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      fullName: "",
      email: "",
      projectType: "",
      budget: 100000,
      timeline: "",
    });
  };

  return (
    <>
      <div className="budget-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* <img
                src="/images/SmartObject.png"
                alt="SmartObject"
                className="w-100 h-100"
              /> */}
              <h2 style={{ fontFamily: "NobelUno-Bold !important" }}>
                Exploring Our App
                <br /> Development Services?
              </h2>
              <h3 className="mt-3">
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
              <em>
                <strong>
                  Alternatively, contact us via phone +123 456 7890 or email
                  INFO@CYNERGYSTUDIOS.COM
                </strong>
              </em>
            </div>
            <div className="col-md-6 px-5">
              <form onSubmit={handleSubmit} className="projectForm">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Full Name..."
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
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
                    <option value="1month">1 Month</option>
                    <option value="3months">3 Months</option>
                    <option value="6months">6 Months</option>
                  </select>
                </div>

                <button type="submit" className="btn mt-4">
                  Start Your Project
                </button>
                <button type="submit" className="btn m-4 file-btn">
                  <img
                    src="./images/file-upload.png"
                    style={{ width: 25, height: 25 }}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BudgetSection;

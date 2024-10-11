"use client";
import React, { useState } from "react";

const MobileAppTabs = () => {
  const [activeTab, setActiveTab] = useState(2);

  const tabs = [
    { label: "Android", images: ["./images/andriod-image.png"] },
    {
      label: "IOS",
      images: ["./images/andriod-image.png"],
    },
    {
      label: "Cross-Platform",
      images: ["./images/andriod-image.png"],
    },
    {
      label: "PWA",
      images: ["./images/andriod-image.png"],
    },
    {
      label: "Other Tools",
      images: ["./images/andriod-image.png"],
    },
  ];

  return (
    <div className="MobileAppTabs">
      <div className="container">
        <h2 className="text-center">
          Mobile app development
          <br /> technologies we use
        </h2>
        <p className="text-center">
          The top management of Dignite Studios characterizes each support and
          maintenance step with beneficial
          <br />
          processes to streamline the app's performance and potency with
          clarity.
        </p>
        <div className="row">
          <div className="col-md-12">
            <ul className="tabs">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className={activeTab === index ? "active" : ""}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="tab-content">
              {tabs[activeTab].images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="tab-image"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppTabs;

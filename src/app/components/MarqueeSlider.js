import React from "react";

function MarqueeSlider() {
  const marqueeItems = [
    {
      text: "$850m",
      description: "Funding secured for our clients",
      class: "clr-r",
    },
    {
      text: "35M+",
      description: "Downloads of our developed apps",
      class: "clr-t",
    },
    {
      text: "420",
      description: "Successful projects completed",
      class: "clr-r",
    },
    { text: "95%", description: "Client satisfaction rate", class: "clr-y" },
    {
      text: "18+",
      description: "Years of combined team experience",
      class: "clr-t",
    },
    { text: "120+", description: "Awards won for our designs", class: "clr-r" },
    { text: "40K+", description: "Lines of code written", class: "clr-u" },
    {
      text: "99.9%",
      description: "Uptime for our hosted solutions",
      class: "clr-y",
    },
  ];

  const duplicatedMarqueeItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="growth-sec">
      <div className="container-fluid">
        <h2 className="text-center mb-4">Bespoke Software For Your Growth</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="marquee-slider">
              <div className="marquee-content">
                {duplicatedMarqueeItems.map((item, index) => (
                  <div className={`item ${item.class}`} key={index}>
                    <span>{item.text}</span>
                    <br />
                    {item.description}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarqueeSlider;

import React from "react";

function CynergyStudio() {
  return (
    <section className="cynergy_studio">
      <div className="container">
        <div className="cynergy_studio_col">
          <h2>Why Cynergy Studio</h2>
          <div className="cynergy_studio_detail">
            <div className="row">
              <div className="col-sm-6">
                <div className="cs_detail_col">
                  <img src="/images/product_lab.png" alt="Product Lab" />
                  <h4>Product Lab</h4>
                  <p>
                    Yellow is a development company that creates its own
                    products. It allows us to gain extensive knowledge about the
                    product life cycle and apply it to your solution.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="cs_detail_col">
                  <img src="/images/product_lab.png" alt="Business Before Technology" />
                  <h4>Business Before Technology</h4>
                  <p> Our software developers do not just code. We put your business needs first to ensure that the future app or website will fit your requirements and bring you profit. </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="cs_detail_col">
                  <img src="/images/product_lab.png" alt="Security" />
                  <h4>Security</h4>
                  <p>Before the start, we sign a non-disclosure agreement (NDA) with you so there is no reason to worry about your data safety.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="cs_detail_col">
                  <img src="/images/product_lab.png" alt="Product Lab" />
                  <h4>Excellent Track Record</h4>
                  <p>Our partners have already highly rated Yellow as a development company so for now we have 5 stars on Clutch and GoodFirms. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CynergyStudio;

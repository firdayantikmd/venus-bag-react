import React from "react";
import "./Certifications.css";

function Certifications() {
  return (
    <section className="certifications">
      <h2>Certification</h2>
      <p>See Our Achivements</p>
      <div className="certification-container">
        <div className="certification">
          <div className="header">
            <h4>GMP <br /> <span>Good Manufacturing Practices</span></h4>
          </div>
          <p>Certification ensures that products are consistently produced and controlled according to quality standards appropriate for their intended use.</p>
        </div>
        <div className="certification">
          <div className="header">
            <h4>COFEPRIS <br /> <span>Commission for the Protection against Sanitary Risk</span> </h4>
          </div>
          <p>It's essential to obtain approvals and certifications from COFEPRIS, especially if the products come into direct contact with food.</p>
        </div>
        <div className="certification">
          <div className="header">
            <h4>HACCP <br /> <span>Hazard Analysis and Critical Control Points</span> </h4>
          </div>
          <p>A management system that addresses food safety through the analysis and control of biological, chemical, and physical hazards from production to consumption.</p>
        </div>
        <div className="certification">
          <div className="header">
            <h4>FSSC 22000 <br /> <span>Food Safety System Certification</span> </h4>
          </div>
          <p>This certification scheme is recognized by the Global Food Safety Initiative (GFSI) and includes ISO 22000, ISO/TS 22002-1, and additional FSSC 22000 requirements.</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
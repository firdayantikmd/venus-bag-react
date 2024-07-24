import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2>Vision & Mission</h2>
      <p>Answers to Your Common Questions</p>
      <div className="about-content">
        <div className="content-card">
          <span>VISION</span>
          <h4>Industry Leadership and Quality</h4>
          <p>Lead as the foremost manufacturer of plastic films and bags for ice packaging, delivering products that exceed customer expectations in quality and freshness.</p>
        </div>
        <img src="/assets/images/about-1.png" alt="About Image 1" />
        <div className="content-card">
          <span>VISION</span>
          <h4>Innovation and Sustainability</h4>
          <p>Innovate continuously and uphold sustainability in all operations to ensure the freshness and integrity of ice during storage and transport.</p>
        </div>
        <img src="/assets/images/about-1.png" alt="About Image 2" />
        <div className="content-card">
          <span>MISSION</span>
          <h4>Innovation and Technology</h4>
          <p>Drive innovation through continuous improvement and the adoption of advanced technologies, creating durable, safe, and efficient solutions that set new industry standards.</p>
        </div>
        <div className="content-card">
          <span>MISSION</span>
          <h4>Customer Satisfaction and Sustainability</h4>
          <p>Prioritize customer satisfaction through personalized service that builds enduring partnerships.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
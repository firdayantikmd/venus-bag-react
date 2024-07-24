import React from "react";
import "./Hero.css";
import { IconSquareArrowDown } from '@tabler/icons-react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-top">
            <img src="/assets/venus-bags.svg" alt="Venus Bags Logo" />
            <h1>Innovating Ice Packaging Solutions</h1>
            <p>Excellence in Plastic Films and Bags for Ice Packaging</p>
          </div>
          <div className="hero-bottom">
            <p>Venus Bags emerged in the heart of our city with a singular mission: to redefine the ice packaging industry. Specializing in the manufacture of premium plastic films and bags tailored specifically for ice packaging, we have overcome numerous challenges through dedication and innovation. Our commitment to quality, safety, and environmental responsibility drives us to continually improve, ensuring our products exceed expectations. With a passionate team of industry professionals and strategic alliances, Venus Bags has grown to be a trusted name known for reliability and sustainability in ice packaging solutions.</p>
            <button className="hero-button">
              <a href="#about">Learn More</a> <IconSquareArrowDown size={16} />
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/images/hero.png" alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

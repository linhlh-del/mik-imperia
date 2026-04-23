import React from "react";
import "./Hero.css";
import background from "../../assets/img/hero-desktop.jpg";

const Hero = ({ children, backgroundImage = background }) => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {children}
    </section>
  );
};

export default Hero;

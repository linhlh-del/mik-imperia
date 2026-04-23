import React, { useEffect, useState } from "react";
import "./Hero.css";
import background from "../../assets/img/hero-desktop.jpg";
import backgroundMobile from "../../assets/img/hero-mobile.jpg";

const Hero = ({ children, backgroundImage = background }) => {
  const [currentBackground, setCurrentBackground] = useState(backgroundImage);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const updateBackground = () => {
      setCurrentBackground(
        mql.matches && backgroundImage === background
          ? backgroundMobile
          : backgroundImage,
      );
    };

    updateBackground();
    mql.addEventListener("change", updateBackground);
    return () => mql.removeEventListener("change", updateBackground);
  }, [backgroundImage]);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${currentBackground})`,
      }}
    >
      {children}
    </section>
  );
};

export default Hero;

import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Debamitra!</h1>
        <p>
          Welcome to my personal website where I share my projects, thoughts, and creations.
        </p>
      </div>
      <div className="buttons">
        <Button label="Projects" />
        <Button label="Journal" link="/journal" />
        <Button label="Shop" />
      </div>
      <div className="illustrations">
        <div className="sun">
            <div className="sun-rays"></div>
        </div>
        <div className="clouds">
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
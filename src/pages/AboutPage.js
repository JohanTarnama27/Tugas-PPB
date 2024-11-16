import React from "react";
import "./AboutPage.css"; // Ensure you have a corresponding CSS file

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        "We have the principle of sharing information for better knowledge for
        everyone."
      </p>

      <div className="about-image-container">
        <img
          src="https://www.thespruce.com/thmb/4xhP8LOSqksKGufNqvGIBO4I2CM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dieffenbachia-plant-537683611-58331ed93df78c6f6a7e5164.jpg"
          alt="About Us"
          className="about-image"
        />
      </div>

      <div className="about-message">
        <p>Join us on our journey to create a greener, more vibrant world!</p>
      </div>
    </div>
  );
};

export default AboutPage;

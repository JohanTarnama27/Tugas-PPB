import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Make sure to import the custom CSS for styling

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-header">
        <h1 className="welcome-title">Welcome to the Plant </h1>
        <p className="welcome-description">
          "Various Types of Flowers, Showcasing Beauty"
        </p>
        <div className="home-buttons">
          <Link to="/plants" className="explore-button">
            Explore Plants
          </Link>
          <Link to="/about" className="about-button">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

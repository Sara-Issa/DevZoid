import React from "react";
import "./Dashboard/Sitting/sitting.css";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="info-container">
        <h2 className="about-title">About</h2>
        <p className="about-info">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        </div>
        <div className="info-container">
          <img src="./about.svg" alt="about" className="about-img" />
        </div>
      </div>
      <div className="about-container">
        <div className="info-container">
          <img src="./vision.svg" alt="vision" className="about-img" />
        </div>
        <div className="info-container">
        <h2 className="about-title">Vision</h2>
        <p className="about-info">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        </div>
      </div>
    </div>
  );
}

export default About;

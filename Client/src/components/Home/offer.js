import React from "react";
import "./home.css";

function Offer() {
  return (
    <div className="nav5">
      <div className="nav5-container">
        <div className="nav5-box">
          <img src="./hire.svg" alt="hire" className="nav5-img" />
          <p className="nav5-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="nav5-box">
          <img src="./find.svg" alt="find" className="nav5-img" />
          <p className="nav5-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="nav5-box">
          <img
            src="./work from home.svg"
            alt="work from home"
            className="nav5-img"
          />
          <p className="nav5-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offer;

import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Freelancers() {
  return (
    <div classname="nav3-effect">
    <div className="nav3">
      <div className="nav3-container">
        <div className="nav3-box">
          <img src="./freelancers.svg" alt="freelancers" className="nav3-img" />
        </div>
        <div className="nav3-box">
          <h3 className="nav3-info">
            check on our amazing freelancers. <br />
            You may also find a talented freelancer to hire.
          </h3>
          <Link to="/profileList">
          <button className="nav3-btn">Our Freelancers</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Freelancers;

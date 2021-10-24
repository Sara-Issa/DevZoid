import React from "react";
import { Link } from "react-router-dom";

function Freelancers() {
  return (
    <div className="space">
      <div className="container">
        <div>
          <img src="./freelancers.svg" alt="freelancers" className="nav-img" />
        </div>
        <div>
          <h3>
            check on our amazing freelancers. <br />
            You may also find a talented freelancer to hire.
          </h3>
          <Link to="/profileList">
          <button className="nav-btn">Our Freelancers</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Freelancers;

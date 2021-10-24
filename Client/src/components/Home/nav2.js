import React from "react";
import { Link } from "react-router-dom";

function Nav2() {
  return (
    <div className="space">
      <div className="container">
        <div className="">
          <h2>Welcome to DevZoid</h2>
          <h3>Sign up now and be one of our freelancers</h3>
          <Link to="/register">
            <button className="nav-btn"> Join Now</button>
            </Link>
        </div>
        <div>
          <img src="./nav2.svg" alt="nav2" className="nav-img" />
        </div>
      </div>
    </div>
  );
}

export default Nav2;

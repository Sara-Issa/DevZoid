import React from "react";
import {Link} from "react-router-dom"
import "./dashboard.css"

function Nav() {
  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <ul className="dashboard-container">
          <Link to="/profile">
          <li className="dashboard-li">Profile</li>
          </Link>
          <Link to="/jobList">
          <li className="dashboard-li">Jobs</li>
          </Link>
          <Link to="/account">
          <li className="dashboard-li">Account</li>
          </Link>
          </ul>
      </div>
    </div>
  );
}
export default Nav;

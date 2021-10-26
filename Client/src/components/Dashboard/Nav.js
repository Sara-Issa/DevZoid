import React from "react";
import {Link} from "react-router-dom"

function Nav() {
  return (
    <div>
      <div>
        <image src=""></image>
        <h2></h2>
      </div>
      <div>
        <ul>
          <Link to="/profile">
          <li>Profile</li>
          </Link>
          <Link to="/jobApplied">
          <li>Jobs</li>
          </Link>
          <Link to="/payment">
          <li>Payments</li>
          </Link>
          <Link to="/account">
          <li>Account</li>
          </Link>
          <Link to="/sitting">
          <li>Sitting</li>
          </Link>
          </ul>
      </div>
    </div>
  );
}
export default Nav;

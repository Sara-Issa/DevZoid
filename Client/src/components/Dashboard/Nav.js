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
          <li>Jobs</li>
          <li>Payments</li>
          <li>Account</li>
          <li>Sitting</li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;

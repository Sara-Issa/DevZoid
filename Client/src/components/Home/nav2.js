import React from "react";
import { Link } from "react-router-dom";
import "./home.css"

function Nav2() {
  return (
    <div classname="nav2-effect">
     <div className="nav2">
       <div className="nav2-container">
         <div className="nav2-box">
          <h2 className="nav2-title">Welcome to DevZoid</h2>
          <h3 className="nav2-info">Sign up now and be one of our freelancers</h3>
          <Link to="/register">
            <button className="nav2-btn"> Join Now</button>
            </Link>
         </div>
         <div className="nav2-box">
          <img src="./nav2.svg" alt="nav2" className="nav2-img" />
         </div>
       </div>
      </div>
    </div>   
  );
}

export default Nav2;

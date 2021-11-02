import React from "react";
import { Link } from "react-router-dom";
import "./profile.css"

function profileCard({ data }) {
  return (
    <div className="profileList-container">
      <div className="profileList-box">
        <img src={`https://devzoid.herokuapp.com/${data.image}`} alt="image" className="profileList-img"></img>   
      </div>
      <div className="profileList-box">
        <div  className="profileList-title">
          <h3 className="profileList-title">
            <Link to={`/freelancer/${data._id}`} className="profileList-title">
              {data.name}
              </Link>
          </h3>
          <span className="profileList-info">{data.title}</span>
        </div>
      </div>
    </div>
  );
}

export default profileCard;

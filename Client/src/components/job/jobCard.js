import React from "react";
import { Link } from "react-router-dom";
import "./job.css"

function jobCard({ data }) {
  return (
    <div className="jobList-container">
      <div className=" jobList-box">
        <div className="jobList-title">
          <h3 className="jobList-title">
            <Link to={`/job/${data._id}`} className="jobList-title">
              {data.name}
            </Link>
          </h3>
          <span className="jobList-info">{data.title}</span>
          <span className="jobList-info">${data.price}</span>
        </div>
      </div>
    </div>
  );
}

export default jobCard;

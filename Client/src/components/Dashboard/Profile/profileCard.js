import React from "react";
import { Link } from "react-router-dom";

function profileCard({ data }) {
  return (
    <div>
      <div>
        <img></img>   
      </div>
      <div>
        <div>
          <h3>
            <Link to={`/freelancer/${data._id}`}>
              {data.name}
              </Link>
          </h3>
          <span>{data.title}</span>
        </div>
      </div>
    </div>
  );
}

export default profileCard;

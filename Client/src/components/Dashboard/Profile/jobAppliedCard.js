import React from "react";
import { Link } from "react-router-dom";

function jobAppliedCard({ data }) {
  return (
    <div>
      <div>
        <div>
          <h3>
            <Link to={`/job/${data._id}`}>
              {data.name}
            </Link>
          </h3>
          <span>${data.price}</span>
        </div>
      </div>
    </div>
  );
}

export default jobAppliedCard;


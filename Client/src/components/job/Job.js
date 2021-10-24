import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

function Job() {
  const [job, setJob] = useState({});

  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    if (id) {
      Axios.get(`http://localhost:8000/api/job/${id}`).then((res) => {
        console.log(res.data.job);
        localStorage.setItem("job", JSON.stringify(res.data.job));
        setJob(res.data.job);
      });
    }
  }, [id]);

  return (
    <div>
      <div>
        {/* add an image */}
        <img />
      </div>
      <div>
        <h3>{job.name}</h3>
        <p>{job.description}</p>
        <h5>${job.price}</h5>
      </div>
    </div>
  );
}

export default Job;

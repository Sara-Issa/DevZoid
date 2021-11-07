import React from "react";
import JobCard from "./jobCard";
import Axios from "axios";
import { useState, useEffect } from "react";

const token = JSON.parse(localStorage.getItem("token"));

function JobList() {
  const [job, setJob] = useState([]);

  useEffect(() => {
    Axios.get(`https://devzoid.herokuapp.com/api/job?token=${token}`).then((res) => {
      setJob(res.data.jobs);
    });
  }, []);

  return (
    <div>
      <div>
        {job && job.length === 0 && <p className="looding">Loooooding...</p>}
        {job &&
          job.length > 0 &&
          job.map((job) => <JobCard key={job._id} data={job} />)}
      </div>
    </div>
  );
}

export default JobList;

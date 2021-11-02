import React from "react";
import { useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";



function JobPost() {
  const history = useHistory();
  

  const [job, setJob] = useState({
    name: "",
    description: "",
    price: "",
    title: "",
    userId: JSON.parse(localStorage.getItem("user"))._id,
  });

  function signUp() {
    Axios.post("http://localhost:8000/api/job/", job )
      .then(() => {
        toast.success("Job Posted");
        history.push("/jobList");
      })
      .catch((e) => toast.error(e.message));
  }

  return (
    <div className="jobPost">
      <div  className="jobPost-container">
      <div className="jobPost-box">
        <img src="./hire.svg" alt="hire" className="jobPost-img" />
      </div>
      <div className="jobPost-box">
        <h3 className="jobPost-title">Post a Job</h3>
        <input
          type="text"
          className="jobPost-input"
          placeholder="Name"
          onChange={(e) => setJob({ ...job, name: e.target.value })}
        ></input>
         <input
          type="text"
          className="jobPost-input"
          placeholder="Job title"
          onChange={(e) => setJob({ ...job, title: e.target.value })}
        ></input>
        <input
          type="text"
          className="jobPost-input"
          placeholder="Description"
          onChange={(e) => setJob({ ...job, description: e.target.value })}
        ></input>
        <input
          type="text"
          className="jobPost-input"
          placeholder="Price"
          onChange={(e) => setJob({ ...job, price: e.target.value })}
        ></input>
        <button className="jobPost-btn" onClick={() => signUp()}>
          Post Job
        </button>
      </div>
      </div>
    </div>
  );
}

export default JobPost;

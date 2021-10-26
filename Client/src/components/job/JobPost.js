import React from "react";
import { useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import { useHistory, Link } from "react-router-dom";

const user = JSON.parse(localStorage.getItem("user"));

function JobPost() {
  const history = useHistory();
  
  // ._id is not being read!!!!
  const userId =(user._id);
  const [job, setJob] = useState({
    name: "",
    description: "",
    price: "",
    title: "",
    userId,
  });

  function signUp() {
    Axios.post("http://localhost:8000/api/job/", job )
      .then(() => {
        toast.success("Job Posted");
        history.push("/job");
      })
      .catch((e) => toast.error(e.message));
  }

  return (
    <div>
      <div>
        <img src="./hire.svg" alt="hire" className="nav-img-offer" />
      </div>
      <div>
        <input
          type="text"
          className="input"
          placeholder="Name"
          onChange={(e) => setJob({ ...job, name: e.target.value })}
        ></input>
         <input
          type="text"
          className="input"
          placeholder="Job title"
          onChange={(e) => setJob({ ...job, title: e.target.value })}
        ></input>
        <input
          type="text"
          className="input"
          placeholder="Description"
          onChange={(e) => setJob({ ...job, description: e.target.value })}
        ></input>
        <input
          type="text"
          className="input"
          placeholder="Price"
          onChange={(e) => setJob({ ...job, price: e.target.value })}
        ></input>
        <button className="sign-btn" onClick={() => signUp()}>
          Post Job
        </button>
      </div>
    </div>
  );
}

export default JobPost;

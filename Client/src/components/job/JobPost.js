import React from "react";
import { useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import { useHistory, Link } from "react-router-dom";

function JobPost() {
  const history = useHistory();
  const [job, setJob] = useState({
    name: "",
    description: "",
    price: "",
  });

  function signUp() {
    Axios.post("http://localhost:8000/api/job/", job)
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

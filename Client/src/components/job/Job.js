import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useHistory, Link} from "react-router-dom";
import { toast } from "react-toastify";

function Job() {
  const [job, setJob] = useState({});
  const history = useHistory();

  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    if (id) {
      Axios.get(`https://devzoid.herokuapp.com/api/job/${id}`).then((res) => {
        console.log(res.data.job);
        localStorage.setItem("job", JSON.stringify(res.data.job));
        setJob(res.data.job);
      });
    }
  }, [id]);



  return (
    <div className="job">
      <div className="job-box">
        <h3  className="job-title">Name</h3>
        <Link to={`/client/${job.userId}`}>
          <h3  className="job-name">{job.name} </h3>
        </Link>
        <h3  className="job-title">Job Title</h3>
        <h4  className="job-info">{job.title}</h4>
        <h3  className="job-title">Job description</h3>
        <p  className="job-info">{job.description}</p>
        <h3  className="job-title">Price</h3>
        <h5  className="job-info">{job.price}</h5>
      </div>
    </div>
  );
}

export default Job;

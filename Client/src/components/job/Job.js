import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useHistory} from "react-router-dom";
import { toast } from "react-toastify";

function Job() {
  const [job, setJob] = useState({});
  const history = useHistory();

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

  // const job = console.log(res.data.job);


  // function addToJobList(job) {
  //   const jobs = [job];
  //   if (
  //     localStorage.getItem("token") === null
  //   ) { 
  //     toast.message("you have to login first");
  //     history.push("/login")
  //   } else {
  //     Axios.post(`http://localhost:8000/api/job/applied`)
  //       };
  //     toast.success("you applied to the job successfully");
  //     history.push("/jobApplied");
  //   };

  function addToJobList() {
    const Apply= async () => {
      try { await Axios.post(`http://localhost:8000/api/job/applied`, job)
        
      } catch (error) {
        
      }
    }
    };

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
      <di>
        <button onClick={() => addToJobList(job)}>Apply Now</button>
      </di>
    </div>
  );
}

export default Job;

import React from "react";
import ProfileCard from "./profileCard";
import Axios from "axios";
import { useState, useEffect } from "react";

const token = JSON.parse(localStorage.getItem("token"));

function ProfileList() {
  const [freelancer, setFreelancer] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://devzoid.herokuapp.com/api/freelancer`).then((res) => {
        setFreelancer(res.data.freelancers);
      });
  }, []);

  return (
    <div>
      <div>
      {freelancer && freelancer.length === 0 && <p>Loooooding...</p>}
      {freelancer && freelancer.length > 0 &&
        freelancer.map((freelancer) =>
          <ProfileCard key={freelancer._id} data={freelancer} />
        )}
      </div>
    </div>
  );
}

export default ProfileList;

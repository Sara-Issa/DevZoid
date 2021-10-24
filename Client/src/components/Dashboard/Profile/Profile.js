import React from "react";
import Axios from "axios";
import Reviews from "../Reviews"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineFacebook,
} from "react-icons/ai";

const user = JSON.parse(localStorage.getItem("user"))

function Profile() {
  // const { id } = useParams();
  const [profile, setProfile] = useState({});
 

  useEffect(() => {
    if (user) {
      Axios.get(`http://localhost:8000/api/freelancer/${user._id}`).then(
        (res) => setProfile(res.data.freelancer)
      );
    }
  }, [user]);
  return (
    <div>
      <div>
        <img></img>
      </div>
      <div>
        <h2>{profile.name}</h2>
        <h4>{profile.title}</h4>
      </div>
      <div>
        <h3>About</h3>
        <p>{profile.about}</p>
        <h3>Education</h3>
        <p>{profile.education}</p>
        <h3>Skills</h3>
        <p>{profile.skills}</p>
        <h3>Experience</h3>
        <p>{profile.experience}</p>
      </div>
      <div>
        <div>
          <h3>Contact Information</h3>
          {/* phone icon */} <p>{profile.phone}</p>
          {/* address icon */} <p>{profile.address}</p>
          {/* email icon */} <p></p>
          {/* website */} <p>{profile.website}</p>
        </div>
        <div>
          <h3>Social Media</h3>
          <AiOutlineTwitter /> <p>{profile.twitter}</p>
          < AiOutlineFacebook/> <p>{profile.facebook}</p>
          <AiOutlineGithub /> <p>{profile.github}</p>
          < AiOutlineLinkedin /><p>{profile.linked}</p>
          <AiOutlineInstagram /> <p>{profile.instagram}</p>
        </div>
      </div>
      <div>
        <h3> Review</h3>
      </div>
      <div>{/* import the review form to here */}</div>
      <div>{/* import the review display here */}</div>
      {/* <Reviews /> */}
    </div>
  );
}

export default Profile;

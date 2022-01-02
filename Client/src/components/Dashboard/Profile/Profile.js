import React from "react";
import Axios from "axios";
import "../dashboard.css"
import Nav from "../Nav";
import Review from "../reviews";
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
  const [reviews, setReviews] = useState([]);
  const [profile, setProfile] = useState({});
 

  useEffect(() => {
    if (user) {
    Axios.get(`https://devzoid.herokuapp.com/api/review/${user._id}`)
    .then((res) => { console.log(res.data);
       setReviews(res.data.reviews)})
  }}, [user]);

  useEffect(() => {
    if (user) {
      Axios.get(`https://devzoid.herokuapp.com/api/freelancer/${user._id}`).then(
        (res) => setProfile(res.data.freelancer)
      );
    }
  }, [user]);
  return (
    <div className="all">
    <div className="nav-box">
        <Nav />
      </div>
    <div className="profile1">
      <div className="profile1-container">
      <div className="profile1-box">
      <img src={`https://devzoid.herokuapp.com/${profile.image}`}  alt="profile-image" className="profile1-img"/>
      </div>
      <div className="profile1-box">
        <h2 className="profile1-name">{profile.name}</h2>
        <h4 className="profile1-name">{profile.title}</h4>
      </div>
      </div>
      <div className="profile1-container">
      <div className="profile1-box">
        <h3 className="profile1-title">About</h3>
        <p className="profile1-info">{profile.about}</p>
        <h3 className="profile1-title">Education</h3>
        <p className="profile1-info">{profile.education}</p>
        <h3 className="profile1-title">Skills</h3>
        <p className="profile1-info">{profile.skills}</p>
        <h3 className="profile1-title">Experience</h3>
        <p className="profile1-info">{profile.experience}</p>
      </div>
      <div className="profile1-box">
        <div>
          <h3 className="profile1-title">Contact Information</h3>
          {/* phone icon */} <p className="profile1-info">{profile.phone}</p>
          {/* address icon */} <p className="profile1-info">{profile.address}</p>
          {/* email icon */} <p className="profile1-info">{JSON.parse(localStorage.getItem("user")).email}</p>
          {/* website */} <p className="profile1-info">{profile.website}</p>
        </div>
        <div>
          <h3 className="profile1-title">Social Media</h3>
           <p className="profile1-info"><AiOutlineTwitter />{profile.twitter}</p>
           <p className="profile1-info">< AiOutlineFacebook/>{profile.facebook}</p>
           <p className="profile1-info"><AiOutlineGithub />{profile.github}</p>
          <p className="profile1-info">< AiOutlineLinkedin />{profile.linked}</p>
          <p className="profile1-info"><AiOutlineInstagram /> {profile.instagram}</p>
        </div>
      </div>
      </div>
      <div className="profile1-container">
      <div className="profile1-box">
        <h3 className="profile1-title"> Review</h3>
        {reviews.map((review) => (
          <Review review={review} />
          ))}
      </div>
    </div>
    </div>
    </div>
  );
}

export default Profile;

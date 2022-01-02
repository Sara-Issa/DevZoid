import React from 'react'
import Axios from "axios";
import Review from "./Dashboard/reviews";
import ReviewForm from './Dashboard/ReviewForm';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineFacebook,
} from "react-icons/ai";




function Freelancer() {
  const [reviews, setReviews] = useState([]);
  const [freelancer, setFreelancer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
    Axios.get(`https://devzoid.herokuapp.com/api/freelancer/${id}`).then((res) => {
      console.log(res.data.freelancer);
      localStorage.setItem("freelancer", JSON.stringify(res.data.freelancer));  
      setFreelancer(res.data.freelancer);
      // add loading thingy later
     
    });
  }}, [id]);  
  
  
  useEffect(() => {
    if (id) {
    Axios.get(`https://devzoid.herokuapp.com/api/review/${id}`)
    .then((res) => { console.log(res.data);
       setReviews(res.data.reviews)})
  }}, [id]);


  // test code
  const handleClick = async () => {
    try {
        await Axios.post("https://devzoid.herokuapp.com/api/conversations", {
        senderId: JSON.parse(localStorage.getItem("user"))._id,
        receiverId: id,
      })
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    
    <div className="all">
    <div className="profile2">
       <div className="profile2-container">
         <div className="profile2-box">
          <img src={`https://devzoid.herokuapp.com/${freelancer.image}`} alt="profile-image"  className="profile2-img"></img>
         </div>
         <div className="profile2-box">
          <h2 className="profile2-name">{freelancer.name}</h2>
          <h4 className="profile2-name">{freelancer.title}</h4>
          <Link to="/messenger">
            <button onClick={() => handleClick()}  className="profile2-btn">Hire me!</button>
          </Link>
         </div>
      </div>
      <div className="profile2-container">
       <div className="profile2-box">
        <h3 className="profile2-title">About</h3>
        <p className="profile2-info">{freelancer.about}</p>
        <h3 className="profile2-title">Education</h3>
        <p className="profile2-info">{freelancer.education}</p>
        <h3 className="profile2-title">Skills</h3>
        <p className="profile2-info">{freelancer.skills}</p>
        <h3 className="profile2-title">Experience</h3>
        <p className="profile2-info">{freelancer.experience}</p>
      </div>
      <div className="profile2-box">
        <div>
          <h3 className="profile2-title">Contact Information</h3>
          {/* phone icon */} <p className="profile2-info">{freelancer.phone}</p>
          {/* address icon */} <p className="profile2-info">{freelancer.address}</p>
          {/* email icon <p className="profile2-info">{JSON.parse(localStorage.getItem("user")).email}</p> */}
          {/* website */} <p className="profile2-info">{freelancer.website}</p>
        </div>

        <div>
          <h3 className="profile2-title">Social Media</h3>
         <p className="profile2-info"> <AiOutlineTwitter /> {freelancer.twitter}</p>
         <p className="profile2-info"> <AiOutlineFacebook /> {freelancer.facebook}</p>
         <p className="profile2-info"> <AiOutlineGithub /> {freelancer.github}</p>
         <p className="profile2-info"> <AiOutlineLinkedin />{freelancer.linked}</p>
           <p className="profile2-info"><AiOutlineInstagram />{freelancer.instagram}</p>

          
        </div>
      </div>
    </div>
    <div className="profile2-container">
        <div className="profile2-box">
          <h3 className="profile2-title"> Review</h3>
          <ReviewForm />
          {reviews.map((review) => (
          <Review review={review} />
          ))}
        </div>
      </div>
      </div>
      </div>
    
  );
}

export default Freelancer

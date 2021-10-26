import React from 'react'
import Axios from "axios";
import Review from "./Dashboard/Reviews";
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

const token = JSON.parse(localStorage.getItem("token"));


function Freelancer({currentChat}) {
  const [reviews, setReviews] = useState([]);
  const [freelancer, setFreelancer] = useState({});
  const { id, user } = useParams();

  useEffect(() => {
    if (id) {
    Axios.get(`http://localhost:8000/api/freelancer/${id}`).then((res) => {
      console.log(res.data.freelancer);
      localStorage.setItem("freelancer", JSON.stringify(res.data.freelancer));  
      setFreelancer(res.data.freelancer);
      // add loading thingy later
     
    });
  }}, [id]);  
  
  
  useEffect(() => {
    Axios.get(`http://localhost:8000/api/review/${id}?token=${token}`)
    .then((res) => setReviews(res.data.review));
  }, );
  // test code
  const handleClick = async () => {
    try {
        await Axios.post("http://localhost:8000/api/conversations", {
        senderId: JSON.parse(localStorage.getItem("user"))._id,
        receiverId: id,
      })
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    
     <div>
       <Link to="/messenger">
       <button onClick={() => handleClick()}>Message me!</button>
       </Link>
      <div>
        <img></img>
      </div>
      <div>
        <h2>{freelancer.name}</h2>
        <h4>{freelancer.title}</h4>
      </div>
      <div>
        <h3>About</h3>
        <p>{freelancer.about}</p>
        <h3>Education</h3>
        <p>{freelancer.education}</p>
        <h3>Skills</h3>
        <p>{freelancer.skills}</p>
        <h3>Experience</h3>
        <p>{freelancer.experience}</p>
      </div>
      <div>
        <div>
          <h3>Contact Information</h3>
          {/* phone icon */} <p>{freelancer.phone}</p>
          {/* address icon */} <p>{freelancer.address}</p>
          {/* email icon */} <p></p>
          {/* website */} <p>{freelancer.website}</p>
        </div>
        <div>
          <h3>Social Media</h3>
          <AiOutlineTwitter /> <p>{freelancer.twitter}</p>
          <AiOutlineFacebook /> <p>{freelancer.facebook}</p>
          <AiOutlineGithub /> <p>{freelancer.github}</p>
          <AiOutlineLinkedin /><p>{freelancer.linked}</p>
          <AiOutlineInstagram /> <p>{freelancer.instagram}</p>
        </div>
      </div>
      <div>
        <h3> Review</h3>
      </div>
      <div>
      {/* {reviews.map((review) => (
            <Review review={review} />
            ))} */}
            </div>
      <div><ReviewForm /></div>
      
    </div>
  );
}

export default Freelancer

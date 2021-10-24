import React from "react";
import { MdStar } from "react-icons/md";
import { useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom"


function ReviewForm(freelancerId, userId) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");
  const { _id } = useParams();

  function saveReview() {
    console.log("review");
    Axios.post("http://localhost:8000/api/review", {
      title,
      rating,
      review,
      user: userId,
      freelancer: freelancerId,
    }).then((res) => console.log(res));
  }

  return (
    // this is the review form
    <div>
      <h3>Add a new review</h3>
      <div className="flex add-review">
        <input
          type="text"
          Placeholder="Review Title"
          className="input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <MdStar
            className={rating >= 1 ? "review-star star" : "review-star"}
            onClick={() => setRating(1)}
          />
          <MdStar
            className={rating >= 2 ? "review-star star" : "review-star"}
            onClick={() => setRating(2)}
          />
          <MdStar
            className={rating >= 3 ? "review-star star" : "review-star"}
            onClick={() => setRating(3)}
          />
          <MdStar
            className={rating >= 4 ? "review-star star" : "review-star"}
            onClick={() => setRating(4)}
          />
          <MdStar
            className={rating >= 5 ? "review-star star" : "review-star"}
            onClick={() => setRating(5)}
          />
        </div>
        <textarea
          placeholder="Review"
          rows="4"
          onChange={(e) => setReview(e.target.value)}
        />
        <button className="btn-review hover" onClick={() => saveReview()}>
          Submit Review
        </button>
      </div>
    </div>
  );
}

export default ReviewForm;

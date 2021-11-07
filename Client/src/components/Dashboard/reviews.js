import React from "react";
import { MdStar } from "react-icons/md";

function Reviews({ review }) {
  return (
    <div  className="review">
      <div>
        <div  className="review-title">
          <h4  className="review-title">{review.user.username}</h4>
        </div>
        <div  className="review-title">
          <div  className="review-title">
            <MdStar
              className={
                review.rating >= 1 ? "review-star star" : "review-star"
              }
            />
            <MdStar
              className={
                review.rating >= 2 ? "review-star star" : "review-star"
              }
            />
            <MdStar
              className={
                review.rating >= 3 ? "review-star star" : "review-star"
              }
            />
            <MdStar
              className={
                review.rating >= 4 ? "review-star star" : "review-star"
              }
            />
            <MdStar
              className={
                review.rating >= 5 ? "review-star star" : "review-star"
              }
            />
          </div>
          <b className="review-title">{review.title}</b>
        </div>
        <div className="review-title">
        {review.review}
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default Reviews;

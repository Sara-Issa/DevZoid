import React from "react";
import { MdStar } from "react-icons/md";

function Reviews({ review }) {
  return (
    <div>
      {/* review part is different, we need input and button to
      add the review and also at the same time displaying it in the profile  */}
      {/* this is the review displaying file */}
      <h2>Reviews</h2>
      <img src="./rate.svg" alt="rate"></img>
      <div>
        <div>
          <h4>{review.user.username}</h4>
        </div>
        <div>
          <div>
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
          <b>{review.title}</b>
        </div>
        {review.review}
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default Reviews;

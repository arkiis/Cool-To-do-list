import React from "react";
import { reviews } from "../constants/index";
import Review from "./Review";

const Reviews = () => {
  return (
    <div className="review-wrapper">
      {reviews.map(review => (
        <Review key={review.id} {...review}></Review>
      ))}
    </div>
  );
};

export default Reviews;

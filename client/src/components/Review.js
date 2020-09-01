import React from "react";

const Review = ({ ...rest }) => {
  return (
    <div>
      <p>{rest.location}</p>
      <div className="rating-wrapper">
        <div>{rest.rating}</div>
        <h4>{rest.comment}</h4>
      </div>
    </div>
  );
};

export default Review;

import React from "react";

const Review = ({ ...rest }) => {
  console.log("rest.comment", rest);
  return (
    <div>
      <p>{rest.location}</p>
      <div>
        <div>{rest.rating}</div>
        <h4>{rest.comment}</h4>
      </div>
    </div>
  );
};

export default Review;

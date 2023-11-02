import React from "react";
import "./Reviews.css";
import ReviewItem from "./ReviewItem";
import ReviewForm from "./ReviewForm";

const Reviews = ({active}) => {
  return (
    <div className={`tab-panel-reviews ${active} `}>
      <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
      <div className="comments">
        <ol className="comment-list">
          <ReviewItem />
          
        </ol>
      </div>
      <div className="review-form-wrapper">
        <h2>Add a review</h2>
        <ReviewForm />
      </div>
    </div>
  );
};

export default Reviews;
   
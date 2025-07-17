import React from "react";
import { useReview } from "./ReviewContext";
import ReviewForm from "./ReviewForm";
import { motion } from "framer-motion";

const ReviewList = () => {
  const { reviews, deleteReview, voteReview } = useReview();

  const sortedReviews = [...reviews].sort((a, b) => b.votes - a.votes);

  return (
    <div className="review-section">
      <h2>Reviews</h2>
      <ReviewForm />
      <div className="review-list">
        {sortedReviews.map((review) => (
          <motion.div key={review.id} className="review-card" layout>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
            <div className="review-actions">
              <button onClick={() => voteReview(review.id, 1)}>👍</button>
              <button onClick={() => voteReview(review.id, -1)}>👎</button>
              <span>{review.votes} votes</span>
              <button onClick={() => deleteReview(review.id)}>🗑️ Delete</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;

import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const ReviewSection = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="review-section">
      <h2>📝 Reviews</h2>
      <button onClick={() => setShowForm((prev) => !prev)} style={{padding:"10px", margin:"15px", backgroundColor:"gray",border:"transperant",cursor:"pointer",borderRadius:"7px", fontWeight:"600"}} >
        {showForm ? "Close" : "Write a Review"} 
      </button>
      {showForm && <ReviewForm onSave={() => setShowForm(false)} />}
      <ReviewList />
    </div>
  );
};

export default ReviewSection;

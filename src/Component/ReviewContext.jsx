import { createContext, useContext, useState } from "react";

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews((prev) => [...prev, { ...review, id: Date.now(), votes: 0 }]);
  };

  const updateReview = (id, updatedContent) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, content: updatedContent } : r))
    );
  };

  const deleteReview = (id) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  const voteReview = (id, delta) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, votes: r.votes + delta } : r))
    );
  };

  return (
    <ReviewContext.Provider
      value={{ reviews, addReview, updateReview, deleteReview, voteReview }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export const useReview = () => useContext(ReviewContext);

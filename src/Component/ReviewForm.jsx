import { useState } from "react";
import { useReview } from "./ReviewContext";

const ReviewForm = () => {
  const { addReview } = useReview();
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !content) return alert("Fill all fields");
    addReview({ author, content });
    setAuthor("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <input
        type="text"
        placeholder="Your Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <textarea
        placeholder="Write your review..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Post Review</button>
    </form>
  );
};

export default ReviewForm;

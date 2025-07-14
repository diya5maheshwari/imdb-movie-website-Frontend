import { Star } from "lucide-react";
import React from "react";
import "../App.css";

const MovieCard = ({ title, rating, image, year, genre }) => {
  return (
    <div className="movie-card">
      <div className="movie-card-image">
        <img src={image} alt={title} />
        <div className="movie-card-overlay">
          <div className="movie-card-overlay-content">
            <button className="view-details-btn">View Details</button>
          </div>
        </div>
        <div className="movie-card-rating">
          <Star className="star-icon" />
          <span>{rating}</span>
        </div>
      </div>
      <div className="movie-card-info">
        <div className="movie-card-title-year">
          <h3>{title}</h3>
          <span>{year}</span>
        </div>
        {genre && (
          <div className="movie-card-genres">
            {genre.slice(0, 2).map((g) => (
              <span key={g} className="genre-pill" style={{ padding: "10px 20px",fontSsize: "16px"}} >
                {g}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard; 
import { Star, Trophy } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import '../App.css' // Updated CSS import

const Toprated = () => {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      rating: 9.3,
      image:
        "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80",
      year: 1994,
      votes: "2.8M",
      rank: 1,
    },
    {
      id: 2,
      title: "The Godfather",
      rating: 9.2,
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
      year: 1972,
      votes: "2.1M",
      rank: 2,
    },
    {
      id: 3,
      title: "The Dark Knight",
      rating: 9.0,
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
      year: 2008,
      votes: "2.7M",
      rank: 3,
    },
  ];

  return (
    <div className="tr-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="tr-header"
      >
        <Trophy className="tr-icon-trophy" />
        <h1 className="tr-title">Top Rated Movies</h1>
      </motion.div>

      <div className="tr-list">
        {movies.map((movie, index) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/movie/${movie.id}`} style={{textDecoration:"none"}} >
              <div className="tr-movie-card">
                <div className="tr-movie-rank">#{movie.rank}</div>
                <div className="tr-movie-image">
                  <img src={movie.image} alt={movie.title} />
                </div>
                <div className="tr-movie-content">
                  <div className="tr-movie-header">
                    <h2 className="tr-movie-title">{movie.title}</h2>
                    <div className="tr-movie-rating">
                      <Star className="tr-icon-star" />
                      <span className="tr-rating-text">{movie.rating}</span>
                    </div>
                  </div>
                  <div className="tr-movie-info">
                    <span>{movie.year}</span>
                    <span className="tr-dot">•</span>
                    <span>{movie.votes} votes</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Toprated;

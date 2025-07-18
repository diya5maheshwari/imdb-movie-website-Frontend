import { Search, SlidersHorizontal, Star } from "lucide-react";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../App.css";


const MovieList = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const Movies = [
    {
      id: 1,
      title: "Dune: Part Two",
      rating: 8.8,
      image: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80",
      year: 2024,
      genre: ["Action", "Adventure", "Sci-Fi"],
    },
    {
      id: 2,
      title: "Poor Things",
      rating: 8.4,
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
      year: 2023,
      genre: ["Comedy", "Drama", "Romance"],
    },
    {
      id: 3,
      title: "Oppenheimer",
      rating: 8.9,
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
      year: 2023,
      genre: ["Biography", "Drama", "History"],
    },
    {
      id: 4,
      title: "The Batman",
      rating: 8.5,
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=800&q=80",
      year: 2024,
      genre: ["Action", "Crime", "Drama"],
    },
    {
      id: 5,
      title: "Killers of the Flower Moon",
      rating: 8.7,
      image: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800&q=80",
      year: 2023,
      genre: ["Crime", "Drama", "History"],
    },
  ];

  return (
    <div className="movie-container">
      <div className="movie-header">
        <h1 className="movie-heading">
          {search ? `Search Results for "${search}"` : "Popular Movies"}
        </h1>
        <button className="filter-button">
          <SlidersHorizontal className="filter-icon" />
          Filters
        </button>
      </div>

      <div className="movie-scroll-container">
        {Movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} style={{textDecoration:"none"}} >
            <div className="movie-card">
              <div className="movie-image-container">
                <img src={movie.image} alt={movie.title} className="movie-image" />
                <div className="movie-rating-badge">
                  <Star className="movie-rating-icon" />
                  <span className="movie-rating-text">{movie.rating}</span>
                </div>
              </div>
              <div className="movie-details">
                <h2 className="movie-title">{movie.title}</h2>
                <div className="movie-subinfo">
                  <span className="movie-year">{movie.year}</span>
                  <div className="flex">
                    {movie.genre.slice(0, 2).map((g) => (
                      <span key={g} className="genre-pill">{g}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default MovieList;

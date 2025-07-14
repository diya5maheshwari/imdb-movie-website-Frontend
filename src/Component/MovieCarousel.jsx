import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard'; // Make sure you have this component
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MovieCarousel = ({ movies }) => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleMovies = 4;

    const nextSlide = () => {
        setStartIndex((prev) =>
            prev + visibleMovies >= movies.length ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setStartIndex((prev) =>
            prev === 0 ? Math.max(0, movies.length - visibleMovies) : prev - 1
        );
    };

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div
                    className="carousel-track"
                    style={{
                        transform: `translateX(-${startIndex * (100 / visibleMovies)}%)`,
                    }}
                >
                    {movies.map((movie) => (
                        <div key={movie.id} className="carousel-item">
                            <Link to={`/movie/${movie.id}`}  style={{textDecoration:"none"}} >
                                <MovieCard {...movie} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {movies.length > visibleMovies && (
                <>
                    <button onClick={prevSlide} className="carousel-button left">
                        <ChevronLeft className="icon" />
                    </button>
                    <button onClick={nextSlide} className="carousel-button right">
                        <ChevronRight className="icon" />
                    </button>
                </>
            )}
        </div>
    );
};

export default MovieCarousel;

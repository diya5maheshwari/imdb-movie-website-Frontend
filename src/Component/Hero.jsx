import React, { useState, useEffect } from 'react';
import { Star, Calendar, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../App.css';

const featuredMovies = [
    {
        id: 1,
        title: "Inception",
        rating: 8.8,
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        image: "https://musicart.xboxlive.com/7/c96d1100-0000-0000-0000-000000000002/504/image.jpg",
        releaseDate: "2010-07-16",
    },
    {
        id: 2,
        title: "The Dark Knight",
        rating: 9.0,
        description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
        releaseDate: "2008-07-18",
    },
    {
        id: 3,
        title: "Interstellar",
        rating: 8.6,
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        image: "https://www.hauweele.net/~gawen/blog/wp-content/uploads/2014/11/interstellar.jpg",
        releaseDate: "2014-11-07",
    },
    {
        id: 4,
        title: "The Matrix",
        rating: 8.7,
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9eyF_d2BmIQxoCL5Jy6yobsQJs3jGPN9qUQ&s",
        releaseDate: "1999-03-31",

    }
];

const Hero = () => {
    const [currentMovie, setCurrentMovie] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentMovie((prev) => (prev + 1) % featuredMovies.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const movie = featuredMovies[currentMovie];

    return (
        <div className="hero-container">
            <div className="hero-bg" style={{ backgroundImage: `url(${movie.image})` }}></div>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="hero-meta">
                    <span style={{color:"yellow"}} ><Star />  {movie.rating} Rating</span>
                    <span><Calendar /> {movie.releaseDate}</span>
                </div>
                <h1 className="hero-title">{movie.title}</h1>
                <p className="hero-description">{movie.description}</p>
                <div className="hero-buttons">
                    <Link to={`/movies/${movie.id}`} className="btn"><Play /> Watch Trailer</Link>
                    <Link to={`/movies/${movie.id}`} className="btn" style={{backgroundColor:"#1e1d1d",color:"white"}} >More Info</Link>
                </div>
            </div>

            <div className="hero-dots">
                {featuredMovies.map((_, index) => (
                    <button
                        key={index}
                        className={index === currentMovie ? "active" : ""}
                        onClick={() => setCurrentMovie(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;

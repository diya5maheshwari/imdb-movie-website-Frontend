import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Clapperboard, Star, Award, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import '../App.css';

// Mock API service to simulate data fetching
const fetchActorData = async (id) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock data - in a real app, this would be an API call
  const actorsData = [
    {
      id: "1",
      name: "Timothée Chalamet",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      biography: "Timothée Hal Chalamet is an American actor. He has received various accolades, including nominations for an Academy Award, two Golden Globe Awards, and three BAFTA Film Awards. Born and raised in New York City, he began his career on the stage and in television productions, appearing in the drama series Homeland in 2012.",
      birthDate: "December 27, 1995",
      birthPlace: "New York City, New York, USA",
      knownFor: [
        { title: "Dune: Part Two", year: 2024, rating: 8.8, image: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80" },
        { title: "Wonka", year: 2023, rating: 7.2, image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80" },
        { title: "Dune", year: 2021, rating: 8.0, image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80" },
      ],
      awards: [
        { name: "Academy Award Nomination", year: 2018, category: "Best Actor", film: "Call Me by Your Name" },
        { name: "Golden Globe Nomination", year: 2018, category: "Best Actor - Drama", film: "Call Me by Your Name" },
        { name: "BAFTA Nomination", year: 2018, category: "Best Actor", film: "Call Me by Your Name" },
      ],
      socialMedia: {
        instagram: "https://instagram.com/tchalamet",
        twitter: "https://twitter.com/realchalamet",
      },
    },
    {
      id: "2",
      name: "Zendaya",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      biography: "Zendaya is an American actress and singer. She began her career as a child model and backup dancer before gaining prominence for her role as Rocky Blue on the Disney Channel sitcom Shake It Up. She has gone on to star in numerous acclaimed films and television series.",
      birthDate: "September 1, 1996",
      birthPlace: "Oakland, California, USA",
      knownFor: [
        { title: "Dune: Part Two", year: 2024, rating: 8.8, image: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80" },
        { title: "Spider-Man: No Way Home", year: 2021, rating: 8.2, image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80" },
        { title: "Euphoria", year: 2019, rating: 8.4, image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=800&q=80" },
      ],
      awards: [
        { name: "Emmy Award", year: 2020, category: "Outstanding Lead Actress", film: "Euphoria" },
        { name: "Emmy Award", year: 2022, category: "Outstanding Lead Actress", film: "Euphoria" },
      ],
      socialMedia: {
        instagram: "https://instagram.com/zendaya",
        twitter: "https://twitter.com/zendaya",
      },
    },
    {
      id: "3",
      name: "Cillian Murphy",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      biography: "Cillian Murphy is an Irish actor. He is the recipient of numerous accolades, including an Academy Award, a BAFTA Award, and a Golden Globe Award. He began his career performing as a rock musician before turning to acting.",
      birthDate: "May 25, 1976",
      birthPlace: "Cork, Ireland",
      knownFor: [
        { title: "Oppenheimer", year: 2023, rating: 8.9, image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80" },
        { title: "Peaky Blinders", year: 2013, rating: 8.8, image: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800&q=80" },
        { title: "Inception", year: 2010, rating: 8.8, image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80" },
      ],
      awards: [
        { name: "Academy Award", year: 2024, category: "Best Actor", film: "Oppenheimer" },
        { name: "BAFTA Award", year: 2024, category: "Best Actor", film: "Oppenheimer" },
        { name: "Golden Globe Award", year: 2024, category: "Best Actor - Drama", film: "Oppenheimer" },
      ],
      socialMedia: {
        instagram: "https://instagram.com/cillianmurphyofficial",
        twitter: "https://twitter.com/cillianmurphy",
      },
    }
  ];
  
  return actorsData.find(actor => actor.id === id);
};

export default function ActorProfile() {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getActorData = async () => {
      try {
        setLoading(true);
        const data = await fetchActorData(id);
        if (data) {
          setActor(data);
        } else {
          setError('Actor not found');
        }
      } catch (err) {
        setError('Failed to fetch actor data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getActorData();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading actor profile...</p>
      </div>
    );
  }

  if (error || !actor) {
    return (
      <div className="error-container">
        <h2>❌ {error || 'Actor not found'}</h2>
        <p>Please try again later or check the actor ID.</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="actor-profile-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="actor-header-section">
        <motion.img 
          className="actor-img" 
          src={actor.image} 
          alt={actor.name} 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        
        <motion.div 
          className="actor-details"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1>{actor.name}</h1>
          <p className="actor-meta">
            <span>Born: {actor.birthDate}</span>
            <span> • </span>
            <span>{actor.birthPlace}</span>
          </p>
          
          <div className="actor-bio">
            <p>{actor.biography}</p>
          </div>
          
          <div className="actor-social">
            <a href={actor.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="social-icon" />
            </a>
            <a href={actor.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="social-icon" />
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="actor-awards-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2><Award className="section-icon" /> Awards & Achievements</h2>
        <div className="awards-grid">
          {actor.awards.map((award, index) => (
            <motion.div 
              key={index} 
              className="award-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (index * 0.1), duration: 0.4 }}
            >
              <Award className="award-icon" />
              <div>
                <h3>{award.name}</h3>
                <p>{award.year} • {award.category}</p>
                <p className="award-film">{award.film}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="actor-filmography"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h2><Clapperboard className="section-icon" /> Known For</h2>
        <div className="movies-grid">
          {actor.knownFor.map((movie, index) => (
            <motion.div 
              key={movie.title} 
              className="movie-card-small"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + (index * 0.1), duration: 0.4 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="movie-poster">
                <img src={movie.image} alt={movie.title} />
                <div className="movie-rating">
                  <Star className="star-icon" /> {movie.rating}
                </div>
              </div>
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
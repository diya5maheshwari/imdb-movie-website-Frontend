import Hero from "../Component/Hero";
import { TrendingUp, Star, Clock, Award } from 'lucide-react';
import { Link } from "react-router-dom";
import MovieCarousel from "../Component/MovieCarousel";
import TrendingCarousel from "../Component/TrendingCarousel";
import '../App.css';
import { motion } from 'framer-motion';
import { actors } from "../data/actors"; // correct path
import ReviewSection from "../Component/ReviewSection";

function Home() {
  const trendingMovies = [
    {
      id: 1,
      title: "Dune: Part Two",
      rating: 8.8,
      image:
        "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80",
      year: 2024,
      genre: ["Action", "Adventure", "Sci-Fi"],
    },
    {
      id: 2,
      title: "Poor Things",
      rating: 8.4,
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
      year: 2023,
      genre: ["Comedy", "Drama", "Romance"],
    },
    {
      id: 3,
      title: "Oppenheimer",
      rating: 8.9,
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
      year: 2023,
      genre: ["Biography", "Drama", "History"],
    },
    {
      id: 4,
      title: "The Batman",
      rating: 8.5,
      image:
        "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=800&q=80",
      year: 2024,
      genre: ["Action", "Crime", "Drama"],
    },
    {
      id: 5,
      title: "Killers of the Flower Moon",
      rating: 8.7,
      image:
        "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800&q=80",
      year: 2023,
      genre: ["Crime", "Drama", "History"],
    },
  ];

  const upcomingMovies = [
    {
      id: 6,
      title: "Deadpool 3",
      rating: 9.1,
      image:
        "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80",
      year: 2024,
      genre: ["Action", "Comedy", "Adventure"],
    },
    {
      id: 8,
      title: "Kingdom of the Planet of the Apes",
      rating: 8.3,
      image:
        "https://images.unsplash.com/photo-1533973860717-d49dfd14cf64?auto=format&fit=crop&w=800&q=80",
      year: 2024,
      genre: ["Action", "Adventure", "Drama"],
    }
  ];

  return (
    <div>
      <Hero />

      <main>
        <div className="categories">
          {[
            {
              icon: TrendingUp,
              label: "Trending",
              path: "/movies?sort=trending",
            },
            {
              icon: Star,
              label: "Top Rated",
              path: "/top-rated",
            },
            {
              icon: Clock,
              label: "Coming Soon",
              path: "/coming-soon",
            },
            {
              icon: Award,
              label: "Awards",
              path: "/awards",
            },
          ].map((category, index) => (
            <Link key={index} to={category.path}>
              <category.icon className="w-5 h-5" />
              <span>{category.label}</span>
            </Link>
          ))}
        </div>

        {/* Trending Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <TrendingUp className="TrendingUp" /> Trending Now
            </motion.h2>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link to="/movies?sort=trending">View All</Link>
            </motion.div>
          </div>
          <TrendingCarousel />
        </motion.section>

        {/* Coming Soon Section */}
        <section>
          <div className="section-header">
            <h2><Clock className="TrendingUp" /> Coming Soon</h2>
            <Link to="/coming-soon">View All</Link>
          </div>
          <MovieCarousel movies={upcomingMovies} />
        </section>

        {/* Actor Section */} 
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="section-header">
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Award className="TrendingUp" /> Featured Actors
            </motion.h2>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link to="/actor">View All</Link>
            </motion.div>
          </div>

          <div className="actor-grid">
            {actors.map((actor, index) => (
              <motion.div
                key={actor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + (index * 0.1), duration: 0.5 }}
              >
                <Link to={`/actor/${actor.id}`} className="actor-card">
                  <img src={actor.image} alt={actor.name} className="actor-img" />
                  <h3 className="actor-name" style={{textDecoration:"none"}} >{actor.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
       
      </main>
      <ReviewSection />
    </div>
  );
}

export default Home;

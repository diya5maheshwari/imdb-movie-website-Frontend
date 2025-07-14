import Hero from "../Component/Hero";
import { TrendingUp, Star, Clock, Award } from 'lucide-react';
import { Link } from "react-router-dom";
import MovieCarousel from "../Component/MovieCarousel";
import '../App.css';

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
    },
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

                <section>
                    <div className="section-header">
                        <h2 ><  TrendingUp className="TrendingUp" /> Trending Now</h2>
                        <Link to="/movies?sort=trending" >View All</Link>
                    </div>
                    <MovieCarousel movies={trendingMovies} />
                </section>

                <section>
                    <div className="section-header">
                        <h2 ><Clock className="TrendingUp" /> Coming Soon</h2>
                        <Link to="/coming-soon" >View All</Link>
                    </div>
                    <MovieCarousel movies={upcomingMovies} />
                </section>
            </main>
        </div>
    );
}

export default Home;

import {
  Award,
  BarChart3,
  Calendar,
  Clock,
  DollarSign,
  Globe,
  Heart,
  Play,
  Share2,
  Star,
} from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";// NEW CSS import

const MovieDetails = () => {
  const Movies = [
    {
      id: 1,
      title: "Dune: Part Two",
      rating: 8.8,
      year: 2024,
      duration: "166 min",
      genre: ["Action", "Adventure", "Drama", "Sci-Fi"],
      director: "Denis Villeneuve",
      description:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future only he can foresee.",
      image:
        "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=2000&q=80",
      backdrop:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2000&q=80",
      cast: [
        {
          id: 1,
          name: "Timothée Chalamet",
          role: "Paul Atreides",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
          bio: "Rising star known for his compelling performances",
        },
        {
          id: 2,
          name: "Zendaya",
          role: "Chani",
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
          bio: "Multi-talented actress and fashion icon",
        },
      ],
      trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      awards: ["Academy Award Nominee", "Golden Globe Nominee"],
      boxOffice: "$494.7M",
      language: "English",
      productionCompany: "Legendary Entertainment",
      releaseDate: "2024-03-01",
      metacriticScore: 81,
      rottenTomatoesScore: 94,
    },
    {
      id: 3,
      title: "Oppenheimer",
      rating: 8.4,
      year: 2023,
      duration: "180 min",
      genre: ["Biography", "Drama", "History"],
      director: "Christopher Nolan",
      description:
        "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II, exploring the moral complexities and consequences of scientific discovery.",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=2000&q=80",
      backdrop:
        "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=2000&q=80",
      cast: [
        {
          id: 3,
          name: "Cillian Murphy",
          role: "J. Robert Oppenheimer",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
          bio: "Versatile actor known for intense performances",
        },
        {
          id: 4,
          name: "Emily Blunt",
          role: "Katherine Oppenheimer",
          image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
          bio: "Acclaimed actress with numerous awards",
        },
      ],
      trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      awards: ["Academy Award Winner", "BAFTA Winner", "Golden Globe Winner"],
      boxOffice: "$957.8M",
      language: "English",
      productionCompany: "Universal Pictures",
      releaseDate: "2023-07-21",
      metacriticScore: 89,
      rottenTomatoesScore: 93,
    },
    {
      id: 2,
      title: "Poor Things",
      rating: 8.3,
      year: 2023,
      duration: "141 min",
      genre: ["Comedy", "Drama", "Romance", "Sci-Fi"],
      director: "Yorgos Lanthimos",
      description:
        "The incredible tale of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter. Under his protection, Bella is eager to learn.",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=80",
      backdrop:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=2000&q=80",
      cast: [
        {
          id: 5,
          name: "Emma Stone",
          role: "Bella Baxter",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
          bio: "Academy Award-winning actress",
        },
        {
          id: 6,
          name: "Willem Dafoe",
          role: "Dr. Godwin Baxter",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
          bio: "Legendary actor with diverse roles",
        },
      ],
      trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      awards: ["Academy Award Winner", "Venice Film Festival Winner"],
      boxOffice: "$102.3M",
      language: "English",
      productionCompany: "Searchlight Pictures",
      releaseDate: "2023-12-08",
      metacriticScore: 87,
      rottenTomatoesScore: 92,
    },
    {
      id: 4,
      title: "The Zone of Interest",
      rating: 7.9,
      year: 2023,
      duration: "105 min",
      genre: ["Drama", "History", "War"],
      director: "Jonathan Glazer",
      description:
        "The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig, strive to build a dream life for their family in a house and garden next to the camp.",
      image:
        "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=2000&q=80",
      backdrop:
        "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?auto=format&fit=crop&w=2000&q=80",
      cast: [
        {
          id: 7,
          name: "Christian Friedel",
          role: "Rudolf Höss",
          image:
            "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=200&q=80",
          bio: "German actor and musician",
        },
        {
          id: 8,
          name: "Sandra Hüller",
          role: "Hedwig Höss",
          image:
            "https://images.unsplash.com/photo-1557296387-5358ad7997bb?auto=format&fit=crop&w=200&q=80",
          bio: "Award-winning German actress",
        },
      ],
      trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      awards: ["Academy Award Winner", "Cannes Film Festival Winner"],
      boxOffice: "$27.1M",
      language: "German",
      productionCompany: "A24",
      releaseDate: "2024-01-31",
      metacriticScore: 94,
      rottenTomatoesScore: 91,
    },
  ];
  const { id } = useParams();
  const movie = Movies.find((m) => m.id === Number(id)) || Movies[0];

  return (
    <div>
      <div className="backdrop-container">
        <div
          className="backdrop-image"
          style={{ backgroundImage: `url(${movie.backdrop || movie.image})` }}
        >
          <div className="backdrop-overlay" />
        </div>

        <div className="content-wrapper">
          <div className="movie-details-grid">
            <div className="movie-poster">
              <img src={movie.image} alt={movie.title} />
            </div>

            <div className="movie-main-info">
              <div className="movie-tags">
                <div className="tag rating">
                  <Star className="icon yellow" />
                  <span>{movie.rating} Rating</span>
                </div>
                <div className="tag">
                  <Clock className="icon gray" />
                  <span>{movie.duration}</span>
                </div>
                <div className="tag">
                  <Calendar className="icon gray" />
                  <span>{movie.releaseDate}</span>
                </div>
              </div>

              <h1 className="movie-title">{movie.title}</h1>

              <div className="genre-tags">
                {movie.genre.map((g) => (
                  <span key={g} className="genre">
                    {g}
                  </span>
                ))}
              </div>

              <div className="movie-actions">
                <a href={movie.trailer} target="_blank" rel="noopener noreferrer" className="btn yellow">
                  <Play className="icon" />
                  Watch Trailer
                </a>
                <button className="btn gray">
                  <Heart className="icon" />
                  Add to Watchlist
                </button>
                <button className="icon-btn">
                  <Share2 className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="main-content">
        <div className="main-grid">
          <div className="left-content">
            <section className="section">
              <h2>Overview</h2>
              <p className="description">{movie.description}</p>
            </section>

            <section className="section">
              <h2>Awards & Recognition</h2>
              <div className="awards-grid">
                {movie.awards.map((award, index) => (
                  <div key={index} className="award-box">
                    <Award className="icon yellow" />
                    <span>{award}</span>
                  </div>
                ))}
                <div className="award-box">
                  <BarChart3 className="icon green" />
                  <span>Metacritic: {movie.metacriticScore}/100</span>
                </div>
                <div className="award-box">
                  <BarChart3 className="icon red" />
                  <span>Rotten Tomatoes: {movie.rottenTomatoesScore}%</span>
                </div>
              </div>
            </section>

            <section className="section">
              <h2>Top Cast</h2>
              <div className="cast-grid">
                {movie.cast.map((actor) => (
                  <Link key={actor.id} to={`/actor/${actor.id}`} className="cast-card">
                    <img src={actor.image} alt={actor.name} />
                    <div>
                      <h3>{actor.name}</h3>
                      <p className="role">{actor.role}</p>
                      <p className="bio">{actor.bio}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <div className="right-content">
            <div className="info-box">
              <h3>Movie Info</h3>
              <dl>
                <div>
                  <dt>Director</dt>
                  <dd>{movie.director}</dd>
                </div>
                <div>
                  <dt>Production Company</dt>
                  <dd>{movie.productionCompany}</dd>
                </div>
                <div>
                  <dt>Box Office</dt>
                  <dd><DollarSign className="icon green" /> {movie.boxOffice}</dd>
                </div>
                <div>
                  <dt>Language</dt>
                  <dd><Globe className="icon blue" /> {movie.language}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieDetails;

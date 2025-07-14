import { Award, Instagram, Star, Twitter } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import '../App.css';

const Actor = () => {
  const actors = [
    {
      id: 1,
      name: "Timothée Chalamet",
      birthDate: "December 27, 1995",
      birthPlace: "New York City, New York, USA",
      nationality: "American-French",
      height: "5' 10\" (1.78 m)",
      biography:
        "Timothée Hal Chalamet is an American actor. He has received various accolades, including nominations for an Academy Award, two Golden Globe Awards, and three BAFTA Film Awards. Born and raised in New York City, he began his career on the stage and in television productions, appearing in the drama series Homeland in 2012.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      coverImage:
        "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?auto=format&fit=crop&w=2000&q=80",
      awards: [
        {
          name: "Academy Award Nomination",
          year: 2018,
          category: "Best Actor",
          film: "Call Me by Your Name",
        },
        {
          name: "Golden Globe Nomination",
          year: 2018,
          category: "Best Actor - Drama",
          film: "Call Me by Your Name",
        },
        {
          name: "BAFTA Nomination",
          year: 2018,
          category: "Best Actor",
          film: "Call Me by Your Name",
        },
      ],
      socialMedia: {
        instagram: "https://instagram.com/tchalamet",
        twitter: "https://twitter.com/realchalamet",
        imdb: "https://www.imdb.com/name/nm3154303/",
      },
      knownFor: [
        {
          id: 1,
          title: "Dune: Part Two",
          role: "Paul Atreides",
          year: 2024,
          rating: 8.8,
          image:
            "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 2,
          title: "Wonka",
          role: "Willy Wonka",
          year: 2023,
          rating: 7.2,
          image:
            "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 3,
          title: "Dune",
          role: "Paul Atreides",
          year: 2021,
          rating: 8.0,
          image:
            "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
        },
      ],
      stats: {
        moviesCount: 18,
        totalAwards: 12,
        avgRating: 8.4,
        yearsActive: "2012-present",
      },
      upcomingProjects: [
        {
          title: "Bob Dylan Biopic",
          role: "Bob Dylan",
          status: "Pre-production",
          expectedRelease: "2025",
        },
      ],
    },
    {
      id: 2,
      name: "Zendaya",
      birthDate: "September 1, 1996",
      birthPlace: "Oakland, California, USA",
      nationality: "American",
      height: "5' 10\" (1.78 m)",
      biography:
        "Zendaya is an American actress and singer. She began her career as a child model and backup dancer before gaining prominence for her role as Rocky Blue on the Disney Channel sitcom Shake It Up. She has gone on to star in numerous acclaimed films and television series.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      coverImage:
        "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=2000&q=80",
      awards: [
        {
          name: "Emmy Award",
          year: 2020,
          category: "Outstanding Lead Actress",
          film: "Euphoria",
        },
        {
          name: "Emmy Award",
          year: 2022,
          category: "Outstanding Lead Actress",
          film: "Euphoria",
        },
      ],
      socialMedia: {
        instagram: "https://instagram.com/zendaya",
        twitter: "https://twitter.com/zendaya",
        imdb: "https://www.imdb.com/name/nm3918035/",
      },
      knownFor: [
        {
          id: 1,
          title: "Dune: Part Two",
          role: "Chani",
          year: 2024,
          rating: 8.8,
          image:
            "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 4,
          title: "Spider-Man: No Way Home",
          role: "MJ",
          year: 2021,
          rating: 8.2,
          image:
            "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80",
        },
      ],
      stats: {
        moviesCount: 15,
        totalAwards: 14,
        avgRating: 8.2,
        yearsActive: "2010-present",
      },
      upcomingProjects: [
        {
          title: "Challengers",
          role: "Tashi Donaldson",
          status: "Post-production",
          expectedRelease: "2024",
        },
      ],
    },
  ];

  const { id } = useParams();
  const actor = actors.find((m) => m.id === Number(id)) || actors[0];

  return (
    <div className="actor-container">
      <div className="actor-cover">
        <div
          className="actor-cover-bg"
          style={{ backgroundImage: `url(${actor.knownFor[0].image})` }}
        >
          <div className="actor-cover-gradient" />
        </div>
        <div className="actor-header">
          <div className="actor-info">
            <img src={actor.image} alt={actor.name} className="actor-img" />
            <div>
              <h1 className="actor-name">{actor.name}</h1>
              <div className="actor-stats">
                <div className="stat-item">
                  <Star className="icon yellow" />
                  <span>{actor.stats.avgRating} Average Rating</span>
                </div>
                <div className="stat-item">
                  <Award className="icon purple" />
                  <span>{actor.stats.totalAwards} Awards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="actor-grid">
        <div>
          <div className="actor-sidebar">
            <div className="card">
              <h2>Personal Info</h2>
              <dl>
                <div>
                  <dt>Born</dt>
                  <dd>{actor.birthDate}</dd>
                </div>
                <div>
                  <dt>Place of Birth</dt>
                  <dd>{actor.birthPlace}</dd>
                </div>
                <div>
                  <dt>Movies</dt>
                  <dd>{actor.stats.moviesCount} titles</dd>
                </div>
              </dl>
            </div>

            <div className="card">
              <h2>Social Media</h2>
              <div className="social-links">
                <a href={actor.socialMedia.instagram}>
                  <Instagram className="icon" style={{color:"white"}}/>
                </a>
                <a href={actor.socialMedia.twitter}>
                  <Twitter className="icon"  style={{color:"white" }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="actor-main">
          <section>
            <h2>Biography</h2>
            <p>{actor.biography}</p>
          </section>

          <section>
            <h2>Awards & Nominations</h2>
            {actor.awards.map((award, index) => (
              <div key={index} className="award-item">
                <Award className="icon yellow" />
                <div>
                  <span className="award-title">{award.name}</span>
                  <span className="separator">|</span>
                  <span>{award.year}</span>
                  <p>{award.category} - {award.film}</p>
                </div>
              </div>
            ))}
          </section>

          <section style={{background:"black"}}>
            <h2>Known For</h2>
            <div className="movie-grid">
              {actor.knownFor.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card">
                  <div className="movie-img-wrapper">
                    <img src={movie.image} alt={movie.title} className="movie-img" />
                    <div className="rating-badge">
                      <Star className="icon yellow small" />
                      <span>{movie.rating}</span>
                    </div>
                  </div>
                  <div className="movie-details">
                    <h3>{movie.title}</h3>
                    <p>as {movie.role}</p>
                    <p className="year">{movie.year}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Actor;

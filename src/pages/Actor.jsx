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
        {
          title: "A Complete Unknown",
          role: "Bob Dylan",
          status: "Filming",
          expectedRelease: "2024",
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
    <div className="actor-container" style={{ backgroundColor: "#121212", color: "#f5f5f5" }}>
      <div className="actor-cover">
        <div
          className="actor-cover-bg"
          style={{ 
            backgroundImage: `url(${actor.knownFor[0].image})`,
            height: "300px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative"
          }}
        >
          <div className="actor-cover-gradient" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom, rgba(18,18,18,0.3) 0%, rgba(18,18,18,0.8) 70%, rgba(18,18,18,1) 100%)" }} />
        </div>
        <div className="actor-header" style={{ padding: "0 2rem", marginTop: "-100px", position: "relative", zIndex: 2 }}>
          <div className="actor-info" style={{ display: "flex", alignItems: "flex-end", gap: "2rem" }}>
            <img src={actor.image} alt={actor.name} className="actor-img" style={{ width: "180px", height: "180px", borderRadius: "50%", objectFit: "cover", border: "4px solid #ffd700", boxShadow: "0 8px 16px rgba(0,0,0,0.4)" }} />
            <div>
              <h1 className="actor-name" 
              style={{
                background: "linear-gradient(to right, #ffd700, #f5f5f5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                fontSize: "2.5rem",
                fontWeight: "700",
                marginBottom: "0.5rem"
              }}>{actor.name}</h1>
              <div className="actor-stats" style={{ display: "flex", gap: "1.5rem", marginTop: "0.5rem" }}>
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
            <div className="card" style={{ backgroundColor: "#1a1a1a", borderRadius: "10px", padding: "1.5rem", marginBottom: "1.5rem", boxShadow: "0 4px 8px rgba(0,0,0,0.3)" }}>
              <h2 style={{
                color: "#ffd700",
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "1rem",
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}>Personal Info</h2>
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

            <div className="card" style={{ backgroundColor: "#1a1a1a", borderRadius: "10px", padding: "1.5rem", marginBottom: "1.5rem", boxShadow: "0 4px 8px rgba(0,0,0,0.3)" }}>
              <h2 style={{
                color: "#ffd700",
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "1rem",
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}>Social Media</h2>
              <div className="social-links" style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
                <a href={actor.socialMedia.instagram} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#333", transition: "transform 0.3s ease, background-color 0.3s ease" }} onMouseOver={(e) => {e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.backgroundColor = "#E1306C"}} onMouseOut={(e) => {e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.backgroundColor = "#333"}}>
                  <Instagram className="icon" style={{ color: "white" }} />
                </a>
                <a href={actor.socialMedia.twitter} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#333", transition: "transform 0.3s ease, background-color 0.3s ease" }} onMouseOver={(e) => {e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.backgroundColor = "#1DA1F2"}} onMouseOut={(e) => {e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.backgroundColor = "#333"}}>
                  <Twitter className="icon" style={{ color: "white" }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="actor-main">
          <section>
            <h2 style={{
              borderBottom: "2px solid #ffd700",
              paddingBottom: "0.5rem",
              display: "inline-block",
              color: "#ffd700",
              fontSize: "1.8rem",
              fontWeight: "600",
              marginBottom: "1rem"
            }}>Biography</h2>
            <p>{actor.biography}</p>
          </section>

          <section>
            <h2 style={{
              borderBottom: "2px solid #ffd700",
              paddingBottom: "0.5rem",
              display: "inline-block",
              color: "#ffd700",
              fontSize: "1.8rem",
              fontWeight: "600",
              marginBottom: "1rem"
            }}>Awards & Nominations</h2>
            {actor.awards.map((award, index) => (
              <div key={index} className="award-item" style={{ display: "flex", alignItems: "flex-start", gap: "1rem", backgroundColor: "rgba(255, 215, 0, 0.1)", padding: "1rem", borderRadius: "8px", marginBottom: "1rem", transition: "transform 0.3s ease", cursor: "pointer" }} onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"} onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                <Award className="icon yellow" style={{ color: "#ffd700", minWidth: "24px" }} />
                <div>
                  <span className="award-title" style={{ fontWeight: "700", fontSize: "1.1rem", color: "#ffd700" }}>{award.name}</span>
                  <span className="separator" style={{ margin: "0 0.5rem", color: "#888" }}>|</span>
                  <span style={{ fontWeight: "600" }}>{award.year}</span>
                  <p style={{ marginTop: "0.5rem", color: "#ccc", fontSize: "0.9rem" }}>{award.category} - {award.film}</p>
                </div>
              </div>
            ))}
          </section>

          <section style={{ background: "black" }}>
            <h2 style={{
              borderBottom: "2px solid #ffd700",
              paddingBottom: "0.5rem",
              display: "inline-block",
              color: "#ffd700",
              fontSize: "1.8rem",
              fontWeight: "600",
              marginBottom: "1rem"
            }}>Known For</h2>
            <div className="movie-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
              {actor.knownFor.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card" style={{ textDecoration: "none", color: "inherit", display: "block", backgroundColor: "#1a1a1a", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.3)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} onMouseOver={(e) => {e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.boxShadow = "0 10px 20px rgba(255,215,0,0.2)"}} onMouseOut={(e) => {e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)"}}>
                  <div className="movie-img-wrapper" style={{ position: "relative" }}>
                    <img src={movie.image} alt={movie.title} className="movie-img" style={{ width: "100%", height: "280px", objectFit: "cover" }} />
                    <div className="rating-badge" style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "rgba(0,0,0,0.7)", color: "#ffd700", padding: "0.4rem 0.7rem", borderRadius: "20px", display: "flex", alignItems: "center", gap: "0.3rem", fontWeight: "600" }}>
                      <Star className="icon yellow small" style={{ width: "16px", height: "16px", color: "#ffd700" }} />
                      <span>{movie.rating}</span>
                    </div>
                  </div>
                  <div className="movie-details" style={{ padding: "1rem" }}>
                    <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem", fontWeight: "600", color: "#ffd700" }}>{movie.title}</h3>
                    <p style={{ margin: "0 0 0.3rem 0", fontSize: "0.9rem", color: "#ccc" }}>as {movie.role}</p>
                    <p className="year" style={{ margin: "0", fontSize: "0.9rem", color: "#888" }}>{movie.year}</p>
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
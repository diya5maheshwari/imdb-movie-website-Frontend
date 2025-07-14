import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

import { Film, Search, X, Menu } from "lucide-react";

function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [ismenuopen, setIsmenuopen] = useState(false);
  const navigate = useNavigate();

  const navitem = [
    { label: "Movies", path: "./movies" },
    { label: "Top Rated", path: "./top-rated" },
    { label: 'Coming soon', path: "./Coming-soon" },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <nav className="nav">
      <div className="container">


        <Link to="/" className="logo" >
          <Film className="logo-icon" />
          <span className="logo-text" >Movie</span>
        </Link>

        <form>
          <Search className="search-icon" />
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder="Search Movie"
          />
        </form>

        <div className="nav-links">
          {navitem.map((item) => (
            <Link key={item.label} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="menu-container">
          <button className="menu-button" onClick={() => setIsmenuopen(!ismenuopen)}>
            {ismenuopen ? <X /> : <Menu />}
          </button>

          {ismenuopen && isMobile && (
            <div className="mobile-menu">
              <form>
                <Search />
                <input
                  type="text"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  value={searchQuery}
                  placeholder="Search Movie"
                />
              </form>

              <div>
                {navitem.map((item) => (
                  <Link key={item.label} to={item.path}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>


      </div>
    </nav>
  );
}

export default NavBar;

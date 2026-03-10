import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import movieData from "../../data";
import "./Home.css";

// Slider images
const films = [
  {
    img: "https://image.tmdb.org/t/p/w500/6kPZ4dMGCmNWcJzX2xR7bH38aM1.jpg",
    title: "Superman",
    year: 1978,
    genre: "Action, Sci-Fi",
  },
  {
    img: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    title: "Joker",
    year: 2019,
    genre: "Crime, Drama",
  },
  {
    img: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    title: "Avengers",
    year: 2012,
    genre: "Action, Adventure",
  },
];

const Home = () => {
  const [movies] = useState(movieData);
  const [current, setCurrent] = useState(0);
  const [search, setSearch] = useState("");

  // Slider interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % films.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Filter movies by search
  const filteredData = movies.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      {/* Slider Section */}
      <section className="slider-section">
        <div className="container slider-container">
          {films.map((film, index) => (
            <div
              key={index}
              className={`slide ${index === current ? "active" : ""}`}
            >
              <img src={film.img} alt={film.title} />
              <div className="caption">
                <h2>{film.title}</h2>
                <p>
                  {film.year} | {film.genre}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Search Section */}
      <section id="search">
        <div className="container home-cn">
          <input
            type="search"
            placeholder="Kinoni nomini yozing..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>Qidirish</button>

          <div className="search-result">
            {filteredData.map((movie) => (
              <div key={movie.id} className="movie-card">
                {/* TMDb image optimized to w200 + lazy loading */}
                <img
                  src={movie.image.replace("/w500/", "/w200/")}
                  alt={movie.title}
                  loading="lazy"
                />
                <h3>{movie.title}</h3>
                <Link to={`/movie/${movie.id}`}>Batafsil</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
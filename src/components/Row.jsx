import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const imagepath = `https://image.tmdb.org/t/p/original`;
const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURl, setTrailerURl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerURl) {
      setTrailerURl("");
    } else {
      movieTrailer(movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlPrams = new URLSearchParams(new URL(url).search);
          setTrailerURl(urlPrams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${imagepath}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerURl && <YouTube videoId={trailerURl} opts={opts} />}
    </div>
  );
};

export default Row;

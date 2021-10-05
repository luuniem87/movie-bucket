import React, { useState, useEffect, useCallback } from "react";
import Movie from "./Movie";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieList = (props) => {
  const { passMovieId } = props;

  const [error, setError] = useState(null);
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const fetchDisMoviesHandler = useCallback(async () => {
    try {
      const respDiscoverMovies = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
      );

      if (!respDiscoverMovies.ok) {
        throw new Error("something went wrong");
      }
      const discoverMovieData = await respDiscoverMovies.json();
      const transformedDiscoverMovies = discoverMovieData.results.map(
        (titleData) => {
          return {
            id: titleData.id,
            title: titleData.title,
            image: titleData.poster_path,
          };
        }
      );
      setDiscoverMovies(transformedDiscoverMovies);
      console.log(transformedDiscoverMovies);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchDisMoviesHandler();
  }, [fetchDisMoviesHandler]);

  return (
    <>
      <ul className="recommended__list">
        {!error &&
          discoverMovies.map((titleData) => (
            <Movie
              key={titleData.id}
              recTitle={titleData.title}
              recImage={titleData.image}
              onClick={() => passMovieId(titleData.id)}
              alt={titleData.name}
            ></Movie>
          ))}
      </ul>
    </>
  );
};

export default MovieList;

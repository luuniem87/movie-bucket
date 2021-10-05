import React from "react";
import "./Movie.scss";

const Movie = (props) => {
  const { recImage, onClick, alt } = props;

  return (
    <li className="recommended__item" onClick={onClick}>
      <img src={"https://image.tmdb.org/t/p/original/" + recImage} alt={alt} />
    </li>
  );
};

export default Movie;

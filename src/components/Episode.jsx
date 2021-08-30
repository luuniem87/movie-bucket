import React from "react";
import classes from "Episode.module.scss";

const Episode = (props) => {
  const {
    episode,
    episode__title,
    episode__number,
    episode__duration,
    episode__image,
    episode__titleWrap,
  } = classes;

  const { episodeTitle, episodeNumber, episodeDuration, episodeImage } = props;
  return (
    <>
      <li className={episode}>
        <div className={episode__titleWrap}>
          <div className={episode__title}>{episodeTitle}</div>
          <div className={episode__number}>{episodeNumber}</div>
        </div>
        <div className={episode__image}>
          {episodeImage}
          <div className={episode__duration}>{episodeDuration}</div>
        </div>
      </li>
    </>
  );
};

export default Episode;

import React, { useState, useCallback, useEffect } from "react";
import "./SeriesDetailsList.scss";
const API_KEY = process.env.REACT_APP_API_KEY;

const SeriesDetailsList = (props) => {
  const { tv_id } = props;
  const [tvVideo, setTvVideo] = useState([]);
  const [error, setError] = useState(null);
  const VideoURL = `https://api.themoviedb.org/3/tv/${tv_id}/videos?api_key=${API_KEY}`;

  console.log(tvVideo);
  return (
    <>
      <div>
        {!error && tvVideo.map((videoData) => <div>{videoData.key}</div>)}
      </div>
    </>
  );
};

export default SeriesDetailsList;

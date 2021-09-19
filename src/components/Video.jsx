import React, { useState, useCallback, useEffect } from "react";
import "./SeriesDetailsList.scss";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const SeriesDetailsList = (props) => {
  const { tv_id } = props;
  const [tvVideo, setTvVideo] = useState([]);

  async function fetchVideoHandler() {
    const videoURL = `https://api.themoviedb.org/3/tv/${tv_id}/videos?api_key=${API_KEY}`;

    const response = await fetch(videoURL);
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <div>
        {/* {tvVideo.map((videoData) => (
          <div>{videoData.key}</div>
        ))} */}
      </div>
    </>
  );
};

export default SeriesDetailsList;

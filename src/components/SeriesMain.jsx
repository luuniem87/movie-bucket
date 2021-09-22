import React, { useState } from "react";
import RecommendedList from "./RecommendedList";
import Video from "./Video";
import "./SeriesMain.scss";
const API_KEY = process.env.REACT_APP_API_KEY;

const SeriesMain = (props) => {
  const [seriesId, setSeriesId] = useState("");

  async function seriesHandler(titleId) {
    const videoURL = `https://api.themoviedb.org/3/tv/${titleId}/videos?api_key=${API_KEY}`;

    const response = await fetch(videoURL);
    const data = await response.json();
    const transformToVideo = data.results
      .filter(({ type }) => {
        if (type === "Trailer") return true;
      })
      .map((videoData) => {
        return {
          id: videoData.id,
          youTubeKey: videoData.key,
          official: videoData.official,
          trailerType: videoData.type,
        };
      });
    console.log(transformToVideo);
    setSeriesId(transformToVideo[0]);
  }

  return (
    <div div className="seriesMain-container">
      <Video tv_id={seriesId.youTubeKey} />
      <RecommendedList passSeriesId={seriesHandler} />
    </div>
  );
};

export default SeriesMain;

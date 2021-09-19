import React, { useState } from "react";
import RecommendedList from "./RecommendedList";
import Video from "./Video";
const API_KEY = process.env.REACT_APP_API_KEY;

const SeriesMain = (props) => {
  const [seriesId, setSeriesId] = useState("");

  async function seriesHandler(seriesId) {
    const videoURL = `https://api.themoviedb.org/3/tv/${seriesId}/videos?api_key=${API_KEY}`;

    const response = await fetch(videoURL);
    const data = await response.json();
    const transformToVideo = data.results.map((videoData) => {
      return {
        id: videoData.id,
        youTubeKey: videoData.key,
        official: videoData.official,
        trailerType: videoData.type,
      };
    });
    console.log(transformToVideo);
  }

  return (
    <>
      <Video tv_id={seriesId} />
      <RecommendedList
        //  passSeriesId={(seriesId) => setSeriesId(seriesId)}
        passSeriesId={seriesHandler}
      />
    </>
  );
};

export default SeriesMain;

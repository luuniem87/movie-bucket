import React, { useState } from "react";
import RecommendedList from "./RecommendedList";
import Video from "./Video";

const SeriesMain = (props) => {
  const [seriesId, setSeriesId] = useState("");
  console.log(seriesId);

  return (
    <>
      <Video tv_id={seriesId} />
      <RecommendedList passSeriesId={(seriesId) => setSeriesId(seriesId)} />
    </>
  );
};

export default SeriesMain;

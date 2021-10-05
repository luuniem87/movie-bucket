import React, { useState, useCallback, useEffect } from "react";
import "../components/Series/SeriesDetailsList.scss";
import "./Video.scss";

const SeriesDetailsList = (props) => {
  const { title_id } = props;

  return (
    <div div className="video-container">
      <iframe
        src={"https://www.youtube.com/embed/" + title_id}
        allowFullScreen
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default SeriesDetailsList;

import React, { useState, useCallback, useEffect } from "react";
import "./SeriesDetailsList.scss";
import "./Video.scss";
const API_KEY = process.env.REACT_APP_API_KEY;

const SeriesDetailsList = (props) => {
  const { tv_id } = props;

  return (
    <div div className="video-container">
      <iframe
        src={"https://www.youtube.com/embed/" + tv_id}
        allowFullScreen
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default SeriesDetailsList;

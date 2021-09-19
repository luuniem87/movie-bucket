import React, { useState, useCallback, useEffect } from "react";
import "./SeriesDetailsList.scss";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const SeriesDetailsList = (props) => {
  const { tv_id } = props;

  return (
    <>
      <iframe src={"https://www.youtube.com/embed/" + tv_id}></iframe>
    </>
  );
};

export default SeriesDetailsList;

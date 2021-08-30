import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const DISCOVER_TV = process.env.REACT_APP_DISCOVER_TV;

const SeriesMain = (props) => {
  const [error, setError] = useState(null);
  const [series, setSeries] = useState([]);
  // Make a request for a user with a given ID

  const fetchSeriesHandler = useCallback(async () => {
    try {
      const response = await fetch(`${DISCOVER_TV}${API_KEY}`);

      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      console.log(data);
      setSeries(data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchSeriesHandler();
  }, [fetchSeriesHandler]);

  return <div>test</div>;
};

export default SeriesMain;

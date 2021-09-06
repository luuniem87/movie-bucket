import React, { useState, useCallback, useEffect } from "react";
import RecommendedTitle from "./RecommendedTitle";
import "./RecommendedList.scss";

const API_KEY = process.env.REACT_APP_API_KEY;

const RecommendedList = (props) => {
  const { passSeriesId } = props;
  const [error, setError] = useState(null);
  const [recommendedSeries, setRecommendedSeries] = useState([]);

  const fetchRecSeriesHandler = useCallback(async () => {
    try {
      const respRecommendedTV = await fetch(
        `https://api.themoviedb.org/3/tv/1402/recommendations?api_key=${API_KEY}`
      );

      if (!respRecommendedTV.ok) {
        throw new Error("something went wrong");
      }
      const recData = await respRecommendedTV.json();
      const transformedRecSeries = recData.results.map((titleData) => {
        return {
          id: titleData.id,
          name: titleData.name,
          image: titleData.poster_path,
        };
      });
      setRecommendedSeries(transformedRecSeries);
      console.log(recommendedSeries);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchRecSeriesHandler();
  }, [fetchRecSeriesHandler]);

  return (
    <>
      <h3>Recommended for you</h3>
      <ul className="recommended__list">
        {!error &&
          recommendedSeries.map((titleData) => (
            <RecommendedTitle
              key={titleData.id}
              recTitle={titleData.name}
              recImage={titleData.image}
              onClick={() => passSeriesId(titleData.id)}
              alt={titleData.name}
            ></RecommendedTitle>
          ))}
      </ul>
    </>
  );
};

export default RecommendedList;

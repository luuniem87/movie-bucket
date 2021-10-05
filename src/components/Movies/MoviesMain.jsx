import React from "react";
import Video from "../Video";
import MovieList from "./MovieList";

const MoviesMain = () => {
  const [movieId, setMovieId] = useState("");

  async function moviesHandler(titleId) {
    const videoURL = `https://api.themoviedb.org/3/movie/${titleId}/videos?api_key=${API_KEY}`;

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
    setMovieId(transformToVideo[0]);
  }

  return (
    <div div className="moviesMain-container">
      <Video title_id={movieId.youTubeKey} />
      <MovieList passMovieId={moviesHandler} />
    </div>
  );
};

export default MoviesMain;

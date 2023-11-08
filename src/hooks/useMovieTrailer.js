import { useEffect } from "react";
import { API_OPTIONS } from "../utills/constants";
import { useDispatch} from "react-redux";
import { addNowPlayingVideos } from "../utills/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  
  const getMovieVideos = async () => {
    console.log(movieId,'movielkjr')
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json, "videos");
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer,'hjhjhh');
    dispatch(addNowPlayingVideos(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;

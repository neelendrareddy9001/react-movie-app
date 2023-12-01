import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/Movies/movieSlice";
import { APIKEY } from "../../common/apis/MovieApiKeys";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    const moviesText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKEY}&s=${moviesText}&type=movie`)
        .catch((err) => {
          console.log("Err", err);
        });

      console.log("The response from API", response);
      dispatch(fetchAsyncMovies(movieText));
      dispatch(fetchAsyncShows(showText));
    };
    fetchMovies();
  });

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

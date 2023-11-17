import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import { addMovie } from "../../features/Movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  useEffect(() => {
    const fetchMovies = async () => {};
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

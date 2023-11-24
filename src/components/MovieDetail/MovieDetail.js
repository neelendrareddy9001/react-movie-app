import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
} from "../../features/Movies/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{data.title}</div>
        <div className="movie-raring">
          <span>
            IMDB rating <i className="fa fa-star"></i>
            {data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className="fa fa-thumbs-up"></i>
            {data.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa film"></i>
            {data.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calender"></i>
            {data.Year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

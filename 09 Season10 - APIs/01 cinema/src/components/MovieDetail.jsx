import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const getMovie = async () => {
    const res = await fetch(`http://localhost:9000/movies/${movieId}`);
    const data = await res.json();
    setMovie(data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movie-detail container">
      <div className="detail-body">
        <div>
          <h2 className="card-title">
            {movie.title}
            <span className="release-year"> {movie.release_year}</span>
          </h2>
          <div className="detail-description">
            <p className="card-description">{movie.description}</p>
          </div>
        </div>
        <div className="images">
          <img className="detail-img" src={movie.image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;

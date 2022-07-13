import { useEffect, useState } from 'react';
import { useParams, Link, useLocation, Outlet, Navigate } from 'react-router-dom';
import { FcUpLeft } from "react-icons/fc";
import toast, { Toaster } from 'react-hot-toast';
import api from 'service/MovieApi';
import Loader from 'components/Loader/Loader';
import s from "./MovieDetails.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const FetchDetalisMovie = async () => {
      setLoading(true);
      try {
        const dataMovie = await api.getMovieById(movieId);
        setMovieInfo(dataMovie);
      } catch (error) {
        setError(error.message);
        toast.error(`Page not found`);
      } finally {
        setLoading(false);
      }
    };
  FetchDetalisMovie();
  }, [movieId]);

const backToHome = location?.state?.from ?? "/";

  return (
    <>
    {error && <Navigate to="/" />}
      <Link to={backToHome}>
        <button type="button"
        className={s.buttonBack}>
          <FcUpLeft /> Go back
        </button>
      </Link>
      {loading && <Loader />}
      {movieInfo && (
        <div className={s.movieDetalis}>
          <img
            width="300px"
            src={'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path}
            alt={movieInfo.original_title}
          />
          <div className={s.infoContainer}>
            <h1>
              {movieInfo.title} ({movieInfo.release_date.slice(0, 4)})
            </h1>
            <p>User score: {movieInfo.vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <h2>Genres</h2>
            <ul className={s.list}>
              {movieInfo.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <hr />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: backToHome}}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backToHome}}>Reviews</Link>
          </li>
        </ul>
        <hr />
       <Outlet />
        <Toaster />
      </div>
    </>
  );
};

export default MovieDetailsPage;
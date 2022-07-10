import { BsSearch } from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.css';
import s from "../MoviesPage/MoviesPage.module.css";
import MoviesList from "components/MoviesList/MoviesList";
import Loader from "components/Loader/Loader";
import api from "service/MovieApi";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";


const MoviesPage = () => {
    const [searchFilms, setSearchFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams({});
    const queryMovie = searchParams.get('query');
  
    const handleSubmit = event => {
      event.preventDefault();
      setSearchParams({ query: event.target.elements.query.value.toLowerCase() });
    };
  
    useEffect(() => {
      if (queryMovie) {
        const onSearchMovie = async () => {
          setLoading(true);
          try {
            const searchMovie = await api.getMovieByQuery(queryMovie);
            setSearchFilms(searchMovie);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        };
        onSearchMovie();
      }
    }, [queryMovie]);
  
    return (
      <section>
        <form onSubmit={handleSubmit} className={s.form}>
          <input type="text" name="query" className={s.input} autoFocus />
          <button type="submit" className={s.searchButton}>
          <span className={s.buttonLabel}>
            <BsSearch />
          </span>
        </button>
        </form>
        {loading && <Loader />}
        {searchFilms && <MoviesList films={searchFilms} />}
      </section>
    );
  };
  
  export default MoviesPage;
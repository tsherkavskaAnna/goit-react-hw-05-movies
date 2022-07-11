import { BsSearch } from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.css';
import s from "../MoviesPage/MoviesPage.module.css";
import MoviesList from "components/MoviesList/MoviesList";
import Loader from "components/Loader/Loader";
import api from "service/MovieApi";
import { useState, useEffect } from "react";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import toast from 'react-hot-toast';


const MoviesPage = () => {
    const [searchFilms, setSearchFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams({});
    const queryMovie = searchParams.get('query');

    const location = useLocation()
  
    const handleSubmit = event => {
      event.preventDefault();
      setSearchParams({ query: event.target.elements.query.value.toLowerCase().trim() });
    };

  
    useEffect(() => {
      if (!queryMovie) return ;
      {
        const onSearchMovie = async () => {
          setLoading(true);
          try {
            const searchMovie = await api.getMovieByQuery(queryMovie);
            setSearchFilms(searchMovie);
          } catch (error) {
            toast.error(`The film you're lookink for can't be found`);
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
        <Link to={location?.state?.from ?? '/movie'}></Link>
        {loading && <Loader />}
        {searchFilms && <MoviesList films={searchFilms} />}
      </section>
    );
  };
  
  export default MoviesPage;
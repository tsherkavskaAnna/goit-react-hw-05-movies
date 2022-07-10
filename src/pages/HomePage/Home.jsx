import api from "service/MovieApi";
import s from "./Home.module.css"
import { useState, useEffect } from "react";
import Loader from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";

const HomePage = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);
   
useEffect(() => {
    const FetchTrendingMovie = async () => {
        setLoading(true);
        try {
            const { results } = await api.getTrendingMovie();
            setFilms(results);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    FetchTrendingMovie()
}, []);

return (
  <section>
    <h1 className={s.title}>Trending today</h1>
    {loading && <Loader />}
    {films && <MoviesList films={films}/>}
  </section>
)
};

export default HomePage;
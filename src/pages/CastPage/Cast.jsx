import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'service/MovieApi';
import s from "./CastPage.module.css";


export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  
  useEffect(() => {
    api.getMovieCast(movieId)
    .then(setCast)
  }, [movieId]);

 
  
  return (
    <div>

       <ul className={s.list}>
      {cast && cast.map(item => (
          <li key={item.id} className={s.item}>
            <img
              className={s.image}
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w300${item.profile_path}`
                  : 'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'
              }
              alt={item.name}
              width="100"
              height="150"
            />
            <h2>{item.name}</h2>
          </li>
          ))}
    </ul>
    </div>
  );
}
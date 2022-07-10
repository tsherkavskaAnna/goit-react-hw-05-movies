import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'service/MovieApi';
import s from "./Review.module.css";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.getMovieReview(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
    {reviews.length !== 0 ? (
      <ul className={s.reviews}>
        {reviews.map(review => (
          <li key={review.id} className={s.item}>
            <h2 className={s.author}>Author: {review.author}</h2>
            <p className={s.content}>{review.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p className={s.noReviews}>We don't have reviews for this movie</p>
    )}
  </>
  );
}
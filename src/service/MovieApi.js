import axios from 'axios';

const API_KEY = 'ff8c1bd9b42b07cf6632c931dd788828';
const BASE_URL = `https://api.themoviedb.org/3/`;

const getTrendingMovie = async () => {
  const response = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
  const { data } = await axios.get(response);
  return data;
};

const getMovieById = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};

const getMovieCast = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
};

const getMovieReview = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
};

const getMovieByQuery = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return response.data.results;
};

const api = {
  getTrendingMovie,
  getMovieById,
  getMovieByQuery,
  getMovieCast,
  getMovieReview,
};

export default api;

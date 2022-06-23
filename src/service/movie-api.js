import axios from 'axios';
//import PropTypes from 'prop-types';

const API_KEY = 'ff8c1bd9b42b07cf6632c931dd788828';
const BASE_URL = `https://api.themoviedb.org/3/`;

export const getMovie = async data => {
  const result = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  const { hits } = result.data;
  return { hits };
};

import axios from 'axios';
//import PropTypes from 'prop-types';

const API_KEY = 'ff8c1bd9b42b07cf6632c931dd788828';
const BASE_URL = `https://api.themoviedb.org/3/`;

const movieFetch = async () => {
  try {
    const url = `${BASE_URL}trending/all/day?api_key=${API_KEY}&page=12`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('Oops, an error');
  }
};

export default movieFetch;

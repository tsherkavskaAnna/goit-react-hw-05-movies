import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '26979383-64bf469f69381b7a5cedcba95';
const BASE_URL = `https://pixabay.com/api/`;
const param = `image_type=photo&orientation=horizontal&per_page=12`;

export const getImages = async (query, page) => {
  const result = await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&${param}`
  );
  const { hits } = result.data;
  return { hits };
};

getImages.PropTypes = {
  query: PropTypes.string,
  page: PropTypes.number,
};

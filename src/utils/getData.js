import axios from 'axios';

const URL = 'https://moive-database-yansen.herokuapp.com/api/v1/movies/';

export const getMovies = (page, keyword) => axios.get(`${URL}?page=${page}&keyword=${keyword}`)
  .then((res) => res.data.data);

export const getDetail = (id) => axios.get(`${URL}/${id}`)
  .then((res) => res.data.data);

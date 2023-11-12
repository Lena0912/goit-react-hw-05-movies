import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGM3YjAyN2Y1Y2RlYmQ5NzdkNGEyY2IzZWNkZGMzZCIsInN1YiI6IjY1NTAxODRmNDFhNTYxMzM2ODg3YzZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrMpWrA6-nEWZDnkSaCWEpkpue369ZAoTOFfIlhHrjo';
axios.defaults.params = {
  language: 'en-US',
};

export const fetchServiceMovies = async () => {
  const response = await axios.get('/trending/movie/day');
  return response.data;
};

export const fetchServiceSearchMovie = async searchValue => {
  const response = await axios.get(`/search/movie?query=${searchValue}`);
  return response.data;
};

export const fetchServiceMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

export const fetchServiceMovieCredits = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data;
};

export const fetchServiceMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data;
};

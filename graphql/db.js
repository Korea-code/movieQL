import fetch from "node-fetch";

//https://yts.mx/api

const API_URL_LIST = "https://yts.mx/api/v2/list_movies.json";
const API_URL_DETAIL = "https://yts.mx/api/v2/movie_details.json";
const API_URL_SUGGESTIONS = "https://yts.mx/api/v2/movie_suggestions.json";

//https://www.npmjs.com/package/node-fetch
export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL_LIST;
  if (limit > 0 || rating > 0) REQUEST_URL += `?`;
  if (limit > 0) REQUEST_URL += `limit=${limit}`;
  if (rating > 0) {
    if (limit > 0) REQUEST_URL += `&`;
    REQUEST_URL += `minimum_rating=${rating}`;
  }
  console.log(REQUEST_URL);
  return fetch(`${REQUEST_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
};

export const getMovie = id =>
  fetch(`${API_URL_DETAIL}?movie_id=${id}`)
    .then(res => res.json())
    .then(json => json.data.movie);

export const getSuggestions = id =>
  fetch(`${API_URL_SUGGESTIONS}?movie_id=${id}`)
    .then(res => res.json())
    .then(json => json.data.movies);

export const logoURL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png";

const API_KEY = "28d9f42df4d688cb661ad6ec2b53b693";

export const POPULAR_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;

export const UPCOMING_API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`;

export const TOPRATED_API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`;

export const NOWPLAYING_API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`;

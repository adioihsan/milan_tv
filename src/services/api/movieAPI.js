import mdbAxios from "./config/mdbAxios";
const movieAPI = {
  fetchAll: (pageNumber) => mdbAxios.get("/discover/movie?&page=" + pageNumber),
  fetchByGenre: ({ genreId, pageNumber }) =>
    mdbAxios.get(
      "/discover/movie?with_genres=" + genreId + "&page=" + pageNumber
    ),
  fetchPopularMovies: () => mdbAxios.get("/movie/popular"),
  fetchByQuery: ({ query, pageNumber }) =>
    mdbAxios.get("/search/movie?query=" + query + "&page=" + pageNumber),
  fetchById: (movieId) => mdbAxios.get("/movie/" + movieId),
  fetchMovieCredits: (movieId) =>
    mdbAxios.get("/movie/" + movieId + "/credits"),
};
export default movieAPI;

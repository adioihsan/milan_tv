import { configureStore } from "@reduxjs/toolkit";
import movieList from "./reducers/movieList";
import genreList from "./reducers/genreList";
import moviePopular from "./reducers/moviePopular";
import movieDetail from "./reducers/movieDetail";
import movieCredits from "./reducers/movieCredits";
const reducer = {
  movieList,
  genreList,
  moviePopular,
  movieDetail,
  movieCredits,
};
const ReduxStore = configureStore({ reducer });

export default ReduxStore;

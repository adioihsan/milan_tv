import { createSlice } from "@reduxjs/toolkit";
import {
  getAllMovies,
  getMoviesByGenre,
  getMoviesByQuery,
} from "../actions/movie";
const initialState = {
  movies: [],
  page: 0,
  totalPages: 0,
  totalResults: 0,
  pending: false,
  error: false,
};
const movieListSlice = createSlice({
  name: "movieList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMoviesByGenre.fulfilled, (state, action) => {
      state.movies = action.payload.results;
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.totalResults = action.payload.total_results;
      state.pending = false;
      state.error = false;
    });
    builder.addCase(getMoviesByGenre.pending, (state, aciton) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(getMoviesByGenre.rejected, (state, action) => {
      state.pending = false;
      state.error = true;
    });
    //by query
    builder.addCase(getMoviesByQuery.fulfilled, (state, action) => {
      state.movies = action.payload.results;
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.totalResults = action.payload.total_results;
      state.pending = false;
      state.error = false;
    });
    builder.addCase(getMoviesByQuery.pending, (state, aciton) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(getMoviesByQuery.rejected, (state, action) => {
      state.pending = false;
      state.error = true;
    });
    // all movies
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.movies = action.payload.results;
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.totalResults = action.payload.total_results;
      state.pending = false;
      state.error = false;
    });
    builder.addCase(getAllMovies.pending, (state, aciton) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(getAllMovies.rejected, (state, action) => {
      state.pending = false;
      state.error = true;
    });
  },
});
export default movieListSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getPopularMovies } from "../actions/movie";
const initialState = {
  movies: [],
  page: 0,
  totalPages: 0,
  totalResults: 0,
  pending: false,
  error: false,
};
const moviePopularSlice = createSlice({
  name: "movieList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      state.movies = action.payload.results;
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.totalResults = action.payload.total_results;
      state.pending = false;
      state.error = false;
    });
    builder.addCase(getPopularMovies.pending, (state, aciton) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(getPopularMovies.rejected, (state, action) => {
      state.pending = false;
      state.error = true;
    });
  },
});
export default moviePopularSlice.reducer;

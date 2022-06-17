import { createSlice } from "@reduxjs/toolkit";
import { getMovieById } from "../actions/movie";

const initialState = {
  movie: null,
  pending: false,
  error: false,
};

const movieDetailSclice = createSlice({
  name: "movieDetail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMovieById.fulfilled, (state, action) => {
      state.movie = action.payload;
      state.pending = false;
      state.error = false;
    });
    builder.addCase(getMovieById.pending, (state, action) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(getMovieById, (state, action) => {
      state.pending = false;
      state.error = true;
    });
  },
});
export default movieDetailSclice.reducer;

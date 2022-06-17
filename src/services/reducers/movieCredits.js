import { createSlice } from "@reduxjs/toolkit";
import { getMovieCredits } from "../actions/movie";

const initialState = {
  credits: null,
  pending: false,
  error: false,
};

const movieCreditsSlice = createSlice({
  name: "movieCredits",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMovieCredits.fulfilled, (state, action) => {
      state.credits = action.payload.cast;
      state.pending = false;
      state.error = false;
    });
    builder.addCase(getMovieCredits.pending, (state, action) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(getMovieCredits.rejected, (state, action) => {
      state.pending = false;
      state.error = true;
    });
  },
});
export default movieCreditsSlice.reducer;

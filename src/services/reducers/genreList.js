import { createSlice } from "@reduxjs/toolkit";
import { getAllGenre } from "../actions/genre";
const initialState = {
  genres: [],
  pending: false,
  error: false,
};
const genreListSlice = createSlice({
  name: "genreList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllGenre.fulfilled, (state, action) => {
      state.genres = action.payload.genres;
      state.pending = false;
      state.error = false;
    });
    builder.addCase(getAllGenre.pending, (state, aciton) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(getAllGenre.rejected, (state, action) => {
      state.pending = false;
      state.error = true;
    });
  },
});
export default genreListSlice.reducer;

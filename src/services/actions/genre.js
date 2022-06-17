import { createAsyncThunk } from "@reduxjs/toolkit";
import genreAPI from "../api/genreAPI";
export const getAllGenre = createAsyncThunk("movie/genre", async () => {
  const response = await genreAPI.fetchAll();
  return response.data;
});

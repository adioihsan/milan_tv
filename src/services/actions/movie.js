import { createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../api/movieAPI";
export const getMoviesByGenre = createAsyncThunk(
  "movie/list/genre",
  async (genreId, pageNumber) => {
    const response = await movieAPI.fetchByGenre(genreId, pageNumber);
    return response.data;
  }
);

export const getAllMovies = createAsyncThunk(
  "movie/list/all",
  async (pageNumber) => {
    const response = await movieAPI.fetchAll(pageNumber);
    return response.data;
  }
);
export const getPopularMovies = createAsyncThunk(
  "movie/list/popular",
  async () => {
    const response = await movieAPI.fetchPopularMovies();
    return response.data;
  }
);

export const getMoviesByQuery = createAsyncThunk(
  "movie/list/search",
  async (query, pageNumber) => {
    const response = await movieAPI.fetchByQuery(query, pageNumber);
    return response.data;
  }
);

export const getMovieById = createAsyncThunk(
  "movie/detail",
  async (movieId) => {
    const response = await movieAPI.fetchById(movieId);
    return response.data;
  }
);

export const getMovieCredits = createAsyncThunk(
  "/movie/credits",
  async (movieId) => {
    const response = await movieAPI.fetchMovieCredits(movieId);
    return response.data;
  }
);

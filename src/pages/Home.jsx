import { Typography, Box, PaginationItem, LinearProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/card/MovieCard";
import { MovieCardLoad } from "../components/card/MovieCard";
import JumboSlider from "../components/jumbotron/JumboSlider";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  getAllMovies,
  getMoviesByGenre,
  getMoviesByQuery,
  getPopularMovies,
} from "../services/actions/movie";
import { getAllGenre } from "../services/actions/genre";
import GenreNav from "../components/navigation/GenreNav";
function Home(props) {
  const {
    movies,
    pending: moviesPending,
    error: moviesError,
    page,
    totalPages,
    totalResults,
  } = useSelector((state) => state.movieList);

  const {
    genres,
    pending: genresPending,
    error: genresError,
  } = useSelector((state) => state.genreList);

  const {
    movies: moviesPopular,
    pending: popularPending,
    error: popularError,
  } = useSelector((state) => state.moviePopular);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  //actions
  const changeGenre = (id) => {
    if (id === 0) navigate("/");
    else navigate("/genre/" + id + "/1");
  };
  const changePage = (event, value, state) => {
    if (params.genreId) navigate("/genre/" + params.genreId + "/" + value);
    else if (params.query) navigate("/search/" + params.query + "/" + value);
    else navigate("/" + value);
  };

  // helper
  const getGenresName = (genreIds) => {
    let genresName = [];
    genreIds.forEach((id) => {
      const genre = genres.find((genre) => genre.id === id);
      if (genre) genresName.push(genre.name);
    });
    return genresName;
  };

  useEffect(() => {
    if (params.genreId) {
      dispatch(
        getMoviesByGenre({
          genreId: params.genreId,
          pageNumber: params.pageNumber || 1,
        })
      );
    } else if (params.query) {
      dispatch(
        getMoviesByQuery({
          query: params.query,
          pageNumber: params.pageNumber || 1,
        })
      );
    } else {
      dispatch(getAllMovies(params.pageNumber || 1));
    }
  }, [params.genreId, params.pageNumber, params.query]);

  // render components

  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getAllGenre());
  }, []);
  return (
    <>
      {moviesPending && <LinearProgress />}
      <Stack spacing={2}>
        {!popularPending && !popularError && (
          <JumboSlider data={moviesPopular} />
        )}
        {!params.query && (
          <Box id="categories">
            <Typography
              variant="h5"
              fontWeight="bold"
              style={{ color: "gray" }}
            >
              Browse by category
            </Typography>
            {genresPending && <Typography>Loading genres...</Typography>}
            {genresError && (
              <Typography>Owh,There is something error</Typography>
            )}
            {!genresPending && !genresError && (
              <GenreNav data={genres} cb={{ changeGenre }} />
            )}
          </Box>
        )}
        {params.query && (
          <Box id="searchResult">
            <Typography
              variant="h5"
              fontWeight="bold"
              style={{ color: "gray" }}
            >
              Search Result for '{params.query}' ({totalResults})
            </Typography>
          </Box>
        )}
        <Box id="movies">
          {moviesPending && (
            <Grid container spacing={2}>
              {Array(12)
                .fill(0)
                .map((data, index) => (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    key={"movieSkeleteon" + index}
                  >
                    <MovieCardLoad key={"cardSkelton" + index} />
                  </Grid>
                ))}
            </Grid>
          )}

          {moviesError && (
            <Typography variant="h4" align="center">
              Owh,There is something wrong :(
            </Typography>
          )}
          {!moviesPending && !moviesError && (
            <Grid container spacing={2}>
              {movies.map((movie) => {
                let genresName = getGenresName(movie.genre_ids);
                return (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2}
                    key={"movie" + movie.id}
                  >
                    <Link
                      to={"/movie/" + movie.id}
                      style={{ textDecoration: "unset", color: "unset" }}
                    >
                      <MovieCard movie={movie} genres={genresName} />
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Box>
        <Box id="pagination" sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            count={totalPages > 500 ? 500 : totalPages}
            shape="rounded"
            color="primary"
            size="large"
            page={page}
            boundaryCount={2}
            siblingCount={1}
            onChange={changePage}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{ fontSize: "clamp(0.5rem,calc(1rem + 1vw),1.5rem)" }}
              />
            )}
          />
        </Box>
      </Stack>
    </>
  );
}

export default Home;

import { Box, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CharacterCard from "../components/card/CharacterCard";
import JumboSlider from "../components/jumbotron/JumboSlider";
import MovieDetailNav from "../components/navigation/MovieDetailNav";
import { getMovieById, getMovieCredits } from "../services/actions/movie";

function MovieDetail(props) {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    movie,
    pending: moviePending,
    error: movieError,
  } = useSelector((state) => state.movieDetail);
  const {
    credits,
    pending: creditsPending,
    error: creditsError,
  } = useSelector((state) => state.movieCredits);

  // helper function
  const changeNav = (navName) => {
    navigate("/movie/" + params.movieId + "/" + navName);
  };

  // component render
  const renderOverview = () => (
    <>
      <Box id="synopsis">
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Typography variant="h5" fontWeight="bold">
            Synopsis
          </Typography>
          <Box
            sx={{ backgroundColor: "#cdcdcd", flexGrow: 1, height: "3px" }}
          />
        </Box>
        <Typography sx={{ py: "0.5rem" }}>{movie.overview}</Typography>
      </Box>
      <Box id="movieInfo">
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Typography variant="h5" fontWeight="bold">
            Movie Info
          </Typography>
          <Box
            sx={{ backgroundColor: "#cdcdcd", flexGrow: 1, height: "3px" }}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            py: "0.5rem",
            gap: "0.5rem",
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            Original Title
          </Typography>
          <Typography variant="subtitle1">: {movie.original_title}</Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            Genres
          </Typography>
          <Typography variant="subtitle1">
            : {movie.genres.map((genre) => genre.name).toString()}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            Release Date
          </Typography>
          <Typography variant="subtitle1">: {movie.release_date}</Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            Production Companies
          </Typography>
          <Typography variant="subtitle1">
            : {movie.production_companies.map((po) => po.name).toString()}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            Languages
          </Typography>
          <Typography variant="subtitle1">
            :{" "}
            {movie.spoken_languages.map((lang) => lang.english_name).toString()}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            Budget
          </Typography>
          <Typography variant="subtitle1">
            :{" "}
            {movie.budget.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            Revenue
          </Typography>
          <Typography variant="subtitle1">
            :{" "}
            {movie.revenue.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
        </Box>
      </Box>
    </>
  );
  const renderCharacters = () => (
    <Grid container spacing={2}>
      {credits.map((credit, index) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={"movieCredit" + index}>
          <CharacterCard credit={credit} />
        </Grid>
      ))}
    </Grid>
  );
  useEffect(() => {
    dispatch(getMovieById(params.movieId));
  }, [params.movieId]);
  useEffect(() => {
    dispatch(getMovieCredits(params.movieId));
  }, [params.nav]);
  if (moviePending) return <LinearProgress />;
  if (movieError || creditsError)
    return <Typography>Sorry , There is somethig wrong :(</Typography>;
  if (movie && credits)
    return (
      <>
        {creditsPending && <LinearProgress />}
        <Stack spacing={2}>
          <JumboSlider data={Array(1).fill(movie)} />
          <MovieDetailNav cb={{ changeNav }} />
          {!params.nav && renderOverview()}
          {params.nav === "overview" && renderOverview()}
          {params.nav === "characters" && renderCharacters()}
        </Stack>
      </>
    );
}

export default MovieDetail;

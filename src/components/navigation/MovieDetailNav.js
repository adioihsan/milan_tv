import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function MovieDetailNav({ cb }) {
  const activeStyle = {
    color: "white",
    backgroundColor: "#EB507F",
    padding: "0rem 2rem",
    borderRadius: "50px",
  };
  const params = useParams();
  useEffect(() => {}, [params.movieId]);
  return (
    <Box
      sx={{ my: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}
      color="primary"
    >
      <Typography
        fontWeight="bold"
        variant="h6"
        style={
          params.nav === "overview" || !params.nav
            ? activeStyle
            : { cursor: "pointer" }
        }
        onClick={() => cb.changeNav("overview")}
      >
        Overview
      </Typography>
      <Typography
        fontWeight="bold"
        variant="h6"
        style={
          params.nav === "characters" ? activeStyle : { cursor: "pointer" }
        }
        onClick={() => cb.changeNav("characters")}
      >
        Characters
      </Typography>
      <Typography
        fontWeight="bold"
        variant="h6"
        style={params.nav === "reviews" ? activeStyle : { cursor: "pointer" }}
        onClick={() => cb.changeNav("reviews")}
      >
        Reviews
      </Typography>
    </Box>
  );
}

export default MovieDetailNav;

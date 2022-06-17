import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function GenreNav({ data, cb }) {
  const activeStyle = {
    color: "white",
    backgroundColor: "#EB507F",
    padding: "0rem 2rem",
    borderRadius: "50px",
  };
  const params = useParams();
  useEffect(() => {}, [params.genreId]);
  return (
    <Box
      sx={{ my: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}
      color="primary"
    >
      <Typography
        style={
          params.genreId ? { color: "gray", cursor: "pointer" } : activeStyle
        }
        fontWeight="bold"
        variant="h6"
        onClick={() => {
          cb.changeGenre(0);
        }}
      >
        All
      </Typography>
      {data.map((genre) => (
        <Typography
          style={
            params.genreId == genre.id
              ? activeStyle
              : { color: "gray", cursor: "pointer" }
          }
          fontWeight="bold"
          variant="h6"
          onClick={() => {
            cb.changeGenre(genre.id);
          }}
          key={"genre" + genre.id}
        >
          {genre.name}
        </Typography>
      ))}
    </Box>
  );
}

export default GenreNav;

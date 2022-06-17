import { CardMedia, Box, Typography } from "@mui/material";
import ContentLoader from "react-content-loader";
import React from "react";
import movieplaceholder from "../../assets/images/movieplaceholder.png";

function MovieCard({ movie, genres }) {
  return (
    <Box sx={{ backgroundColor: "transparent", borderRadius: "10px" }}>
      <CardMedia
        component="img"
        height="311"
        image={"https://image.tmdb.org/t/p/w200/" + movie.poster_path}
        alt={movie.original_title}
        sx={{
          borderRadius: "10px",
          marginBottom: "0.5rem",
          background: `url(${movieplaceholder})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <Box>
        <Typography sx={{ fontSize: "1.2rem" }} fontWeight="bold">
          {movie.original_title.length > 15
            ? movie.title.substr(0, 15) + "..."
            : movie.title}
        </Typography>
        <Typography variant="subtitle1" fontWeight="medium">
          {genres.toString().substr(0, 20) + "..."}
        </Typography>
      </Box>
    </Box>
  );
}

export const MovieCardLoad = (props) => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={350}
      viewBox="0 0 100% 350"
      backgroundColor="#ffffff"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="25" y="454" rx="5" ry="5" width="100%" height="37" />
      <rect x="5" y="8" rx="0" ry="0" width="100%" height="277" />
      <rect x="5" y="291" rx="0" ry="0" width="100%" height="21" />
      <rect x="5" y="317" rx="0" ry="0" width="100%" height="16" />
    </ContentLoader>
  );
};

export default MovieCard;

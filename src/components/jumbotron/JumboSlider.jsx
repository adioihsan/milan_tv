import React, { lazy } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Button, Typography } from "@mui/material";
import getStarsCmp from "../../services/util/getStarsCmp";
function JumboSlider({ data }) {
  const legendStyle = {
    root: {
      position: "absolute",
      top: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.7)",
      color: "white",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "1rem",
      padding: "2rem",
    },
  };
  return (
    <Box>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        swipeable={false}
      >
        {data.slice(0, 3).map((movie) => (
          <Box key={"slide" + movie.id}>
            <img
              src={"https://image.tmdb.org/t/p/w780" + movie.poster_path}
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <Box style={legendStyle.root}>
              <Typography variant="h4" fontWeight="bold">
                {movie.title}
              </Typography>
              <Box sx={{ display: "flex", gap: "0.5rem" }}>
                <img
                  src={getStarsCmp(movie.vote_average / 2)}
                  alt="rating"
                  style={{
                    width: "auto",
                    height: "calc(1.2rem + 0.5vw)",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
                <Typography variant="h6" fontWeight="bold">
                  {movie.vote_count} reviews
                </Typography>
              </Box>
              <Typography variant="body1">
                {movie.overview.length > 270
                  ? movie.overview.substr(0, 270) + "..."
                  : movie.overview}
              </Typography>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Button variant="contained" color="primary" size="large">
                  Watch Trailer
                </Button>
                <Button variant="outlined" color="secondary" size="large">
                  Add to Watchlist
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default JumboSlider;

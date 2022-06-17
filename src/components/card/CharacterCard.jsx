import { CardMedia, Box, Typography } from "@mui/material";
import ContentLoader from "react-content-loader";
import React from "react";
import personplaceholder from "../../assets/images/personplaceholder.jpg";

function CharacterCard({ credit }) {
  return (
    <Box sx={{ backgroundColor: "transparent", borderRadius: "10px" }}>
      <CardMedia
        component="img"
        height="200"
        image={"https://image.tmdb.org/t/p/w200/" + credit.profile_path}
        alt={credit.original_name}
        sx={{
          borderRadius: "10px",
          marginBottom: "0.5rem",
          background: `url(${personplaceholder})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <Box>
        <Typography variant="subtitle1" fontWeight="bold" textAlign="center">
          {credit.original_name}
        </Typography>
      </Box>
    </Box>
  );
}

export const CharacterCardLoad = (props) => {
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
    </ContentLoader>
  );
};

export default CharacterCard;

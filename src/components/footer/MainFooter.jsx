import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import logo64 from "../../assets/images/logo64.png";
import appstore from "../../assets/images/appstore.png";
import googleplay from "../../assets/images/googleplay.png";
import facebook from "../../assets/images/facebook.png";
import pinterest from "../../assets/images/pinterest.png";
import instagram from "../../assets/images/instagram.png";

function MainFooter(props) {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "black",
        color: "white",
        marginTop: "2rem",
        padding: "1rem",
        overflow: "hidden",
      }}
    >
      <Grid item xs={12} sm={9} md={5} sx={{ p: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <img src={logo64} width="42px" />
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginTop: "0.3rem", color: "white" }}
          >
            MilanTV
          </Typography>
        </Box>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3} md={3} sx={{ p: 1 }}>
        <Typography variant="h6">Tetang Kami</Typography>
        <Typography variant="h6">Blog</Typography>
        <Typography variant="h6">Layanan</Typography>
        <Typography variant="h6">Karir</Typography>
        <Typography variant="h6">Pusat Media</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={{ display: "grid", gap: "0.5rem", p: 1 }}
      >
        <Typography variant="h5" fontWeight="bold">
          Download
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <img src={googleplay} alt="Google Play" height="42px" />
          <img src={appstore} alt="App Store" height="42px" />
        </Box>
        <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "0.5rem" }}>
          Social Media
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <img src={facebook} alt="Google Play" height="32px" />
          <img src={pinterest} alt="App Store" height="32px" />
          <img src={instagram} alt="App Store" height="32px" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default MainFooter;

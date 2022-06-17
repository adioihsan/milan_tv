import { Container } from "@mui/system";
import React from "react";
import Navbar from "../components/navigation/Navbar";
import { Outlet } from "react-router-dom";
import MainFooter from "../components/footer/MainFooter";
function Main(props) {
  return (
    <Container>
      <Navbar />
      <Outlet />
      <MainFooter />
    </Container>
  );
}

export default Main;

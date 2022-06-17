import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo64 from "../../assets/images/logo64.png";
import { Link, useNavigate } from "react-router-dom";
const Navbar = ({ cb }) => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    const key = e.key;
    const value = e.target.value;
    if (key == "Enter") {
      navigate("/search/" + value + "/1");
    }
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="sticky" sx={{ bgcolor: "white" }}>
      <Toolbar sx={{ justifyContent: "space-between", gap: "2rem" }}>
        <Link
          to="/"
          style={{ textDecoration: "unset", flexGrow: { xs: 1, sm: 0 } }}
        >
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
              sx={{ fontWeight: "bold", marginTop: "0.3rem", color: "#353535" }}
            >
              MilanTV
            </Typography>
          </Box>
        </Link>
        {/* search box for desktop */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
          }}
        >
          <TextField
            sx={{ width: "100%" }}
            placeholder="search movie"
            size="small"
            onKeyUp={handleSearch}
          />
        </Box>
        {/* nav button for desktop */}
        <Box sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}>
          <Button sx={{ fontWeight: "bold", color: "#353535" }}>Sign in</Button>
        </Box>
        {/* nav button for mobile */}
        <Box sx={{ flexGrow: 0, display: { xs: "block", sm: "none" } }}>
          <IconButton size="large" onClick={handleOpenNavMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{
              display: { xs: "block", sm: "none" },
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Button sx={{ fontWeight: "bold", color: "#353535" }}>
                Sign in
              </Button>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
      <Toolbar
        sx={{
          display: { xs: "flex", sm: "none" },
        }}
      >
        {/* search box for mobile */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
          }}
        >
          <TextField
            sx={{ width: "100%" }}
            placeholder="search movie"
            size="small"
            onKeyUp={handleSearch}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;

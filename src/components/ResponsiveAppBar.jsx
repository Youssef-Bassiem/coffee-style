import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = [
  { page: "HOME", pageLink: "/" },
  { page: "OUR PRODUCTS", pageLink: "/OurProducts" },
  { page: "BLOG", pageLink: "/Blog" },
  { page: "ABOUT", pageLink: "/About" },
  { page: "CONTACT", pageLink: "/Contact" },
  { page: "STYLEGUIDE", pageLink: "/Styleguide" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ background: "white", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Typography
            component="img"
            src="./CoffeeStyle Logo.png"
            href="#app-bar-with-responsive-menu"
            sx={{
              width: "7.5%",
              display: { xs: "none", md: "flex" },
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              {pages.map(({ page, pageLink }) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={pageLink}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            component="img"
            href="#app-bar-with-responsive-menu"
            src="./CoffeeStyle Logo.png"
            sx={{
              display: { xs: "flex", md: "none" },
              //   flexGrow: 1,
              width: "18%",
            }}
          ></Typography>
          <Box
            sx={{
              //   flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map(({ page, pageLink }) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#292b38", display: "block" }}
              >
                <Link to={pageLink}>{page}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
        <Box></Box>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

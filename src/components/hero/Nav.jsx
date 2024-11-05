import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "Our Story", path: "/our-story" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/contact-us" },
];

const Nav = () => {
  const [nav, setNav] = useState(null);
  const location = useLocation();

  const openNav = (event) => {
    setNav(event.currentTarget);
  };

  const closeNav = () => {
    setNav(null);
  };

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/"); 
  };

  return (
    <AppBar
      position="static"
      sx={{
        position        : 'relative',
        backgroundColor : "white",
        flex            : "0 0 auto",
        boxShadow       : "0px 4px 10px 0px #FF00008A",
        zIndex          : 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between"}}>
        <IconButton sx={{ display: { xs: "none", md: "flex" } }} onClick={handleLogoClick}>
          <img
            src="charmwood_logo.jpg"
            alt="Charmwood Logo"
            className="size-20 rounded-full"
          />
        </IconButton>
        <Box
          sx={{
            display    : { xs: "none", md: "flex" },
            color      : "black",
            fontWeight : 700,
            fontSize   : "1.5rem",
            gap        : "1rem",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page.name}
              color="inherit"
              component={Link}
              to={page.path}
              sx={{
                fontFamily : "Playfair Display, serif !important",
                fontWeight : 700,
                fontSize   : "22px",
                color      : location.pathname === page.path ? "#A02321" : "black",
              }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none"} }}>
          <IconButton color="inherit" size="large" onClick={openNav}>
            <MenuIcon sx={{fill: "black"}}/>
          </IconButton>
          <Menu anchorEl={nav} open={Boolean(nav)} onClose={closeNav}>
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                component={Link}
                to={page.path}
                onClick={closeNav}
                sx={{
                  color: location.pathname === page.path ? "#A02321" : "black", fontFamily: "Playfair Display, serif !important", fontWeight: 500,
                }}
              >
                {page.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
          <img
            src="charmwood_logo.jpg"
            alt="Charmwood Logo"
            className="size-20 rounded-full"
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
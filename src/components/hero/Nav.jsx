import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const pages = ["Home", "Our Story", "Services", "Horses", "FAQ", "Contact Us"];

function Nav() {
  const [nav, setNav] = useState(null);

  const openNav = (event) => {
    setNav(event.currentTarget);
  };

  const closeNav = () => {
    setNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar>
        <IconButton sx={{ display: { xs: "none", md: "flex" }}}>
          <img
            src="charmwood_logo.jpg"
            alt="Charmwood Logo"
            className="size-20 rounded-full"
          />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            flexGrow   : 1,
            display    : { xs: "none", md: "flex" },
            fontWeight : 700,
            fontSize   : "1.5rem",
            color      : "black",
          }}
        >
          Charm Wood
        </Typography>
        <Box
          sx={{
            display    : { xs: "none", md: "flex" },
            color      : "black",
            fontWeight : 700,
            fontSize   : "1.5rem",
          }}
        >
          {pages.map((page) => (
            <Button key={page} color="inherit">
              {page}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton color="inherit" size="large" onClick={openNav}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={nav} open={Boolean(nav)} onClose={closeNav}>
            {pages.map((page) => (
              <MenuItem key={page} onClick={closeNav}>
                {page}
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
        <Typography
          variant="h6"
          sx={{
            flexGrow   : 1,
            display    : { xs: "flex", md: "none" },
            fontWeight : 700,
            fontSize   : "1.5rem",
            color      : "black",
          }}
        >
          Charm Wood
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;

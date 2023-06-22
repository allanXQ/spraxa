import {
  AppBar,
  Box,
  Toolbar,
  Hidden,
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeConsumer } from "styled-components";

const Navbar = () => {
  const pages = ["Home", "About", "Services", "Products", "Jobs", "Contact"];
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <List>
        {pages.map((page, index) => (
          <ListItem key={page} onClick={handleDrawerToggle}>
            <NavLink to={`/${page.toLowerCase()}`} className="NavLink">
              {page}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: (theme) =>
            theme.breakpoints.up("md") ? "space-between" : "space-between",
          mt: "10px",
          mb: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: (theme) => (theme.breakpoints.down("md") ? 2 : 5),
          }}
        >
          <img src="/images/logo.png" alt="logo" width={150} height={40} />
          <img src="/images/anniversary.png" alt="anniversary" width={60} />
        </Box>

        <Hidden smUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Hidden mdDown implementation="css">
          <Box sx={{ display: "flex", gap: 5 }} className="navbar">
            {pages.map((page) => (
              <NavLink to={`/${page.toLowerCase()}`} className="NavLink">
                {page}
              </NavLink>
            ))}
          </Box>
        </Hidden>
      </Toolbar>

      <Hidden smUp implementation="js">
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "40%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

export default Navbar;

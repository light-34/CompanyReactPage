import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import DrawerComp from "../components/pages/DrawerComp";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    //cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    //fontSize: "14px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "red",
      //borderBottom: "1px solid red",
    },
  },
}));

const NavbarSty = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <Link to="/" ><img src="/images/logo.png" alt="logo" height="80px"/></Link>
        </Typography>
        {isMobile ? (
          <DrawerComp />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="/projects" className={classes.link}>
              Projects
            </Link>
            <Link to="/signup" className={classes.link}>
              Sign up
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavbarSty;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  AppBar,
  Toolbar,
  Menu,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  mainNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainLogo: {
    flexGrow: 1,
    fontSize: "2rem",
    color: "#fff",
    textDecoration: "none",
    "@media (max-width:600px)": {
      fontSize: "1.5rem",
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  menuLink: {
    fontSize: "1.5rem",
    color: "#fff",
    textDecoration: "none",
    padding: theme.spacing(2),
    "@media (max-width:600px)": {
      fontSize: "1rem",
    },
    "@media (max-width:900px)": {
      fontSize: "1.25rem",
    },
  },
  mobileMenuLink: {
    display: "block",
    fontSize: "1rem",
    color: "#000",
    textDecoration: "none",
    padding: theme.spacing(2),
  },
}));

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
};

const Navbar = () => {
  const classes = useStyles();
  const { width } = useViewport();
  const breakpoint = 600;
const [anchorEl, setAnchorEl] = React.useState(null);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar className={classes.mainNav}>
          <Link to="/" className={classes.mainLogo}>
            Shopping
          </Link>
          {width < breakpoint ? (
            <div>
              <IconButton onClick={handleClick} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link
                  to="/"
                  className={classes.mobileMenuLink}
                  onClick={handleClose}
                >
                  Products
                </Link>
                <Link
                  to="/cart"
                  className={classes.mobileMenuLink}
                  onClick={handleClose}
                >
                  Cart (5)
                </Link>
              </Menu>
            </div>
          ) : (
            <>
              <Link to="/" className={classes.menuLink}>
                Products
              </Link>
              <Link to="/cart" className={classes.menuLink}>
                Cart (5)
              </Link>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

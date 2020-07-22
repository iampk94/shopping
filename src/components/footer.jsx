import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight:"18vh",
    flexGrow: 1,
    padding: "1rem 4rem",
    background: "#363636",
    "@media (max-width:600px)": {
      textAlign:"center"
    },
  },
  paper: {
    color: "#fff",
  },
  title: {
    textTransform: "uppercase",
  },
  footerInfo: {
    color: "#fff",
    textAlign: "center",
    paddingTop: "2rem",
    fontSize: "1.5rem",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>
            <Typography variant="h6" className={classes.title}>
              contact us
            </Typography>
            <Typography variant="body">
              you can contact us 234-8094-34033-33
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>
            <Typography variant="h6" className={classes.title}>
              return policy
            </Typography>
            <Typography variant="body">
              we accept return after 7 days max
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.footerInfo}>
            &copy;{new Date().getFullYear()} Copyright:Shopping
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

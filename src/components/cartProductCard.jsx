import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  IconButton,
  CardMedia,
  Button,
} from "@material-ui/core";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const styles = (theme) => ({
  productInfoWrapper: {
    display: "flex",
    padding: "1rem",
    "@media (max-width:600px)": {
      flexDirection: "column",
    },
  },
  productImage: {
    minWidth: 345,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width:600px)": {
      minWidth: "100%",
    },
  },
});

class CartProductCard extends React.Component {
  render() {
    const { classes, info, removecart, addcount, removecount } = this.props;
    return (
      <Paper className={classes.productInfoWrapper}>
        <div className={classes.productImage}>
          <img src={info.image2} alt={info.title} />
        </div>
        <div>
          <Typography gutterBottom variant="h5" component="h2">
            {info.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {info.description}
          </Typography>
          <Typography gutterBottom variant="h6">
            Price : {info.priceValue}
          </Typography>
          <Typography gutterBottom variant="h6">
            Quantity : {info.quantity}
          </Typography>
          <div>
            <IconButton
              color="primary"
              onClick={addcount}
            >
              <ArrowDropUpIcon />
            </IconButton>
            <IconButton
              color="primary"
              onClick={removecount}
              disabled={info.quantity === 0 ? true : false}
            >
              <ArrowDropDownIcon />
            </IconButton>
          </div>
          <Button variant="contained" color="secondary" onClick={removecart}>
            Remove
          </Button>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CartProductCard);

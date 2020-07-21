import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  IconButton,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const styles = (theme) => ({
  root: {
    maxWidth: 345,
    height: "100%",
    "@media (max-width:600px)": {
      margin: "auto",
    },
  },
  media: {
    minHeight: 200,
    backgroundSize: "contain",
  },
  content: {
    minHeight: 325,
  },
  toolbarButtons: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

 

  render() {
     const { classes, info, addcart } = this.props;

    return (
      <React.Fragment>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={info.image2}
              title="Contemplative Reptile"
            />
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2">
                {info.title}
              </Typography>
              <div className={classes.toolbarButtons} onClick={addcart}>
                <IconButton color="secondary">
                  <AddCircleIcon />
                </IconButton>
              </div>

              <Typography variant="body2" color="textSecondary" component="p">
                {info.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography gutterBottom variant="h6">
              Price : {info.priceValue}
            </Typography>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProductCard);

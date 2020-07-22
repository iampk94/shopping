import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";

import { withStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Paper, Button } from "@material-ui/core";

import PageLayout from "../components/pageLayout";
import CartProductCard from "../components/cartProductCard";
import {
  removeFromCart,
  addProductCount,
  subProductCount,
} from "../actions/actions";

const propTypes = {};

const defaultProps = {};

const styles = (theme) => ({
  pageContainer: {
    padding: theme.spacing(2),
    minHeight: "70vh",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    "@media (max-width:600px)": {
      fontSize: "2.5rem",
    },
  },
  totalPrice: {
    padding: "10px 5px",
  },
});

class Cart extends React.Component {
  render() {
    // console.log("card props", this.props.addedProducts);

    const { classes, addedProducts, total } = this.props;
    const productItems =
      addedProducts &&
      addedProducts.map((product) => (
        <Grid item xs={12} key={product.id}>
          <CartProductCard
            info={product}
            removecart={() => this.props.removeFromCart(product.partId)}
            addcount={() => this.props.addProductCount(product.partId)}
            removecount={() => this.props.subProductCount(product.partId)}
          />
        </Grid>
      ));

    return (
      <PageLayout>
        <Container maxWidth="md" className={classes.pageContainer}>
          <Typography variant="h3" className={classes.title}>
            You Ordered {addedProducts.length === 0 ? `0 Products` : null}
          </Typography>
          <Grid container spacing={3}>
            {productItems}
            <Grid item xs={12} sm={4}>
              <Paper className={classes.totalPrice}>
                <Typography variant="h4">
                  Total:{total.toLocaleString("en-IN")} ₹
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Checkout
              </Button>
            </Grid>
          </Grid>
        </Container>
      </PageLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedProducts: state.products.addedProducts,
    total: state.products.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => {
      dispatch(removeFromCart(id));
    },
    addProductCount: (id) => {
      dispatch(addProductCount(id));
    },
    subProductCount: (id) => {
      dispatch(subProductCount(id));
    },
  };
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps)
)(Cart);

// export default connect(mapStateToProps)(Card);

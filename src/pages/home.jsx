import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";

import { withStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";

import PageLayout from "../components/pageLayout";
import ProductCard from "../components/productCard";

import { fetchProducts, addToCart } from "../actions/actions";

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
  loadingInfo: {
    paddingTop: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

class Home extends React.Component {
  
  componentWillMount(){
    this.props.fetchProducts();
  }

  render() {
    console.log("get props",this.props)
    
    const { classes,products } = this.props;
    const productItems =
      products.length !== 0 ? (
        products.map((product) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={product.id}>
            <ProductCard
              info={product}
              addcart={() => this.props.addToCart(product.partId)}
            />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.loadingInfo}>
            Products are loading
          </Typography>
        </Grid>
      );
    

    return (
      <PageLayout>
        <Container maxWidth="md" className={classes.pageContainer}>
          <Typography variant="h3" className={classes.title}>
            Products
          </Typography>
          <Grid container spacing={3}>
            {productItems}
          </Grid>
        </Container>
      </PageLayout>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
      products: state.products.allProducts
    }
  }
const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    fetchProducts : ()=>dispatch(fetchProducts())
  };
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps,  mapDispatchToProps)
)(Home);
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";
import PageLayout from "../components/pageLayout";
import ProductCard from "../components/productCard";

const propTypes = {};

const defaultProps = {};

const styles = (theme) => ({
  pageContainer: {
    padding: theme.spacing(2),
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
    padding: theme.spacing(0.5),
    textAlign: "center",
  },
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      products: [],
      cart: 0,
    };
  }
  productAddCart = () =>{
       alert("Hello!");
  }
  
  componentDidMount() {
    fetch(`https://shopping-cart-demo-api.herokuapp.com/products`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          products: data,
          isLoading: false,
        })
      )
      .catch((error) => this.setState({ isLoading: false }));
  }
  render() {
    const { classes} = this.props;
    const { products, isLoading } = this.state;

    return (
      <PageLayout>
        <Container maxWidth="md" className={classes.pageContainer}>
          <Typography variant="h3" className={classes.title}>
            Products
          </Typography>
          <Grid container spacing={3}>
            {!isLoading ? (
              products.map((item, index) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                  <ProductCard info={item} addcart={this.productAddCart} />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography variant="h5" className={classes.loadingInfo}>
                  Loading Data
                </Typography>
              </Grid>
            )}
          </Grid>
        </Container>
      </PageLayout>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default withStyles(styles, { withTheme: true })(Home);
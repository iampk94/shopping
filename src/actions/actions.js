import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_PRODUCT_COUNT,
  SUB_PRODUCT_COUNT,
} from "./actionTypes";

// fetch all products
export const fetchProducts = () => dispatch => {
    console.log("fetching")
  fetch("https://shopping-cart-demo-api.herokuapp.com/products")
    .then((res) => res.json())
    .then(
      (products) =>
        dispatch({
          type: FETCH_PRODUCTS,
          items: products,
        }),
    );
};

//add to cart
export const addToCart =  (id) => dispatch =>{
    dispatch({
         type: ADD_TO_CART,
         id
    })
}


//Remove to cart
export const removeFromCart =  (id) => dispatch =>{
    dispatch({
      type: REMOVE_FROM_CART,
      id,
    });
}

//add product count
export const addProductCount =  (id) => dispatch =>{
    dispatch({
      type: ADD_PRODUCT_COUNT,
      id,
    });
}

//sbtract product count
export const subProductCount = (id) => (dispatch) => {
         dispatch({
           type: SUB_PRODUCT_COUNT,
           id,
         });
       };
import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_PRODUCT_COUNT,
  SUB_PRODUCT_COUNT
} from "../actions/actionTypes";
import { act } from "react-dom/test-utils";

const initialState = {
  allProducts: [],
  addedProducts: [],
  total: 0,
};

const toNumber = (getString) =>{
return Number(getString.replace(",", ""));
}
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        allProducts: action.items,
      };

    case ADD_TO_CART:
      
      let addedItem = state.allProducts.find(
        (item) => item.partId === action.id
      );

      //check if the action id exists in the addedProducts
      let existed_item = state.addedProducts.find(
        (item) => action.id === item.partId
      );

      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + toNumber(addedItem.priceValue),
        };
      } else {
        addedItem.quantity = 1;
        //calculating the total
        let newTotal = state.total + toNumber(addedItem.priceValue);

        return {
          ...state,
          addedProducts: [...state.addedProducts, addedItem],
          total: newTotal,
        };
      }

    case REMOVE_FROM_CART:
      let itemToRemove = state.addedProducts.find(
        (item) => action.id === item.partId
      );
      let new_items = state.addedProducts.filter(
        (item) => action.id !== item.partId
      );

      //calculating the total
      let newTotal =
        state.total - toNumber(itemToRemove.priceValue) * itemToRemove.quantity;
      
        // console.log(itemToRemove);
      
        return {
        ...state,
        addedProducts: new_items,
        total: newTotal,
      };

      
    case ADD_PRODUCT_COUNT:
      let addedItem1 = state.allProducts.find((item) => item.partId === action.id);
      addedItem1.quantity += 1;
      
      // console.log("before total and add count price", state.total, addedItem1.priceValue);
      
      let newTotal1 = state.total + toNumber(addedItem1.priceValue);

      // console.log("new Total", newTotal1);

      return {
        ...state,
        total: newTotal1,
      };


    case SUB_PRODUCT_COUNT:
      console.log("sub count", state.addedProducts, state.allProducts,action.id);
      let addedItem2 = state.allProducts.find((item) => item.partId === action.id);
      
      console.log("after sub count",addedItem2,action.id);

      //if the qt == 0 then it should be removed
      if (addedItem2.quantity === 1) {
        let new_items = state.addedProducts.filter(
          (item) => item.partId !== action.id
        );
        let newTotal2 = state.total - toNumber(addedItem2.priceValue);
        return {
          ...state,
          addedProducts: new_items,
          total: newTotal2,
        };
      } else {
        addedItem2.quantity -= 1;
        let newTotal3 = state.total - toNumber(addedItem2.priceValue);
        return {
          ...state,
          total: newTotal3,
        };
      }

    default:
      return state;
  }
}

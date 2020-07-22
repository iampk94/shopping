import { combineReducers } from "redux";
import productReducer from "./reducer";

export default combineReducers({
  products: productReducer,
});

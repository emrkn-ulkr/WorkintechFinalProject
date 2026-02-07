import { combineReducers } from "redux";

const initialProductState = {
  list: [],
  selected: null,
  loading: false,
  error: null,
};

function productReducer(state = initialProductState, action) {
  switch (action.type) {
    case "PRODUCTS_REQUEST":
      return { ...state, loading: true, error: null };
    case "PRODUCTS_SUCCESS":
      return { ...state, loading: false, list: action.payload };
    case "PRODUCTS_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "PRODUCT_SELECT":
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  product: productReducer,
});
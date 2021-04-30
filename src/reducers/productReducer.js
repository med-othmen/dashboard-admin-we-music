import { productTypes } from "../types/product.types";
const initialState = [];

export default function PRODUCTsReducers(state = initialState, action) {
  if (action.type === productTypes.GETALL_SUCCESS) {
    action.products.forEach(function (element) {
      element.like = false;
    });
    return action.products;
  }

  if (action.type === productTypes.UPDATE_SUCCESS) {
  
    return state.map((item, index) => {
      // Find the item with the matching id
      if(item.id === action.data.id) {
        // Return a new object
        return {
          ...item,  // copy the existing item
          rating:action.data.rating,
          like:action.data.like
         
        }
      }
      // Leave every other item unchanged
      return item;
    });
  }

  return state;
}

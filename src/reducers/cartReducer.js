
import { cartTypes } from "../types/cart.types";
const initialState =[]

 export default function CartReducers(state =initialState, action) {
  if (action.type === cartTypes.GETALL_CART_SUCCESS) {
    return action.payload;
  }
  if (action.type === cartTypes.ADD_CART_SUCCESS) {
    return [...state, action.product];
    
  }

  if (action.type === cartTypes.DELETE_FROM_CART_SUCCESS) {
    return state.filter((cart) => cart.product.id !== action.id);
  }
  if (action.type === cartTypes.CART_UPDATE_SUCCESS) {
    return state.map((item, index) => {
      // Find the item with the matching id
      if(item.id === action.data.id) {
        // Return a new object
        return {
          ...item,  // copy the existing item
          quantity: Number(action.data.quantity) ,
          total:action.data.price*action.data.quantity// replace the email addr
        }
      }
      // Leave every other item unchanged
      return item;
    });
  
  }
  return state;
}


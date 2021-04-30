import { type_prodTypes } from "../types/types_prods.types";
const initialState = [];

export default function Types_prodReducer(state = initialState, action) {
  switch (action.type) {
    case type_prodTypes.GETALL_REQUEST:
      return [{loading: true}]
    case type_prodTypes.GETALL_SUCCESS:
      return action.types
    case type_prodTypes.GETALL_FAILURE:
      return [{error: action.error}];
  
    default:
      return state
  }


}

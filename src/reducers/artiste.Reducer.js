import { artisteTypes } from "../types/artiste.types";
const initialState = [];

export default function ArtisteReducer(state = initialState, action) {
  switch (action.type) {
    case artisteTypes.GETALL_REQUEST:
      return [{loading: true}]
    case artisteTypes.GETALL_SUCCESS:
      return action.artistes
    case artisteTypes.GETALL_FAILURE:
      return [{error: action.error}];
  
    default:
      return state
  }


}

import { genre_prodTypes } from "../types/genre_prod.types";
const initialState = [];

export default function Genres_prodReducer(state = initialState, action) {
  switch (action.type) {
    case genre_prodTypes.GETALL_REQUEST:
      return [{loading: true}]
    case genre_prodTypes.GETALL_SUCCESS:
      return action.genres
    case genre_prodTypes.GETALL_FAILURE:
      return [{error: action.error}];
  
    default:
      return state
  }


}

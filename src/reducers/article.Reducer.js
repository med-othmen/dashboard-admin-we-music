import { articleTypes } from "../types/article.types";
const initialState = [];

export default function ArticleReducer(state = initialState, action) {
  switch (action.type) {
    
    case articleTypes.GETALL_SUCCESS:
      return action.articles
    case articleTypes.GETALL_FAILURE:
      return [{error: action.error}];
  
    default:
      return state
  }


}

import { sleeve_condition_prodTypes } from "../types/sleeve_condition.types";
const initialState = [];

export default function Sleeve_condition_prodReducer(state = initialState, action) {
  switch (action.type) {
    case sleeve_condition_prodTypes.GETALL_REQUEST:
      return [{loading: true}]
    case sleeve_condition_prodTypes.GETALL_SUCCESS:
      return action.sleeve_conditions
    case sleeve_condition_prodTypes.GETALL_FAILURE:
      return [{error: action.error}];
  
    default:
      return state
  }


}

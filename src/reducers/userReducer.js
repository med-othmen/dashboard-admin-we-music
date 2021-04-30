import { userTypes } from '../types/user.types';
 export default function UserReducer(state = [], action) {
  switch (action.type) {
    case userTypes.GETALL_REQUEST:
      return {
        loading: true
      };
    case userTypes.GETALL_SUCCESS:
      return  action.users
    case userTypes.GETALL_FAILURE:
      return { 
        error: action.error
      };
  
    default:
      return state
  }
}
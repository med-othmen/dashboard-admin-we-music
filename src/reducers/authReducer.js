import { userTypes } from '../types/user.types';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case userTypes.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userTypes.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userTypes.LOGIN_FAILURE:
      return {};
    case userTypes.LOGOUT:
      return {};
    case userTypes.UPDATE_PROFIL_REQUEST:
        return {
          loading: true
        };
    case userTypes.UPDATE_PROFIL_SUCCESS:
        return {
          user: action.user
        };
    case userTypes.UPDATE_PROFIL_FAILURE:
        return { 
          error: action.error
        };
        
      default:
      return state
  }
}
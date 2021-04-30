import { alertTypes } from '../types/alert.types';

export default function AlertReducer(state = {}, action) {
  switch (action.type) {
    case alertTypes.SUCCESS:
      return {
        type: 'success',
        message: action.message
      };
    case alertTypes.ERROR:
      return {
        type: 'danger',
        message: action.message
      };
    case alertTypes.CLEAR:
      return {};
    default:
      return state
  }
}
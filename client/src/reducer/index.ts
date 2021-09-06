import { ADMIN_SESSION, USER_SESSION } from '../actions';
import { action, rootState } from '../constants/types';

const initialState: rootState = {
  adminSession: false,
  userSession: false,
};

export default function rootReducer(state = initialState, action: action) {
  switch (action.type) {
    case ADMIN_SESSION:
      console.log('entre al reducer');
      return {
        ...state,
        adminSession: action.payload,
      };
    case USER_SESSION:
      return {
        ...state,
        adminSession: action.payload,
      };
    default:
      return { ...state };
  }
}

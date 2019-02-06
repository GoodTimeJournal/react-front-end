import {
  LOGIN_USER,
  LOGIN_USER_COMPLETE,
  LOGIN_USER_FAIL,
  REGISTER_USER,
  REGISTER_USER_COMPLETE,
  REGISTER_USER_FAIL
} from '../actions/user';

const initialState = {
  user: {},
  activityLog: [],
  reflectionLog: [],
  isLoading: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, isLoading: true, error: '' };
    case LOGIN_USER_COMPLETE:
      return {
        ...state,
        token: action.payload,
        isLoading: false,
        error: ''
      };

    case LOGIN_USER_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    case REGISTER_USER:
      return { ...state, isLoading: true, error: '' };
    case REGISTER_USER_COMPLETE:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: ''
      };
    case REGISTER_USER_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

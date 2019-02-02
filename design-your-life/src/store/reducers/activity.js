// import CONSTANT_VARIABLE from actions
import {
  ADD_ACTIVITY,
  ADD_ACTIVITY_COMPLETE,
  ADD_ACTIVITY_FAIL,
  UPDATE_ACTIVITY,
  UPDATE_ACTIVITY_COMPLETE,
  UPDATE_ACTIVITY_FAIL,
  DELETE_ACTIVITY,
  DELETE_ACTIVITY_COMPLETE,
  DELETE_ACTIVITY_FAIL
} from '../actions/activity';

const initialState = {
  activities: [],
  isLoading: '',
  error: ''
};

export default function(state = initialState, action) {
  const loading = { ...state, isLoading: true, error: '' };
  const hasError = { ...state, isLoading, error: action.payload };

  switch (action.type) {
    case ADD_ACTIVITY:
      return loading;

    case ADD_ACTIVITY_COMPLETE:
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: ''
      };

    case ADD_ACTIVITY_FAIL:
      return hasError;

    case UPDATE_ACTIVITY:
      return loading;

    case UPDATE_ACTIVITY_COMPLETE:
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: ''
      };

    case UPDATE_ACTIVITY_FAIL:
      return hasError;

    case DELETE_ACTIVITY:
      return loading;

    case DELETE_ACTIVITY_COMPLETE:
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: ''
      };

    case DELETE_ACTIVITY_FAIL:
      return hasError;

    default:
      return state;
  }
}

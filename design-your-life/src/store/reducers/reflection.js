// import CONSTANT_VARIABLE from actions
import {
  ADD_REFLECTION,
  ADD_REFLECTION_COMPLETE,
  ADD_REFLECTION_FAIL,
  UPDATE_REFLECTION,
  UPDATE_REFLECTION_COMPLETE,
  UPDATE_REFLECTION_FAIL,
  DELETE_REFLECTION,
  DELETE_REFLECTION_COMPLETE,
  DELETE_REFLECTION_FAIL
} from '../actions/reflection';

const initialState = {
  reflections: [],
  isLoading: '',
  error: ''
};

export default function(state = initialState, action) {
  const loading = { ...state, isLoading: true, error: '' };
  const hasError = { ...state, isLoading, error: action.payload };

  switch (action.type) {
    case ADD_REFLECTION:
      return loading;

    case ADD_REFLECTION_COMPLETE:
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: ''
      };

    case ADD_REFLECTION_FAIL:
      return hasError;

    case UPDATE_REFLECTION:
      return loading;

    case UPDATE_REFLECTION_COMPLETE:
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: ''
      };

    case UPDATE_REFLECTION_FAIL:
      return hasError;

    case DELETE_REFLECTION:
      return loading;

    case DELETE_REFLECTION_COMPLETE:
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: ''
      };

    case DELETE_REFLECTION_FAIL:
      return hasError;

    default:
      return state;
  }
}

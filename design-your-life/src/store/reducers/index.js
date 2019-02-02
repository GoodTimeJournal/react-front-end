import { combineReducers } from 'redux';

import activity from './activity';
import reflection from './reflection';

export default combineReducers({
  activity,
  reflection
});

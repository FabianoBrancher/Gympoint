import { combineReducers } from 'redux';

import auth from './auth/reducer';
import plan from './plan/reducer';

export default combineReducers({
  auth,
  plan
});

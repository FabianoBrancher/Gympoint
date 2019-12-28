import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import plan from './plan/sagas';

export default function* rootSaga() {
  return yield all([auth, plan]);
}

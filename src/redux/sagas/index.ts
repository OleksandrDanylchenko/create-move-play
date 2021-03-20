import { all } from 'redux-saga/effects';
import usersSagas from './user';

export default function* rootSaga() {
  yield all([usersSagas()]);
}

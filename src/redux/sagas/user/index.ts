import { Routine } from 'redux-saga-routines';
import { all, put, takeEvery } from 'typed-redux-saga';
import log from 'loglevel';
import {
  clearUserAnswersRoutine,
  saveUserAnswersRoutine
} from '../../routines';

function* saveUserAnswersSaga({ payload }: Routine<any>) {
  try {
    yield* put(saveUserAnswersRoutine.success(payload));
  } catch (error) {
    log.error(error);
    yield* put(saveUserAnswersRoutine.failure(error));
  }
}

function* clearUserAnswersSaga({ payload }: Routine<any>) {
  try {
    yield* put(saveUserAnswersRoutine.success(payload));
  } catch (error) {
    log.error(error);
    yield* put(saveUserAnswersRoutine.failure(error));
  }
}

function* watchSaveUserAnswersSaga() {
  yield* takeEvery(saveUserAnswersRoutine.TRIGGER, saveUserAnswersSaga);
}

function* watchClearUserAnswersSaga() {
  yield* takeEvery(clearUserAnswersRoutine.TRIGGER, clearUserAnswersSaga);
}

export default function* usersSagas() {
  yield* all([watchSaveUserAnswersSaga(), watchClearUserAnswersSaga()]);
}

import { Routine } from 'redux-saga-routines';
import { all, put, takeEvery } from 'typed-redux-saga';
import log from 'loglevel';
import { saveUserAnswersRoutine } from '../../routines';

function* saveUserAnswersSaga({ payload }: Routine<any>) {
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

export default function* usersSagas() {
  yield* all([watchSaveUserAnswersSaga()]);
}

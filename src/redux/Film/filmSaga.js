import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { fetchFilmSuccess, fetchFilmError, fetchFilmStart } from './filmSlice'
import { fetchFilmNowAndSoon } from '../../services/movieApi'

function* fetchFilmSaga() {
    try {
        yield delay(2000)
        yield put(fetchFilmStart())
        const data = yield call(fetchFilmNowAndSoon);
        yield put(fetchFilmSuccess(data));
    } catch (error) {
        yield put(fetchFilmError(error));
    }
}

function* rootFilmSaga() {
    yield takeEvery('APP_STARTUP', fetchFilmSaga);
}

export default rootFilmSaga;
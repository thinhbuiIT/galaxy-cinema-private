import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { fetchFilmCommingSoonSuccess, fetchFilmCommingSoonError } from './commingSoonSlice'
import { fetchFilmNowAndSoon } from '../../services/movieApi'

function* fetchFilmCommingSoonSaga() {
    try {
        yield delay(1000)
        const data = yield call(fetchFilmNowAndSoon);
        yield put(fetchFilmCommingSoonSuccess(data.data.movieCommingSoon));
    } catch (error) {
        yield put(fetchFilmCommingSoonError(error));
    }
}

function* rootFilmConmmingSoonSaga() {
    yield takeEvery('filmCommingSoon/fetchFilmCommingSoonStart', fetchFilmCommingSoonSaga);
}

export default rootFilmConmmingSoonSaga;
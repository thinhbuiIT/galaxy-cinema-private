import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { fetchFilmShowingSuccess, fetchFilmShowingError } from './showingSlice'
import { fetchFilmNowAndSoon } from '../../services/movieApi'

function* fetchFilmShowingSaga() {
    try {
        yield delay(1000)
        const data = yield call(fetchFilmNowAndSoon);
        yield put(fetchFilmShowingSuccess(data.data.movieShowing));
    } catch (error) {
        yield put(fetchFilmShowingError(error));
    }
}

function* rootFilmShowingSaga() {
    yield takeEvery('filmShowing/fetchFilmShowingStart', fetchFilmShowingSaga);
}

export default rootFilmShowingSaga;
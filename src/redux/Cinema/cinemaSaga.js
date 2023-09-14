import { call, put, takeEvery } from "redux-saga/effects";
import { fetchCinemaFailure, fetchCinemaStart, fetchCinemaSuccess } from "./cinemaSlice";
import { fetchCinemas } from "../../services/cinemaApi";

function* fetchCinemaSaga() {
    try {
        yield put(fetchCinemaStart())
        const data = yield call(fetchCinemas)
        yield put(fetchCinemaSuccess(data))
    } catch (error) {
        yield put(fetchCinemaFailure(error))
    }
}

function* rootCinemaSaga() {
    yield takeEvery('APP_STARTUP', fetchCinemaSaga)
}

export default rootCinemaSaga
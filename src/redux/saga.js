import rootCinemaSaga from "./Cinema/cinemaSaga";
import rootFilmSaga from "./Film/filmSaga";
import { all } from "redux-saga/effects";


function* rootSaga() {
    yield all([
        rootFilmSaga(),
        rootCinemaSaga()
    ]);
}

export default rootSaga;
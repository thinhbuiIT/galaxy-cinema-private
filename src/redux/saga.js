import rootFilmSaga from "./Film/filmSaga";
import { all } from "redux-saga/effects";


function* rootSaga() {
    yield all([
        rootFilmSaga(),
    ]);
}

export default rootSaga;
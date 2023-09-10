import rootFilmShowingSaga from "./Film/showingSaga";
import rootFilmCommingSoonSaga from "./Film/commingSoonSaga";
import { all } from "redux-saga/effects";


function* rootSaga() {
    yield all([
        rootFilmShowingSaga(),
        rootFilmCommingSoonSaga(),
    ]);
}

export default rootSaga;
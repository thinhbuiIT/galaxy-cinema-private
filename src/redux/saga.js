import { all } from "redux-saga/effects";

import rootCinemaSaga from "./Cinema/cinemaSaga";
import rootFilmSaga from "./Film/filmSaga";
import rootUser from "./User/userSaga";

function* rootSaga() {
    yield all([
        rootFilmSaga(),
        rootCinemaSaga(),
        rootUser()
    ]);
}

export default rootSaga;
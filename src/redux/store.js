import { combineReducers } from 'redux';
import filmReducer from './Film/filmSlice';
import cinemaReducer from './Cinema/cinemaSlice'
import cinemaByFilmReducer from './Film/CinemaByFilm/cinemaByFilmSlice';
import filmByCinemaReducer from './Cinema/FilmByCinema/filmByCinemaSlice'
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga';

const rootReducer = combineReducers({
    film: filmReducer,
    cinema: cinemaReducer,
    cinemaByFilm : cinemaByFilmReducer,
    filmByCinema: filmByCinemaReducer
});

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export default store
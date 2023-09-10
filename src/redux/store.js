import { combineReducers } from 'redux';
import commingSoonReducer from './Film/commingSoonSlice';
import showingReducer from './Film/showingSlice';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga';

const rootReducer = combineReducers({
    filmCommingSoon: commingSoonReducer,
    filmShowing: showingReducer,
});

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export default store
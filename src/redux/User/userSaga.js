import { call, put, takeEvery } from 'redux-saga/effects';

import { loginStart, loginSuccess, loginFailure } from './userSlice';

import { login, register } from '../../services/userAPI';

function* HandleLogin(action) {
    try {
        yield put(loginStart())
        const response = yield call(login, action.payload)
        // localStorage.setItem('user', response.data.Email)
        alert('Login Success')

        yield put(loginSuccess(response.data))
    } catch (error) {
        yield put(loginFailure(error))
    }
}

function* HandleRegister(action) {
    try {
        const response = yield call(register, {...action.payload, Role: 0})
        alert('Register Success')
        console.log('HandleRegister : ',response);
    } catch (error) {
        console.log(error)
    }
}

function* rootUser() {
    yield takeEvery('LOGIN', HandleLogin)
    yield takeEvery('REGISTER', HandleRegister)
} 

export default rootUser
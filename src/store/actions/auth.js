import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-map';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
}

export const auth = (email, password) => {
    return (dispatch) => {
        dispatch(authStart());
        const authData = {
            email,
            password,
            returnSecureToken: true
        };
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD8o6LEPgyfXvDDZ-JEttL_yE3guCyG_ys';

        // TO SIGN UP A NEW ADMIN USE THIS LINK
        // let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD8o6LEPgyfXvDDZ-JEttL_yE3guCyG_ys';
        
        axios.post(url, authData)
            .then(res => {
                // const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                // localStorage.setItem('token', res.data.idToken);
                // localStorage.setItem('expirationDate', expirationDate);
                // localStorage.setItem('userId', res.data.localId);
                dispatch(authSuccess(res.data));
                // dispatch(checkAuthTimeout(res.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    }
}
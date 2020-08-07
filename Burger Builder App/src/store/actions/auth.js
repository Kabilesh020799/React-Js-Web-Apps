import * as actionTypes from './actionTypes';
import axios from 'axios'
export const authStart =() => {
    return {
         type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token,userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');

    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        },expirationTime * 1000);
    }
}

export const auth = (email,password,isSignup) => {
    return dispatch => {
        authStart();
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    }
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBOb_lF2Mw3n_J-6WdGdnGDDfl-tfn3Q7E"

    if(isSignup){
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBOb_lF2Mw3n_J-6WdGdnGDDfl-tfn3Q7E"
    }

    axios.post(url,authData)
        .then(res => {
            const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000)
            localStorage.setItem('token',res.data.idToken);
            localStorage.setItem('expirationDate',expirationDate);
            localStorage.setItem('userID',res.data.userId)
            dispatch(authSuccess(res.data.idToken,res.data.localId))
            dispatch(checkAuthTimeout(res.data.expiresIn))
        })
        .catch(err=> {
            dispatch(authFail(err.response.data.error));
        })
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId');
        if(!token){
            dispatch(logout());
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()){
                dispatch(logout());
            } else{
                dispatch(authSuccess(token,userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000));
            }
        }

    }
}
import {  USER_AUTH_FAILED,  USER_AUTH_REQUEST, USER_AUTH_SUCCESS } from "../constants/constants"
import Swal from "sweetalert2";
import axios from "axios";

let apiPrefix = "http://localhost:5000/api"

export const loginAction = (username) => async (dispatch, getState) => {


    try {
        dispatch({
            type: USER_AUTH_REQUEST,
            payload: null
        })
        const data = {
            username: username
        };
        await axios.post(apiPrefix + '/login', data).then((response) => {
            dispatch({
                type: USER_AUTH_SUCCESS,
                payload: response.data
            })
        }).catch((error) => {
            if (error.response) {

                Swal.fire({
                    icon: 'error',
                    title: 'Login',
                    text: error.response.data.message,
                    confirmButtonText: 'Ok'
                })
                dispatch({
                    type: USER_AUTH_FAILED,
                    payload: error.response.data
                })
            } else {

                dispatch({
                    type: USER_AUTH_FAILED,
                    payload: { message: 'An Error occured!' }
                })
            }
        })
    } catch (e) {
        alert(e.message)
    }
}


export const registerAction = (username, email, fullname) => async (dispatch, getState) => {


    try {
        dispatch({
            type: USER_AUTH_REQUEST,
            payload: null
        })
        const data = {
            username: username,
            email: email,
            fullname: fullname
        };
        await axios.post(apiPrefix + '/register', data).then((response) => {
            dispatch({
                type: USER_AUTH_SUCCESS,
                payload: response.data
            })
        }).catch((error) => {
            if (error.response) {

                Swal.fire({
                    icon: 'error',
                    title: 'Register',
                    text: error.response.data.message,
                    confirmButtonText: 'Ok'
                })
                dispatch({
                    type: USER_AUTH_FAILED,
                    payload: error.response.data
                })
            } else {

                dispatch({
                    type: USER_AUTH_FAILED,
                    payload: { message: 'An Error occured!' }
                })
            }

        })
    } catch (e) {
        alert(e.message)
    }
}

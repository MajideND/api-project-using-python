import { LIST_OF_PICTURE_FAILED, LIST_OF_PICTURE_REQUEST, LIST_OF_PICTURE_RESET, LIST_OF_PICTURE_SUCCESS, UPLOAD_PICTURE_FAILED, UPLOAD_PICTURE_REQUEST, UPLOAD_PICTURE_SUCCESS } from "../constants/constants"
import Swal from "sweetalert2";
import axios from "axios";

let apiPrefix = "http://localhost:5000/api"



export const uploadPicture = (username, image) => async (dispatch, getState) => {


    try {
        dispatch({
            type: UPLOAD_PICTURE_REQUEST,
            payload: null
        })


        const data = new FormData();

        data.append('username', username)
        data.append('picture', image)


        await axios.post(apiPrefix + '/picture', data, {
            headers: {
                "Content-Type": "multipart/form-data",
                'Accept': "application/json",
            }
        }).then((response) => {
            dispatch({
                type: UPLOAD_PICTURE_SUCCESS,
                payload: response.data
            })
            Swal.fire({
                icon: 'success',
                title: 'Upload',
                text: 'Upload the picture was successful.',
                confirmButtonText: 'Ok'
            })
        }).catch((error) => {
            if (error.response) {

                Swal.fire({
                    icon: 'error',
                    title: 'Upload',
                    text: error.response.data.message,
                    confirmButtonText: 'Ok'
                })
                dispatch({
                    type: UPLOAD_PICTURE_FAILED,
                    payload: error.response.data
                })
            } else {

                dispatch({
                    type: UPLOAD_PICTURE_FAILED,
                    payload: { message: 'An Error occured!' }
                })
            }
        })
    } catch (e) {
        alert(e.message)
    }
}


export const pictureList = (user_id, page, renew = false) => async (dispatch, getState) => {


    try {
        if (renew) {
            dispatch({
                type: LIST_OF_PICTURE_RESET,
                payload: null
            })
        }
        dispatch({
            type: LIST_OF_PICTURE_REQUEST,
            payload: null
        })
        const data = {
            user_id: user_id,
            page: page
        };
        await axios.get(apiPrefix + '/picture', {
            params: data
        }).then((response) => {
            dispatch({
                type: LIST_OF_PICTURE_SUCCESS,
                payload: response.data
            })
            return true
        }).catch((error) => {
            if (error.response) {

                Swal.fire({
                    icon: 'error',
                    title: 'Gallery',
                    text: error.response.data.message,
                    confirmButtonText: 'Ok'
                })
                dispatch({
                    type: LIST_OF_PICTURE_FAILED,
                    payload: error.response.data
                })
            } else {

                dispatch({
                    type: LIST_OF_PICTURE_FAILED,
                    payload: { message: 'An Error occured!' }
                })
            }
            return false
        })
    } catch (e) {
        alert(e.message)
        return false
    }
}


export const resetPictureList = (user_id) => async (dispatch, getState) => {
    pictureList(user_id, 1, true)
}
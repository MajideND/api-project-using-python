import {USER_AUTH_FAILED, USER_AUTH_REQUEST, USER_AUTH_SUCCESS} from "./../constants/constants";

const initialState = {
    loading: false,
    success: false,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTH_REQUEST:
            return {
                loading: true,
                success: false,
                error: null
            }
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload
            }

        case USER_AUTH_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default :
            return state;
    }
}

export default authReducer;
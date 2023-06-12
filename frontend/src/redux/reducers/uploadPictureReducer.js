import { UPLOAD_PICTURE_FAILED, UPLOAD_PICTURE_REQUEST, UPLOAD_PICTURE_SUCCESS} from "../constants/constants";

const initialState = {
    loading: false,
    success: false,
    error: null
}

const uploadPictureReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_PICTURE_REQUEST:
            return {
                loading: true,
                success: false,
                error: null
            }
        case UPLOAD_PICTURE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload
            }

        case UPLOAD_PICTURE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default :
            return state;
    }
}

export default uploadPictureReducer;
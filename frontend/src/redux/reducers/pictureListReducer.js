import { LIST_OF_PICTURE_FAILED, LIST_OF_PICTURE_REQUEST, LIST_OF_PICTURE_RESET, LIST_OF_PICTURE_SUCCESS } from "../constants/constants";

const initialState = {
    loading: false,
    success: false,
    gallery: [],
    page: 1,
    error: null
}

const pictureListReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_OF_PICTURE_RESET:
            return {
                loading: true,
                success: false,
                gallery: [],
                page: 1,
                error: null
            }
        case LIST_OF_PICTURE_REQUEST:
            return {
                loading: true,
                success: false,
                gallery: state.gallery,
                page: state.page,
                error: null
            }
        case LIST_OF_PICTURE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload,
                page: state.page + 1,
                gallery: state.gallery.concat(action.payload.pictures)
            }

        case LIST_OF_PICTURE_FAILED:
            return {
                ...state,
                loading: false,
                gallery: [],
                page: 1,
                error: action.payload,
                success: false
            }

        default :
            return state;
    }
}

export default pictureListReducer;
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './redux/reducers/authReducer'
import uploadPictureReducer from './redux/reducers/uploadPictureReducer'
import pictureListReducer from './redux/reducers/pictureListReducer'

export default configureStore({
  reducer: {
    auth: authReducer,
    uploadPicture: uploadPictureReducer,
    pictureList: pictureListReducer
  },
})
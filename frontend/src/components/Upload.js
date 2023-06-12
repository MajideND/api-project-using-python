import { useRef } from "react";
import { uploadPicture } from "../redux/actions/pictureAction";
import { useDispatch, useSelector } from "react-redux";

const Upload = () => {
    const dispatch = useDispatch();
    const { success } = useSelector(state => state.auth)

    const pictureRef = useRef();

  
    const handleUpload = (e) => {
        let selectedFile = pictureRef.current.files[0];
        dispatch(uploadPicture(success.user.username,selectedFile))
    }
    return (
        <>
            <div className="center-main">
                <div className="text-center">
                    <h1>Upload a new picture</h1>
                </div>
                <div className="form">
                    <input type="file" className="fileselector" ref={pictureRef} accept="image/png, image/gif, image/jpeg"></input>
                    <button onClick={handleUpload} type="button">Upload</button>
                </div>
            </div>
        </>
    );
}

export default Upload;
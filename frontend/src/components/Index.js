import { useDispatch, useSelector } from "react-redux";
import { pictureList, resetPictureList } from "../redux/actions/pictureAction";
import { useEffect } from "react";



const Index = () => {
    const dispatch = useDispatch();
    const { gallery, loading, success, page } = useSelector(state => state.pictureList)

    const auth = useSelector(state => state.auth)
    const successAuth = auth.success
    const username = successAuth.user.username
    const user_id = successAuth.user.id

    const uploadDir = "/upload/" + username + "/"
    const totalDataNumber = success ? success.total : false;
    let hasMorePageClass = null
    let noDataError = 'display-none';
    if (totalDataNumber) {
        if ((totalDataNumber / 8) <= page - 1) {
            hasMorePageClass = 'display-none'

        }
    }
    if (parseInt(totalDataNumber) === 0) {
        console.log('eee')
        hasMorePageClass = 'display-none'
        noDataError = false
    }

    const getPictureList = () => {
        dispatch(pictureList(user_id, page))
    }

    const resetPicture = () => {
        dispatch(resetPictureList(user_id))
    }
    useEffect(() => {
        if (!totalDataNumber) {
            getPictureList()
        } else {
            resetPicture()
        }
    }, [])


    const items = []
    gallery && gallery.forEach(picture => items.push(
        <div className="col-3 text-center" key={picture.id}>
            <a href={uploadDir + picture.url} target='_blank' rel="no-follow noreferrer">
                <img alt="Uploaded in Gallery" src={uploadDir + picture.url} />
            </a>

        </div>
    ))

    let loadMoreText = "Load more"

    if (loading) {
        loadMoreText = "Please wait ..."
    }
    return (
        <>
            <div className="row">
                {items}
            </div>
            <div>
                <button className={"center-button " + hasMorePageClass}
                    disabled={loading ? true : false}
                    onClick={getPictureList}>{loadMoreText}</button>
            </div>
            <p>
                <span className={"red "+ noDataError}>No picture is uploaded. Please first use upload section in the menu.</span>
            </p>
        </>
    );
}

export default Index;
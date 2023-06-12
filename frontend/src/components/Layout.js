import { Outlet, Link } from "react-router-dom";
import workgeniusLogo from './../assets/workgenius.png';
import { useSelector } from "react-redux";

const Index = () => {

    const { success } = useSelector(state => state.auth)


    let menu
    if (success) {
        menu = (
            <>
                <li className="menu"><Link to="/">Your Gallery</Link></li>
                <li className="menu"><Link to="/upload">Upload a new Picture</Link></li>

            </>
        )
    } else {
        menu = (
            <>
                <li className="menu"><Link to="/login">Login</Link></li>
                <li className="menu"><Link to="/register">Register</Link></li>
            </>
        )
    }
    return (
        <>
            <ul className="menulist">
                <li className="menu"><span className="logo"><img alt="Logo" src={workgeniusLogo} /></span></li>
                <li className="menu right"><Link to="/about">About this project</Link></li>
                {menu}
            </ul>
            <Outlet />
        </>
    );
}

export default Index;
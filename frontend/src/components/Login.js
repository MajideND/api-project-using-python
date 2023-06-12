import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions/authAction";

const Login = () => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState();
    const { loading } = useSelector(state => state.auth)

    let loginText = 'Login'

    if (loading) {
        loginText = 'Please wait ...'
    }
    
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginAction(username))
    }

    return (
        <>
            <div className="center-main">
                <div className="text-center">
                    <h1>Login to your account</h1>
                </div>
                <div className="form">
                    <label>Username</label>
                    <input type="text" onChange={e => setUsername(e.target.value)}></input>
                    <button disabled={loading ? true : false} onClick={handleLogin}>{loginText}</button>
                </div>


                <p>
                    <span className="red">Disclaimer: This project doesn't have any authentication method for security. </span>
                </p>
            </div>
        </>
    );
}

export default Login;
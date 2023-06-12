import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../redux/actions/authAction";

const Register = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [fullname, setFullname] = useState();
    const { loading } = useSelector(state => state.auth)


    let registerButtonText = 'Register'

    if (loading) {
        registerButtonText = 'Please wait ...'
    }
    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registerAction(username, email, fullname))
    }

    return (
        <>
            <div className="center-main">
                <div className="text-center">
                    <h1>Register your account</h1>
                </div>
                <div className="form">
                    <label>Full Name</label>
                    <input type="text" onChange={e => setFullname(e.target.value)}></input>
                    <label>Username</label>
                    <input type="text" onChange={e => setUsername(e.target.value)}></input>
                    <label>Email</label>
                    <input type="email" onChange={e => setEmail(e.target.value)}></input>
                    <button disabled={loading ? true : false} onClick={handleRegister}>{registerButtonText}</button>
                </div>


                <p>
                    <span className="red">Disclaimer: This project doesn't have any authentication method for security. </span>
                </p>
            </div>
        </>
    );
}

export default Register;
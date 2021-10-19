import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
//
import loginImg from '../../../images/satisfaction/doctor-patient2.jpg'
//
import './Login.css'

const Login = () => {
    const {
        signInUsingGoogle,
        handleUserLogIn,
    } = useAuth();

    //for email and password
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // for data location and history
    const location = useLocation();
    const history = useHistory();
    //redirect
    const redirect_url = '/' || location.state;

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    //for password
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    // for email
    const handleEmail = e => {
        setEmail(e.target.value)
    }

    //for user Login
    const handleLogIn = () => {
        handleUserLogIn(email, password);

    }


    return (
        <div id="login">

            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-12">
                        <div className="login-form shadow-lg mt-3">
                            <h2>Login Your Account</h2>
                            <form>
                                <input
                                    onBlur={handleEmail}
                                    className="p-2 w-50 border rounded-3" type="text" placeholder="your email" required />

                                <br />
                                <br />
                                <input
                                    onBlur={handlePassword}
                                    className="p-2 w-50 border rounded-3" type="password" placeholder="password" required />
                                <br />
                                <br />
                                <input
                                    onClick={handleLogIn} className="btn btn-primary p-2 w-50 fw-bold" type="submit" value="LogIn" />
                            </form>
                            <p className="mt-5 pb-3"><strong>Fresher In MediCare?</strong>
                                <Link to="/register">
                                    Create Account
                                </Link></p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-12">
                        <div>
                            <img className="img-fluid" src={loginImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <button
                    onClick={handleGoogleLogIn}
                    className="btn btn-warning google-btn px-3 py-2"
                >Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;
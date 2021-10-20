import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
//image
import loginBanner from '../../../images/login-banner/logo-banner.jpg';
import googleLogo from '../../../images/google-logo.png';
//css file
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
                history.push(redirect_url);
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
    // const handleRegister = () =>{
    //     handleUserRegister(email,password)
    // }

    return (
        <div id="login">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="login-banner">
                            <img className="img-fluid" src={loginBanner} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="login-form mt-3">
                            <h2 className="text-center">Login Your Account</h2>
                            <div>
                                <form className="w-75 mx-auto">
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Email</label>
                                        <input
                                            onBlur={handleEmail}
                                            type="text" className="form-control" placeholder="enter your email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Password</label>

                                        <input
                                            onBlur={handlePassword}
                                            type="text" className="form-control" placeholder="password at least 6 digit" required />
                                    </div>
                                    <div>
                                        <button
                                            onClick={handleLogIn}
                                            type="submit" className="btn btn-brand fw-bold btn-lg logIn-btn w-100">LogIn</button>
                                    </div>
                                </form>
                            </div>
                            <p className="pt-3 pb-3 text-center"><strong>Fresher In MediCare?</strong>
                                <Link to="/register">
                                    Create Account
                                </Link></p>

                            <div className="text-center d-flex align-items-center justify-content-center">
                                <img src={googleLogo} className="img-fluid gl-logo me-3" alt="" />
                                <button
                                    onClick={handleGoogleLogIn}
                                    className="btn btn-primary google-btn px-3 py-2 w-50"
                                >Continue with Google</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
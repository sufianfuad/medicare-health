import React, { useState } from 'react';
//import Link
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
//image
import loginBanner from '../../images/login-banner/logo-banner.jpg';
import googleLogo from '../../images/google-logo.png';
//import css file
import './Register.css'

const Register = () => {
    const { handleUserRegister, signInUsingGoogle } = useAuth();
    //state
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    //for password
    const handlePasswordChange = e => {
        setEmail(e.target.value);
    }
    //for email
    const handleEmailChange = e => {
        setPassword(e.target.value);
    }

    //for registration
    const handleRegistration = e => {
        e.preventDefault();
        handleUserRegister(email, password);

    }
    return (
        <div className="registration-container shadow-sm">
            <div className="container">
                <div className="row pt-3 d-flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="login-banner">
                            <img className="img-fluid" src={loginBanner} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="login-form mt-3 form-bg">
                            <h2 className="text-center">Create <span className="account-color">Account</span></h2>
                            <form className="w-75 mx-auto" onSubmit={handleRegistration}>
                                <div class="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Email</label>

                                    <input
                                        onBlur=""
                                        type="text" className="form-control" placeholder="Your Name" required />
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Email</label>

                                    <input
                                        onBlur={handleEmailChange}
                                        type="text" className="form-control" placeholder="enter your email" required />
                                </div>

                                <div class="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Password</label>

                                    <input
                                        onBlur={handlePasswordChange}
                                        type="text" className="form-control" placeholder="password at least 6 digit" required />
                                </div>
                                <div>
                                    <button
                                        // onClick={handleLogIn}
                                        type="submit" className="btn btn-brand fw-bold btn-lg logIn-btn w-100">LogIn</button>
                                </div>
                            </form>
                            <p className="pt-3 pb-1 text-center">Already Have a Account? <Link to="/login">
                                <button className="btn btn-danger fw-bold">Login</button>
                            </Link></p>
                            <div className="text-center d-flex align-items-center justify-content-center">
                                <img src={googleLogo} className="img-fluid gl-logo me-3" alt="" />
                                <button
                                    onClick={signInUsingGoogle}
                                    className="btn btn-primary google-btn px-3 py-2  w-50"
                                >Continue with Google</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <div className="mt-3">
                <button
                    onClick={signInUsingGoogle}
                    className="btn btn-warning px-3 py-2 google-btn">Continue with Google</button>
            </div> */}

        </div>
    );
};

export default Register;
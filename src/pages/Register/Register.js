import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
//import Link
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
//image
import loginBanner from '../../images/login-banner/loginBanner.jpg';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
//import css file
import './Register.css'

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();


    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLogInSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    return (
        <>
            <Header></Header>
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
                                {!isLoading &&
                                    <form
                                        onSubmit={handleLogInSubmit}
                                        className="w-75 mx-auto">
                                        <div class="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Name</label>
                                            <input
                                                name="name"
                                                onBlur={handleOnBlur}
                                                // onBlur={handleOnBlur}
                                                className="form-control"
                                                placeholder="Enter your Name"
                                                required
                                            />
                                        </div>
                                        {/* === */}
                                        <div class="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Email</label>
                                            <input
                                                name="email"
                                                type="email"
                                                onBlur={handleOnBlur}
                                                // onBlur={handleOnBlur}
                                                className="form-control"
                                                placeholder="Enter your Email"
                                                required
                                            />
                                        </div>
                                        {/* === */}
                                        <div className="mb-3">
                                            <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                onBlur={handleOnBlur}
                                                // onBlur={handleOnBlur}
                                                className="form-control"
                                                placeholder="password at least 6 digit"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="formGroupExampleInput" className="form-label fw-bold">ReType Password</label>
                                            <input
                                                type="password"
                                                name="password2"
                                                onBlur={handleOnBlur}
                                                // onBlur={handleOnBlur}
                                                className="form-control"
                                                placeholder="Confirm Password"
                                            />
                                        </div>

                                        {/* == */}
                                        <div>
                                            <button
                                                // onClick={handleLogIn}
                                                type="submit" className="btn click-btn fw-bold btn-lg logIn-btn w-100">Register</button>

                                        </div>
                                        <Link
                                            to="/login">
                                            <a href="">Already Register? Login Please</a>
                                            {/* <button type="text" className="btn btn-primary text-center">New In Super Deluxe? Create A Account</button> */}
                                        </Link>
                                    </form>
                                }
                                {
                                    isLoading && <div className="text-center">
                                        <Spinner animation="border" />
                                    </div>
                                }
                                {
                                    user?.email && <div class="alert alert-success" role="alert">
                                        Successfully Created Account
                                    </div>
                                }
                                {
                                    authError && <Alert variant="danger">
                                        {authError}
                                    </Alert>
                                }

                                {/* ================= */}
                                {/* <form
                                onSubmit={handleLogInSubmit}
                                className="w-75 mx-auto"
                            > */}
                                {/* <div class="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Name
                                    </label>
                                    <input
                                        // onBlur=""
                                        onChange={handleOnChange}
                                        className="form-control"
                                        placeholder="Your Name"
                                        required />
                                </div> */}
                                {/* <div class="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Email
                                    </label>
                                    <input
                                        onChange={handleOnChange}
                                        // onBlur={handleEmailChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="enter your email"
                                        required
                                    />
                                </div> */}
                                {/* === */}
                                {/* <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleOnChange}
                                        // onBlur={handleOnBlur}
                                        className="form-control"
                                        placeholder="password at least 6 digit"
                                    />
                                </div> */}
                                {/* <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label fw-bold">ReType Password</label>
                                    <input
                                        type="password"
                                        name="password2"
                                        onChange={handleOnChange}
                                        // onBlur={handleOnBlur}
                                        className="form-control"
                                        placeholder="Confirm Password"
                                    />
                                </div> */}
                                {/* <div class="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Password
                                    </label>
                                    <input
                                        onChange={handleOnChange}
                                        // onBlur={handlePasswordChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="password at least 6 digit"
                                        required
                                    />
                                </div> */}
                                {/* <div class="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Confirm Password
                                    </label>
                                    <input
                                        onChange={handleOnChange}
                                        // onBlur={handlePasswordChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="ReType your password"
                                        required
                                    />
                                </div> */}
                                {/* <div>
                                <button
                                    // onClick={handleLogIn}
                                    type="submit"
                                    className="btn btn-brand fw-bold btn-lg logIn-btn w-100">
                                    Register</button>
                            </div> */}
                                {/* <Link
                                    to="/login"
                                > */}
                                {/* <a href="#">Already have MediCare? Please LogIn </a> */}
                                {/* <button type="text" className="btn btn-primary text-center">New In Super Deluxe? Create A Account</button> */}
                                {/* </Link>
                            </form> */}
                                {/* <p className="pt-3 pb-1 text-center">Already Have a Account? <Link to="/login">
                                <button className="btn btn-danger fw-bold">Login</button>
                            </Link>
                            </p> */}
                                {/* <div className="text-center d-flex align-items-center justify-content-center">
                                <img src={googleLogo} className="img-fluid gl-logo me-3" alt="" />
                                <button
                                    // onClick={signInUsingGoogle}
                                    className="btn btn-primary google-btn px-3 py-2  w-50"
                                >Continue with Google</button>
                            </div> */}
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
            <Footer></Footer>
        </>
    );
};

export default Register;
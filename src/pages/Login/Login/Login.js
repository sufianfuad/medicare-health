import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
//image
import loginBanner from '../../../images/login.png';
import GoogleLogo from '../../../images/google-logo.png';
//css file
import './Login.css';
import { Alert, Spinner } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const { user, doctor, loginUser, signInUsingGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData, field, value);
    }

    const handleLogInSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleLogIn = () => {
        signInUsingGoogle(location, history)
    }

    return (
        <>
            <Header></Header>
            <section id="login">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="login-form mt-3">
                                <h2 className="text-center">Log in Here !</h2>
                                <div>
                                    {/* ================================== */}
                                    <form onSubmit={handleLogInSubmit}
                                        className="w-75 mx-auto">
                                        <div class="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email Address</label>
                                            <input
                                                name="email"
                                                onBlur={handleOnChange}
                                                // onBlur={handleOnChange}
                                                className="form-control"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                onBlur={handleOnChange}
                                                // onBlur={handleOnChange}
                                                className="form-control"
                                                placeholder="password at least 6 digit"
                                            />
                                        </div>

                                        <div>
                                            <button
                                                // onClick={handleLogIn}
                                                type="submit"
                                                className="btn btn-brand fw-bold btn-lg logIn-btn w-100">Login</button>
                                        </div>
                                        <Link
                                            to="/register"
                                        >
                                            <a href="#">New In MediCare? Create Account</a>
                                        </Link>
                                    </form>
                                    {
                                        isLoading && <div className="text-center">
                                            <Spinner animation="border" />
                                        </div>
                                    }
                                    {
                                        user?.email && <div className="alert alert-success" role="alert">
                                            Successfully Login
                                        </div>
                                    }
                                    {
                                        authError && <Alert variant="danger">
                                            {authError}
                                        </Alert>
                                    }
                                </div>
                                {/* ============== */}
                                <p className="text-center py-3">---------------------</p>
                                <div className="login">
                                    <div className="container text-center mt-2">
                                        <button
                                            // onClick={handleGoogleLogin}
                                            onClick={handleGoogleLogIn}
                                            className="btn sign-btn"
                                        >
                                            <div className="g-logo-holder">
                                                <img
                                                    src={GoogleLogo}
                                                    alt="Google" />
                                            </div>
                                            <div className="sign-text">Sign in with Google</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="login-banner">
                                <img className="img-fluid" src={loginBanner} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Login;
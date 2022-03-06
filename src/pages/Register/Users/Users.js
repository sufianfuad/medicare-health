import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
//Image file
import loginBanner from '../../../images/login-banner/loginBanner.jpg';

//CSS
import './Users.css';

const Users = () => {
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
            <div className="registration-container shadow-sm">
                <div className="container">
                    <div className="row pt-3 d-flex align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="register-banner">
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
                                {/* {
                                    user?.email && <div class="alert alert-success" role="alert">
                                        Successfully Created Account
                                    </div>
                                } */}
                                {
                                    authError && <Alert variant="danger">
                                        {authError}
                                    </Alert>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Users;
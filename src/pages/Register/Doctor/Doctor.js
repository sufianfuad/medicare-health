import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Row, Col, Button, Spinner, Alert } from 'react-bootstrap';
import { Input } from '@mui/material';
// import doc from "../../../images/adddoctor/doctor.png";
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
//CSS ================
import './Doctor.css';

const Doctor = () => {
    //import from firebase authentication 
    const [loginData, setLoginData] = useState({});
    const { doctor, registerDoctor, isLoading } = useAuth();
    //==============
    const history = useHistory();

    //use for save data
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleOnSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did not match');
            return;
        }
        registerDoctor(loginData.email, loginData.password, loginData.name, loginData.number, history)
        e.preventDefault();
    }
    //use for save data
    // const handleOnBlur = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newLogInData = { ...loginData };
    //     newLogInData[field] = value;
    //     setLogIndata(newLogInData);

    //     console.log(newLogInData);
    // }
    //handle onSubmit this one is use for prevent reload the page
    // const handleOnSubmit = e => {
    //     if (loginData.password !== loginData.password2) {
    //         alert('Password Missmatch');
    //         return
    //     }
    //     registerDoctor(loginData.email, loginData.password, loginData.name, loginData.number, history);
    //     e.preventDefault();
    // }

    // redirect
    // const location = useLocation();
    // const history = useHistory();

    // const redirect_uri = location.state?.from || '/';
    // // handle google signup
    // const handleGoogleSignIn= () => {
    //   signInUsingGoogle()
    //       .then(result => {
    //           history.push(redirect_uri);
    //       })
    // } 
    return (
        <>
            <div className="doctor-container">
                <div className="container">
                    <div className="row pt-3 d-flex align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="register-banner">
                                {/* <img className="img-fluid" src={loginBanner} alt="" /> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="doctor-form mt-3 form-bg">
                                <h2 className="text-center">Create <span className="account-color">Account</span></h2>

                                {!isLoading &&
                                    <form
                                        onSubmit={handleOnSubmit}
                                        className="w-75 mx-auto">
                                        <div class="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label fw-bold textColor">Your Name</label>
                                            <input
                                                name="name"
                                                onBlur={handleOnBlur}

                                                className="form-control"
                                                placeholder="Enter your Name"
                                                required
                                            />
                                        </div>
                                        {/* === */}
                                        <div class="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label fw-bold textColor">Your Email</label>
                                            <input
                                                name="email"
                                                type="email"
                                                onBlur={handleOnBlur}

                                                className="form-control"
                                                placeholder="Enter your Email"
                                                required
                                            />
                                        </div>
                                        <div class="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label fw-bold textColor">Number</label>
                                            <input
                                                type="number"
                                                onBlur={handleOnBlur}

                                                className="form-control"
                                                placeholder="your Number"
                                                required
                                            />
                                        </div>
                                        {/* === */}
                                        <div className="mb-3">
                                            <label htmlFor="formGroupExampleInput" className="form-label fw-bold textColor">Your Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                onBlur={handleOnBlur}
                                                className="form-control"
                                                placeholder="password at least 6 digit"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="formGroupExampleInput" className="form-label fw-bold textColor">ReType Password</label>
                                            <input
                                                type="password"
                                                name="password2"
                                                onBlur={handleOnBlur}

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
                                {/* {
                                    authError && <Alert variant="danger">
                                        {authError}
                                    </Alert>
                                } */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Doctor;
import React, { useState } from 'react';
//import Link
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

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
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-12">
                        <h2>Create <span className="account-color">Account</span></h2>
                        <div className="registration-form">
                            <form onSubmit={handleRegistration}>
                                <input
                                    onBlur={handleEmailChange}
                                    className="p-2 w-50 border rounded-3" type="text" placeholder="your email" required />
                                <br />
                                <br />
                                <input
                                    onBlur={handlePasswordChange}
                                    className="p-2 w-50 border rounded-3" type="password" placeholder="give your password" required />
                                <br />
                                <br />
                                <input
                                    onBlur={handlePasswordChange}
                                    className="p-2 w-50 border rounded-3" type="password" placeholder="confirm password" />
                                <br />
                                <br />
                                <div className="d-flex align-items-center justify-content-center">
                                    <input className="p-2 w-25 me-2 border rounded-3" type="text" placeholder="your address" />
                                    <br />
                                    <input className="p-2 w-25 border rounded-3" type="text" placeholder="your phone" />
                                </div>
                                <br />
                                <br />
                                <input className="p-2 w-25 btn btn-primary fw-bold" type="submit" value="Sign In" />
                            </form>

                        </div>
                        <p>Already Have a Account? <Link to="/login">
                            <button className="btn btn-danger fw-bold">Login</button>
                        </Link></p>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <button
                    onClick={signInUsingGoogle}
                    className="btn btn-warning px-3 py-2 google-btn">Continue with Google</button>
            </div>

        </div>
    );
};

export default Register;
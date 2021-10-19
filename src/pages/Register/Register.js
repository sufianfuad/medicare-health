import React from 'react';
//import Link
import { Link } from 'react-router-dom';

//import css file
import './Register.css'

const Register = () => {
    return (
        <div className="registration-container shadow-sm">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="registration-form">
                            <h2>Create Account</h2>
                            <form onSubmit="">
                                <input className="p-2 w-50" type="text" placeholder="your email" />
                                <br />
                                <br />
                                <input className="p-2 w-50" type="password" placeholder="give your password" />
                                <br />
                                <br />
                                <input className="p-2 w-50" type="password" placeholder="confirm password" />
                                <br />
                                <br />
                                <div className="d-flex align-items-center justify-content-center">
                                    <input className="p-2 w-25 me-2" type="text" value="" placeholder="your address" />
                                    <br />
                                    <input className="p-2 w-25" type="text" value="" placeholder="your phone" />
                                </div>
                                <br />
                                <br />
                                <input className="p-2 w-25" type="submit" value="Sign In" />
                            </form>
                            <p>Already Have a Account? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <button className="btn btn-warning px-3 py-2">Continue with Google</button>
            </div>

        </div>
    );
};

export default Register;
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
//
import loginImg from '../../../images/satisfaction/doctor-patient2.jpg'
//
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_url = '/' || location.state;

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }

    const handleUsingEmail = e => {
        console.log(e.target.value);
    }

    const handleLogIn = e => {
        console.log('submitted')
    }






    return (
        <div id="login">
            <h2>Login Your Account</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-12">
                        <div className="login-form shadow-lg mt-3">
                            <form >
                                {/* <div>
                                    <label htmlFor="" className="email form-label">Your Name</label>
                                </div> */}
                                <br />
                                <input onSubmit={handleUsingEmail} className="p-2 w-50" type="text" placeholder="your email" />

                                <br />
                                <br />
                                <input className="p-2 w-50" type="password" />
                                <br />
                                <br />
                                <input className="btn btn-primary p-2 w-50" type="submit" value="LogIn" />
                            </form>
                            <p>Fresher In MediCare?
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
                    className="btn btn-warning"
                >Login with Google</button>
            </div>
        </div>
    );
};

export default Login;
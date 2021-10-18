import React from 'react';
import useAuth from '../../../hooks/useAuth';
//
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    return (
        <div id="login">
            <h2>Login Please</h2>
            <button
                onClick={signInUsingGoogle}
                className="btn btn-warning"
            >Login with Google</button>
        </div>
    );
};

export default Login;
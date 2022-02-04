import React from 'react';
import { Link } from 'react-router-dom';

import error from '../../images/error/error_1.gif';

import './ErrorFound.css';

const ErrorFound = () => {
    return (
        <div className='text-center'>
            <div>
                <img src={error} alt="" />
            </div>
            <Link to="/home">
                <button className="btn regular-btn px-3 py-2 mb-5">Back Home</button>
            </Link>
        </div>
    );
};

export default ErrorFound;
import React from 'react';
import { Link } from 'react-router-dom';

import './SingleService.css'

const SingleService = ({ service }) => {
    const { name, img, description } = service;
    return (
        <div className="col-lg-4 col-md-4 col-12">
            <div className="service-card">
                <div className="service-img">
                    <img src={img} alt="" />
                </div>
                <div className="service-info p-3">
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
                <div className="details-btn">
                    <Link to="/services">
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;
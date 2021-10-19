import React from 'react';

import img5 from '../../images/about/banner2.jpg';

import './About.css'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="about-container">
                <div className="container">
                    <div className="row  d-flex align-items-center">
                        <div className="col-lg-5 col-md-5 col-sm-6">
                            <div className="about-info">
                                <h2>Medical Services That You Can Trust</h2>
                                <p>We offer unique services. Our goal is to offer you what it takes to stay healthy and independent.</p>
                                <div>
                                    <Link to="/appointment">
                                        <button className="btn read-btn px-3 py-2 shadow-sm">Read More</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-6">
                            <div className="about-img">
                                <img src={img5} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
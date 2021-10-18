import React from 'react';

import './Footer.css'

import footerLogo from '../../../images/logo.jpg';

const Footer = () => {
    return (
        <div className="footer-container text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col">
                        <h2>Hello</h2>
                        <h3>Our Services</h3>



                    </div>
                    <div className="col-md-3">
                        <h2>Hello</h2>
                        <h3>Contact details</h3>





                    </div>
                    <div className="col-md-3 col">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="/home" className="menu">Home</a></li>
                                <li><a href="/home" className="menu">About</a></li>
                                <li><a href="/home" className="menu">Services</a></li>
                                <li><a href="/home" className="menu">Profession</a></li>
                                <li><a href="/home" className="menu">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col">
                        <div className="footer-details mt-5">
                            <div className="footer-logo mb-2">
                                <img src={footerLogo} alt="" />
                            </div>
                            <div>
                                <h2 className="footer-title">MediCare</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque repellendus illum harum dolores tempora ipsam temporibus unde at excepturi ut.
                                </p>
                            </div>
                            <div>
                                <button className="btn btn-warning px-3 py-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="">Copyright &copy; All Right Reserved, 2021</p>
            </div>
        </div>
    );
};

export default Footer;
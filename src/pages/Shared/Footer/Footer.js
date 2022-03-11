import React from 'react';
//logo
import footerLogo from '../../../images/logo.jpg';
//Image
// import appStore from '../../../images/logo/app-store.png';
import playStore from '../../../images/logo/play-store.png';
import sslCommerze from '../../../images/ssl-commerce.1d268dce.png';

//CSS
import './Footer.css';
//react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookSquare, faInstagram, faLinkedinIn, faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer-container text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-3 col-6">
                        <div className="footer-details mt-5">
                            <div className="footer-logo mb-2">
                                <img src={footerLogo} alt="" />
                            </div>
                            <div>
                                <h2 className="footer-title">MediCare</h2>
                                <p>
                                    “ We offer unique services. Our goal is to offer you what it takes to stay healthy and independent. ”
                                </p>
                            </div>
                            <div>
                                <button className="local-btn px-3 py-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 col-6">
                        <div className="footer-menu">
                            <div>
                                <h4>Our Services</h4>
                                <ul>
                                    <li><a href="/home" className="menu">Medicine</a></li>
                                    <li><a href="/home" className="menu">Covid Unit</a></li>
                                    <li><a href="/home" className="menu">Surgical Service</a></li>
                                    <li><a href="/home" className="menu">Cardiology</a></li>
                                    <li><a href="/home" className="menu">Orthopedics</a></li>
                                    <li><a href="/home" className="menu">Neurology</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 col-6">
                        <div className="footer-menu">
                            <h4>Contact Us</h4>
                            <div className="contact-info">
                                <h6>Open 24 Hours.</h6>
                                <p><small>We provide full time service our patient</small></p>
                                <p>Phone: +012345657</p>
                                <p>Email: <strong>medicare21@gmail.com</strong></p>
                                <p> <span className="follow-icon"><FontAwesomeIcon icon={faHandPointRight} /></span> Follow </p>
                                <div className="icons-container d-flex">
                                    <div className="footerIcon">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </div>
                                    <div className="footerIcon">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </div>
                                    <div className="footerIcon">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                    <div className="footerIcon">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        {/* footer menus */}
                        <div className="footer-menu">
                            <div className="footer-links">
                                <h3>Download Link</h3>
                                <div className="download-btn">
                                    {/* <img src={appStore} alt="" /> */}
                                    <img src={playStore} alt="" />
                                    <img src={sslCommerze} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <p className="text-center">Copyright &copy; All Right Reserved Medicare, 2022</p>
            </div>
        </div>
    );
};

export default Footer;
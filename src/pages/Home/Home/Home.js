import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../Contact/Contact';
import Sanitizer from '../../Sanitizer/Sanitizer';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
//

import './Home.css';

const Home = () => {

    const [homeService, setHomeService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/treatments')
            .then(res => res.json())
            .then(data => setHomeService(data))
    }, [])

    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <div className="home-container container">
                <div className="row ">
                    <div className="text-center pb-3">
                        <div className="services-title">
                            <h2>Our Services</h2>
                        </div>
                    </div>
                    {
                        homeService.slice(0, 6).map(
                            service =>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="service-card">
                                        <div className="p-3">
                                            <div className="service-img">
                                                <img src={service.img} alt="" />
                                            </div>
                                            <div className="service-info pt-3">
                                                <h4><span className="service-title fw-bold">{service.name}</span></h4>
                                                <p><span className="text"><strong>About <small>{service.name}: </small></strong></span> {service.description}</p>
                                            </div>
                                            <Link to={`/sitbooking/${service.id}`}>
                                                <button className="btn px-3 py-2 details">Details</button>
                                            </Link>
                                            <div className="">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                    }
                </div>
            </div>
            {/* <Services></Services> */}
            <Sanitizer></Sanitizer>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
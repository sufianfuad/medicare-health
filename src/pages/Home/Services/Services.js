import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import SingleService from '../SingleService/SingleService';

import './services.css';

//react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    // use state
    //treatments k rendered kore UI tekhe
    const [services, setServices] = useState([]);

    const loader = <FontAwesomeIcon icon={faSpinner} />

    useEffect(() => {
        fetch('http://localhost:7000/treatments')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <>
            <Header />
            <div id="services" className="services-container">
                <div className="text-center pb-3">
                    <div className="services-title">
                        <h2>Our Services</h2>
                    </div>
                </div>

                <div className="container">
                    <div className="row g-4">
                        {
                            services.length === 0 ? (
                                <div className='text-center mt-5'>
                                    <span className='spinner'>{loader}</span>
                                </div>
                            )
                                :
                                (
                                    services.map(service => <SingleService
                                        key={service.id}
                                        service={service}
                                    ></SingleService>)
                                )
                        }
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Services;
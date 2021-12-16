import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

import './services.css'

const Services = () => {
    // use state
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/treatments')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className="services-container">
            <div className="text-center pb-3">
                <div className="services-title">
                    <h2>Our Services</h2>
                </div>
            </div>

            <div className="container">
                <div className="row g-4">
                    {
                        services.map(service => <SingleService
                            key={service.id}
                            service={service}
                        ></SingleService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
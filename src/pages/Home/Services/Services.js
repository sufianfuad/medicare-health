import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

import './services.css'

const Services = () => {
    // use state
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className="services-container">
            <h2 className="services-title">Our Services</h2>
            <div className="container">
                <div className="row">
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
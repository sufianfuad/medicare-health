import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

import './services.css'

const Services = () => {
    // use state
    //treatments k rendered kore UI tekhe
    const [services, setServices] = useState([]);

    // const [pageCount, setPageCount] = useState(0);

    // const [page, setPage] = useState(0)
    // const size = 10;

    useEffect(() => {
        fetch('http://localhost:7000/treatments')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                // const count = data.count;
                // const pageNumber = Math.ceil(count / size);
                // setPageCount(pageNumber)
            })
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
                    <div className="pagination">
                        {/* {
                            [...Array(pageCount).keys()].map(number => <button
                                className={number === page ? 'selected' : ''}
                                key={number}
                                onClick={() => setPage(number)}
                            >{number}</button>)
                        } */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;
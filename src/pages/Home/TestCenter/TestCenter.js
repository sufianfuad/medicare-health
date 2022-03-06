import React, { useState, useEffect } from 'react';

import SingleTestCenter from '../SingleTestCenter/SingleTestCenter';

//CSS
import './TestCenter.css';

const TestCenter = () => {
    const [testCenters, setTestCenters] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/test_center',)
            .then(res => res.json())
            .then(data => setTestCenters(data))
    }, []);
    return (
        <div className="sanitizer-container">
            <div className="text-center">
                <div className="services-title">
                    <h3>Covid Test Center</h3>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row centers-details d-flex align-items-center justify-content-center">
                    {
                        testCenters?.map(center =>
                            <SingleTestCenter
                                key={center._id}
                                center={center}
                            >
                            </SingleTestCenter>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TestCenter;
import React, { useState, useEffect } from 'react';

import SingleTestCenter from '../SingleTestCenter/SingleTestCenter';

//CSS
import './TestCenter.css';

//react font awesome LINK
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const TestCenter = () => {
    //test Center state 
    const [testCenters, setTestCenters] = useState([]);

    //loading er jonno
    const loader = <FontAwesomeIcon icon={faSpinner} />

    useEffect(() => {
        fetch('https://damp-refuge-56099.herokuapp.com/test_center',)
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
                        testCenters.length === 0 ? (
                            <div className='text-center mt-5'>
                                <span className='spinner'>{loader}</span>
                            </div>
                        ) :
                            (
                                testCenters?.map(center =>
                                    <SingleTestCenter
                                        key={center._id}
                                        center={center}
                                    >
                                    </SingleTestCenter>
                                )
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default TestCenter;
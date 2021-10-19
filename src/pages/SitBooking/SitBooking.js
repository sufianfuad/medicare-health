import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './SitBooking.css';


const SitBooking = () => {

    const { bookingId } = useParams();

    const [details, setDetails] = useState([]);
    const [singleDetails, setSingleDetails] = useState({})

    //data load
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    //call after data load
    useEffect(() => {
        const foundDetails = details?.find(dt => dt.id == bookingId)
        setSingleDetails(foundDetails);
    }, [details])



    return (
        <div className="booking-container">
            <div className="container">
                <h2>Patient Sit Booking {bookingId}</h2>
                <div className="row p-3">

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div>
                            <img src={singleDetails?.img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="details-info p-5 shadow-sm">
                            <h3>{singleDetails?.name}</h3>
                            <h5>Head of <small>{singleDetails?.name}:
                            </small> {singleDetails?.deptHead}</h5>
                            <p>Email: {singleDetails?.email}</p>
                            <p>{singleDetails?.description}</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SitBooking;

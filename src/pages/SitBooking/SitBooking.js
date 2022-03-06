import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './SitBooking.css';


const SitBooking = () => {

    const { bookingId } = useParams();

    const [details, setDetails] = useState({});
    // const [singleDetails, setSingleDetails] = useState({});

    //data load
    useEffect(() => {
        fetch(`http://localhost:7000/treatments/${bookingId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    //call after data load
    // useEffect(() => {
    //     const foundDetails = details?.find(dt => dt.id === bookingId)
    //     setSingleDetails(foundDetails);
    // }, [details])

    return (
        <>
            <Header />
            <div className="booking-container">
                <div className="container">
                    <div className="row p-3 d-flex align-items-center shadow-lg body">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="book-img">
                                <img src={details?.img} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="details-info p-5">
                                <h3 className="animate__animated animate__backInDown">{details?.name}</h3>

                                <h5>Head of <small>{details?.name}:
                                </small> {details?.deptHead}</h5>

                                <p>Email: {details?.email}</p>
                                <p>{details?.description}</p>

                                <Link to="/appointment">
                                    <button className="btn btn-success fw-bold px-3 py-2">Book Appointment</button>
                                </Link>
                            </div>
                        </div>
                        <Link to="/home">
                            <div className='back-home'>
                                Home
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default SitBooking;

import React from 'react';

import { Link } from 'react-router-dom';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
//CSS file
import './SingleDoctor.css';

const SingleDoctor = ({ doctor }) => {
    const { doctorName, doctorEmail, doctorPic } = doctor;

    const appointment = <FontAwesomeIcon icon={faHospitalUser} />
    return (
        <>
            <div className="col-lg-4 col-md-4 col-12 col-xm-12">
                {" "}
                <div className="doctor-card shadow-lg">
                    <div className="dCard">
                        <div className="doctor-img">
                            <img src={`data:image/jpeg;base64,${doctorPic}`} alt="" />
                        </div>
                        <div className="doctor-info pt-3">
                            <h4><span className="service-title fw-bold">{doctorName}</span></h4>
                            <p><span className="text"><strong>Email: <small>{doctorEmail}</small></strong></span></p>
                            <p>Contact No: 0199999999</p>
                            {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                            <Link to="/appointment">
                                <button className="btn btn-primary mb-2 px-3 py-2"><span className='appointment-icon'>{appointment}</span> Take Appointment</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleDoctor;
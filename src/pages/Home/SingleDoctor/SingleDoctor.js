import React from 'react';
import { Grid } from '@mui/material';

const SingleDoctor = ({ doctor }) => {
    const { doctorName, doctorEmail, doctorPic } = doctor;
    return (
        // <Grid item xs={12} sm={6} md={4}>

        // </Grid>
        <div className="col-lg-4 col-md-4 col-12">
            <div className="service-card">
                <div className="p-3">
                    <div className="service-img">
                        <img src={`data:image/jpeg;base64,${doctorPic}`} alt="" />
                    </div>
                    <div className="service-info pt-3">
                        <h4><span className="service-title fw-bold">{doctorName}</span></h4>
                        <p><span className="text"><strong>Email <small>{doctorEmail}: </small></strong></span></p>
                        <p>Contact No: 0199999999</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, ipsa facere! Voluptatem enim odit, consequuntur fugiat cupiditate at quia nam.</p>
                    </div>
                    {/* <Link to={`/sitbooking/${id}`}>
                        <button className="btn px-3 py-2 details">Details</button>
                    </Link> */}
                    <div className="">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDoctor;
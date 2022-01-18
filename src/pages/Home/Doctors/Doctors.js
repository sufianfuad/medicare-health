import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import './Doctors.css';
import SingleDoctor from '../SingleDoctor/SingleDoctor';

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/add_doctor')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <section className='doctors-container text-center '>
            <div className='services-title'>
                <h2> Our Doctors {doctors.length}</h2>
            </div>
            {/* <Container>
                <Grid container spacing={2}>

                </Grid>
            </Container> */}
            <div className="container">
                <div className="row g-4 p-5">
                    {
                        doctors.map(doctor => <SingleDoctor
                            key={doctor._id}
                            doctor={doctor}
                        ></SingleDoctor>)
                    }
                </div>

            </div>
        </section>

    );
};

export default Doctors;
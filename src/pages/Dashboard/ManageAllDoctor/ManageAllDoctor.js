import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';


import './ManageAllDoctor.css';
import ManageDoctors from './ManageDoctors/ManageDoctors';

const ManageAllDoctor = () => {
    const [allDoctors, setAllDoctor] = useState([]);

    // const [doctorID, setDoctorId] = useState('');

    // const handleDoctorId = id => {
    //     setDoctorId(id)
    // }
    useEffect(() => {
        fetch('http://localhost:7000/allDoctors')
            .then(res => res.json())
            .then(data => setAllDoctor(data))
    }, []);
    console.log(allDoctors);

    const handleDeleteDoctor = id => {
        const proceed = window.confirm('Are you sure, want to delete doctor')
        if (proceed) {
            const url = `http://localhost:7000/add_doctor/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingDoctor = allDoctors.filter(dr => dr._id !== id);
                        setAllDoctor(remainingDoctor);
                    }
                });
        }
    }
    return (
        <section>
            <div className='container'>
                <h2 className='text-center fw-bold mt-5'>Total Doctor Here {allDoctors.length}</h2>

                <div className="row">
                    {allDoctors.length === 0 ? (
                        <div className="text-center loader">
                            <Spinner animation="border" />
                        </div>
                    ) : (

                        allDoctors.map((doctor) => (
                            <ManageDoctors
                                key={doctor._id}
                                doctor={doctor}
                                handleDeleteDoctor={handleDeleteDoctor}
                            ></ManageDoctors>
                        ))

                    )}
                </div>
            </div>
        </section>
    );
};

export default ManageAllDoctor;
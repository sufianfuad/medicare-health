import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import AllAppointments from './AllAppointments/AllAppointments';

const ManageAllAppointment = () => {
    const [allAppointments, setAllAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/allAppointments')
            .then(res => res.json())
            .then(data => {
                setAllAppointments(data)
            })
    }, []);
    //DELETE APPOINTMENT
    return (
        <div className='ManageTreatments-container'>
            <div className="container">
                <div className="dash-content-top">
                    <h2 className='text-center pb-3'>Total Appointment <span className='num-color'>{allAppointments.length}</span></h2>
                </div>
                <div className="manage-box">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>SI</th>
                                <th>Patient Name</th>
                                <th>TreatMent Service</th>
                                <th>Email</th>
                                <th>Time</th>
                                <th>Action</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allAppointments.length === 0 ? (
                                    <tr>
                                        <td className="text-center loading-color" colSpan="5">
                                            Loading...
                                        </td>
                                    </tr>
                                ) : (
                                    allAppointments.map((allAppointment, index) => (
                                        <AllAppointments
                                            index={index}
                                            key={allAppointment._id}
                                            allAppointment={allAppointment}
                                        >

                                        </AllAppointments>
                                    ))
                                )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllAppointment;
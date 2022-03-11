import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import AllAppointments from './AllAppointments/AllAppointments';

const ManageAllAppointment = () => {
    const [allAppointments, setAllAppointments] = useState([]);

    useEffect(() => {
        fetch('https://damp-refuge-56099.herokuapp.com/allAppointments')
            .then(res => res.json())
            .then(data => {
                setAllAppointments(data)
            })
    }, []);
    //DELETE Single APPOINTMENT
    const handleDeleteAppointment = id => {
        const proceed = window.confirm('Are you sure, want to delete this profile')
        if (proceed) {
            const url = `https://damp-refuge-56099.herokuapp.com/appointments/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingAppointment = allAppointments.filter(ap => ap._id !== id);
                        setAllAppointments(remainingAppointment);
                    }
                });
        }
    }
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
                                <th>Status</th>
                                <th>Action</th>
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
                                            handleDeleteAppointment={handleDeleteAppointment}
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
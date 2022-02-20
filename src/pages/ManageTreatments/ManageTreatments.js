import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import TreatmentTable from '../TreatmentTable/TreatmentTable';

import './ManageTreatments.css';

const ManageTreatments = () => {
    const [manageTreatment, setManageTreatment] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/treatments')
            .then(res => res.json())
            .then(data => setManageTreatment(data))
    }, []);
    //DELETE treatment
    const handleDeleteTreatment = (e, id) => {
        const proceed = window.confirm('Are you sure, You want to delete this services')
        if (proceed) {
            const url = `http://localhost:7000/treatments/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainTreatment = manageTreatment.filter(tm => tm._id !== id)
                        setManageTreatment(remainTreatment)
                    }
                })
            // .then((res) => res.json())
            // .then((result) => {
            //     if (result) {
            //         e.target.parentNode.style.display = 'none';
            //     }
            // });
        }
    }
    return (
        <div className="ManageTreatments-container">
            <div className="container">
                <div className="dash-content-top">
                    <h1>Medicare Treatments Available {manageTreatment.length}</h1>
                </div>
                <div className="manage-box">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Treatment Name</th>
                                <th>Treatment Text</th>
                                <th>Treatment Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {manageTreatment.length === 0 ? (
                                <tr>
                                    <td className="text-center" colSpan="5">
                                        Loading...
                                    </td>
                                </tr>
                            ) : (
                                manageTreatment.map((treatments, index) => (
                                    <TreatmentTable
                                        index={index}
                                        key={treatments._id}
                                        treatments={treatments}
                                        handleDeleteTreatment={handleDeleteTreatment}
                                    />
                                ))
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>

        </div>
    );
};

export default ManageTreatments;
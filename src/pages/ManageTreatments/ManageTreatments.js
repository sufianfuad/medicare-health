import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import TreatmentTable from '../TreatmentTable/TreatmentTable';

import './ManageTreatments.css';

const ManageTreatments = () => {
    const [manageTreatment, setManageTreatment] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/treatments')
            .then(res => res.json())
            .then(data => setManageTreatment(data.treatments))
    }, []);
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
                                    <TreatmentTable index={index} key={treatments._id} treatments={treatments} />
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
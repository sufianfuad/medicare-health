import React from 'react';

//react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const AllAppointments = ({ allAppointment, index }) => {
    const { patientName, serviceName, time, email, phone } = allAppointment;

    // react font awesome
    const dltIcon = <FontAwesomeIcon icon={faTrashAlt} />

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{patientName}</td>
            <td>{serviceName}</td>
            <td>{email}</td>
            <td>{time}</td>
            <td>
                <button className="btn-delete">
                    <span className="icon px-1">{dltIcon}</span>
                </button>
            </td>
            <td>{allAppointment.payment ? 'Paid'
                : 'Due'
            }</td>
        </tr>
    );
};

export default AllAppointments;
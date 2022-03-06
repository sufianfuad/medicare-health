import React from 'react';

//react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

//CSS
import './AllAppointments.css';

const AllAppointments = ({ allAppointment, index, handleDeleteAppointment }) => {
    const { patientName, serviceName, time, email, phone, _id } = allAppointment;

    // react font awesome
    const dltIcon = <FontAwesomeIcon icon={faTrashAlt} />

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{patientName}</td>
            <td>{serviceName}</td>
            <td>{email}</td>
            <td>{time}</td>
            <td>{allAppointment.payment ?

                <div className='paid'>
                    <span>Paid</span>
                </div>

                :
                <div className='due'>
                    <span>Due</span>
                </div>
            }</td>
            <td>
                <button
                    // onClick={() => handleDeleteProfile(_id)}
                    onClick={() => handleDeleteAppointment(_id)}
                    className="btn-delete">
                    <span className="icon px-1">{dltIcon}</span>
                </button>
            </td>

        </tr>
    );
};

export default AllAppointments;
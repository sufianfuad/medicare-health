import React from 'react';
//react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
//css
import './TreatmentTable.css';
const TreatmentTable = ({ treatments, index, handleDeleteTreatment }) => {

    const { name, description, email, _id } = treatments;
    // react font awesome
    const dltIcon = <FontAwesomeIcon icon={faTrashAlt} />


    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{description.slice(0, 100)}</td>
            <td>{email}</td>
            <td>
                <button
                    onClick={(event) => handleDeleteTreatment(event, _id)}
                    className="btn-delete"
                >
                    {/* <span className="icon px-1">Delete</span> */}
                    <span className="icon px-1">{dltIcon}</span>
                </button>
            </td>
        </tr>
    );
};

export default TreatmentTable;
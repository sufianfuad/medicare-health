import React from 'react';
//react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
//css
import './TreatmentTable.css';
const TableRow = ({ treatments, index }) => {

    const { name, description, email, _id } = treatments;
    // react font awesome
    const dltIcon = <FontAwesomeIcon icon={faTrashAlt} />

    //DELETE order
    const handleDeleteProduct = (event, id) => {
        const proceed = window.confirm('Are you sure, You want to delete Products')
        if (proceed) {
            const url = `http://localhost:7000/treatments/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result) {
                        event.target.parentNode.style.display = 'none';
                    }
                });
        }
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{description.slice(0, 100)}</td>
            <td>{email}</td>
            <td>
                <button
                    onClick={(event) => handleDeleteProduct(event, _id)}
                    className="btn-delete"
                >
                    {/* <span className="icon px-1">Delete</span> */}
                    <span className="icon px-1">{dltIcon}</span>
                </button>
            </td>
        </tr>
    );
};

export default TableRow;
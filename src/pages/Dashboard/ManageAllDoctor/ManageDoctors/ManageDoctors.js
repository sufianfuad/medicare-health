import React from 'react';

//react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ManageDoctors = ({ doctor, handleDeleteDoctor }) => {

    const { _id, doctorName, doctorEmail, doctorPic } = doctor;

    // react font awesome
    const dltDoctor = <FontAwesomeIcon icon={faTrashAlt} />
    const addFav = <FontAwesomeIcon icon={faHeart} />
    return (
        <section className='col-lg-6 col-md-6 col-12'>

            <div className="doctorCard">
                <div >
                    <h3><span className='dr-color'>Name: </span> {doctor?.doctorName}</h3>
                    <p><span className='mail-Color fw-bold'>Doctor Email:</span> <strong>{doctor?.doctorEmail}</strong> </p>
                </div>
                <div className='mt-3 d-flex justify-content-evenly align-items-center'>
                    <button
                        onClick={() => handleDeleteDoctor(_id)}
                        className='primary-btn fw-bold'> <span className='dr-icon'>{dltDoctor}</span></button>
                    <button className='fav-btn fw-bold'> <span className='fav-icon'>{addFav}</span></button>
                </div>
            </div>
        </section>
    );
};

export default ManageDoctors;
import React from 'react';

//react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

//CSS
import './ManageProfile.css';

const ManageProfile = ({ profile, handleDeleteProfile }) => {
    const { _id } = profile;
    // react font awesome
    const dltDoctor = <FontAwesomeIcon icon={faTrashAlt} />
    // const addFav = <FontAwesomeIcon icon={faHeart} />

    return (
        <section className='col-lg-6 col-md-6 col-12'>
            <div className="profileCard m-3">
                <div >
                    <h3><span className=''>Patient: </span>{profile.name}</h3>
                    <p><span className=' fw-bold'>Email:</span> <strong>{profile?.email}</strong> </p>
                </div>
                <div>
                    <p>Fever: {profile.fever} Degree</p>
                    <p>OxygenLevel {profile.oxygenLevel}%</p>
                    <p>Water Intake {profile.waterIntake} Glass.</p>
                    <p>Symptoms {profile?.syndrome?.value}</p>
                    <div className='d-flex justify-content-left align-items-center'>
                        <p className='me-2'>Call - {profile.phone}</p>
                        <p>Gender: {profile.gender}</p>
                    </div>
                    <p>Patient Details{profile.message}</p>
                </div>
                <div className='mt-3 d-flex justify-content-evenly align-items-center'>
                    <button
                        onClick={() => handleDeleteProfile(_id)}
                        className='profile_Dlt_Btn fw-bold'> <span className='pi-icon'>{dltDoctor}
                        </span></button>

                </div>
            </div>
        </section>
    );
};

export default ManageProfile;
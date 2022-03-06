import React from 'react';

import Swal from 'sweetalert2';
import profileImg from '../../../images/logo/patient.png';
import profileImg2 from '../../../images/logo/coronavirus.png';
import profileImg3 from '../../../images/logo/drink-water.png';
import profileImg4 from '../../../images/logo/fever.png';
import profileImg5 from '../../../images/logo/oxygen-mask.png';
import profileImg6 from '../../../images/logo/sick.png';

//css file
import './SingleInfo.css';

const SingleInfo = ({ info, handleDeleteInfo }) => {

    // const [info, setUserInfo] = useState({});

    const { _id, name, email, address, age, gender, fever, syndrome, waterIntake, oxygenLevel, phone, message } = info;

    //DELETE Info
    // const handleDeleteInfo = id => {
    // const proceed = window.confirm('Are you sure, want to delete this profile')
    // if (proceed) {
    //     const url = `http://localhost:7000/user_info/${id}`;
    //     fetch(url, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.deletedCount > 0) {
    //                 alert('Deleted Successfully')
    //                 const remainingProfile = allProfiles.filter(pi => pi._id !== id);
    //                 setAllProfiles(remainingProfile);
    //             }
    //         });
    // }
    // const proceed =  Swal.fire('Are you sure, want to delete your information');
    //  window.confirm('Are you sure, want to delete your information')
    // if (proceed) {

    // Swal.fire({
    //     title: 'Are you sure?',
    //     text: "You won't be able to revert this!",
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!'
    // })
    // .then((result) => {
    //     if (result.isConfirmed) {
    //         Swal.fire(
    //             'Deleted!',
    //             'Your file has been deleted.',
    //             'success'
    //         )
    //     }
    // })
    // Swal.fire('Are you sure, want to delete your information');
    // window.confirm('Are you sure, want to delete your information')
    // if (proceed) {
    // const url = `http://localhost:7000/user_info/${id}`;
    // fetch(url, {
    //     method: 'DELETE'
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         if (data.deletedCount > 0) {
    //             Swal.fire({
    //                 title: 'Are you sure?',
    //                 text: "You want to delete your information!",
    //                 icon: 'warning',
    //                 showCancelButton: true,
    //                 confirmButtonColor: '#3085d6',
    //                 cancelButtonColor: '#d33',
    //                 confirmButtonText: 'Yes, delete it!'
    //             }).then((result) => {
    //                 if (result.isConfirmed) {
    //                     Swal.fire(
    //                         'Deleted!',
    //                         'Your info has been deleted.',
    //                         'success'
    //                     )
    //                 }
    //             })
    //             // Swal.fire({
    //             //     position: 'center',
    //             //     icon: 'success',
    //             //     title: 'Deleted successfully',
    //             //     showConfirmButton: false,
    //             //     timer: 1500
    //             // })
    //             // const remainingInfo = info.filter(info = info._id !== id);
    //             // setUserInfo(remainingInfo);
    //         }
    //     });
    // }
    // }
    return (
        <div className='col-md-6 col-lg-6 col-12'>
            {/* <div className="text-center">
                <div className="row">
                    <div className="col-md-4">
                        <div className='profileImg'>
                            <img src={profileImg} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='profileImg'>
                            <img src={profileImg3} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='profileImg'>
                            <img src={profileImg4} alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="singeInfo-card">
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='profileImg text-center'>
                        <img src={profileImg} alt="" />
                    </div>
                    <div className='profileImg text-center'>
                        <img src={profileImg2} alt="" />
                    </div>
                </div>
                <h2> Patient: {name}</h2>
                {" "}
                <div className='d-flex align-items-center justify-content-left m-2'>
                    <div className='profileImg2 me-3'>
                        <img src={profileImg4} alt="" />
                    </div>
                    <h5>Fever: {fever} Degree</h5>
                </div>
                {" "}
                <div className='d-flex align-items-center justify-content-left m-2'>
                    <div className='profileImg2 me-3'>
                        <img src={profileImg3} alt="" />
                    </div>
                    <h5>{name}'s Water Intake {waterIntake} Glass.</h5>
                </div>
                {" "}
                <div className='d-flex align-items-center justify-content-left m-2'>
                    <div className='profileImg2 me-3'>
                        <img src={profileImg5} alt="" />
                    </div>
                    <h5>Oxygen Level {oxygenLevel}%</h5>
                </div>

                <div className='d-flex align-items-center justify-content-left m-2'>
                    <div className='profileImg2 me-3'>
                        <img src={profileImg6} alt="" />
                    </div>
                    <h6>Patient Syndrome: {syndrome?.value}</h6>
                </div>
                <div className='d-flex align-items-center justify-content-left m-1 textColor'>
                    <p className='me-2'>Email: {email}</p>
                    <p>Address: {address}.</p>
                </div>
                <div className='d-flex align-items-center justify-content-left'>
                    <p className='me-2'>Age: {age} year</p>
                    <p className='me-2'>Gender: {gender}</p>
                    <p className='me-2'>Phone Number: {phone}</p>
                </div>
                <p>Details: {message}</p>
                <div>
                    <button
                        onClick={() => handleDeleteInfo(_id)}
                        className='fav-btn px-3 py-2'>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleInfo;
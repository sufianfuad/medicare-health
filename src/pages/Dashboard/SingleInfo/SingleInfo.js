import React from 'react';

import Swal from 'sweetalert2';
//css file
import './SingleInfo.css';

const SingleInfo = ({ info }) => {

    // const [info, setUserInfo] = useState({});

    const { _id, name, email, address, age, gender, fever, syndrome, waterIntake, oxygenLevel, phone, message } = info;

    //DELETE Info
    const handleDeleteInfo = id => {
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
        const url = `http://localhost:7000/user_info/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You want to delete your information!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your info has been deleted.',
                                'success'
                            )
                        }
                    })
                    // Swal.fire({
                    //     position: 'center',
                    //     icon: 'success',
                    //     title: 'Deleted successfully',
                    //     showConfirmButton: false,
                    //     timer: 1500
                    // })
                    // const remainingInfo = info.filter(info = info._id !== id);
                    // setUserInfo(remainingInfo);
                }
            });
        // }
    }
    return (
        <div className='col-md-8'>
            <div className="singeInfo-card">
                <h2> Patient Name: {name}</h2>
                <p>Email: {email}</p>
                <p>Address: {address}.</p>
                <div className='d-flex'>
                    <p className='me-2'>Age: {age} year</p>
                    <p className='me-2'>Gender: {gender}</p>
                    <p className='me-2'>Phone Number: {phone}</p>
                </div>
                <h6>Patient Syndrome: {syndrome.value}</h6>
                <p>Fever: {fever} Degree</p>
                <p>Today {name}'s Water Intake {waterIntake} L.</p>
                <p>His Oxygen Level {oxygenLevel}%</p>
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
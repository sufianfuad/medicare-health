import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleInfo from '../SingleInfo/SingleInfo';
import useAuth from '../../../hooks/useAuth';
import './MyInfo.css';

const MyInfo = () => {

    const [information, setInformation] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://damp-refuge-56099.herokuapp.com/user_info/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setInformation(data)
            })
    }, [user?.email]);

    //Delete Single Profile Data
    const handleDeleteInfo = id => {
        const proceed = window.confirm('Are you sure, want to delete this profile')
        if (proceed) {
            const url = `https://damp-refuge-56099.herokuapp.com/user_info/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingProfile = information.filter(pi => pi._id !== id);
                        setInformation(remainingProfile);
                    }
                });
        }
    }

    return (
        <section className='myInfo-container'>
            <h2 className='text-center m-2'>Hey! <span className='text-primary'>{user.displayName}</span> Your <br /> Health Profile Information <span className='contact-color'>Here.</span></h2>
            <div className="container mt-3">
                <div className="row d-flex align-items-center justify-content-center">
                    {
                        user?.email &&
                        <div>
                            {
                                information.map(info => <SingleInfo
                                    key={info._id}
                                    info={info}
                                    handleDeleteInfo={handleDeleteInfo}
                                ></SingleInfo>)
                            }
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default MyInfo;
import React, { useEffect, useState } from 'react';
import ManageProfile from './ManageProfile/ManageProfile';
import { Spinner } from 'react-bootstrap';

const ManageAllProfile = () => {
    const [allProfiles, setAllProfiles] = useState([]);

    useEffect(() => {
        fetch('https://damp-refuge-56099.herokuapp.com/allProfiles')
            .then(res => res.json())
            .then(data => setAllProfiles(data))
    }, []);

    // DELETE API korchi single profile data delete er jonno
    const handleDeleteProfile = id => {
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
                        const remainingProfile = allProfiles.filter(pi => pi._id !== id);
                        setAllProfiles(remainingProfile);
                    }
                });
        }
    }

    return (
        <>
            <section>
                <div className='container'>
                    <h2 className='text-center fw-bold mt-5'>Total Profile {allProfiles.length}</h2>

                    <div className="row">
                        {allProfiles.length === 0 ? (
                            <div className="text-center spinner mt-3">
                                {/* <span>{loader}</span> */}
                                <Spinner animation="border" />
                            </div>
                        ) : (

                            allProfiles.map((profile) => (
                                <ManageProfile
                                    key={profile._id}
                                    profile={profile}
                                    handleDeleteProfile={handleDeleteProfile}
                                >
                                </ManageProfile>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ManageAllProfile;
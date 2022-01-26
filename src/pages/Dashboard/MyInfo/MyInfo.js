import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleInfo from '../SingleInfo/SingleInfo';
import useAuth from '../../../hooks/useAuth';
import './MyInfo.css';

const MyInfo = () => {

    const [information, setInformation] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:7000/user_info/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInformation(data)
            })
    }, [user?.email]);


    return (
        <section className='myInfo-container'>
            <h2 className='text-center m-2'>Hey! {user.displayName} Your <br /> Health Details Information <span className='contact-color'>Here.</span></h2>
            <div className="container">
                <div className="row">
                    {
                        user?.email &&
                        <div>
                            {
                                information.map(info => <SingleInfo
                                    key={info._id}
                                    info={info}
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
import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const MakeDoctor = () => {
    const [email, setEmail] = useState('');
    const [doctorsSuccess, setDoctorsSuccess] = useState(false);

    const { token } = useAuth();

    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const onSubmit = data => {
        const doctor = { email };
        fetch('https://damp-refuge-56099.herokuapp.com/doctors/doctor', {
            method: 'PUT',
            headers: {
                // 'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(doctor)
        })
            .then(res => res.json())
            .then(result => {
                if (data.modifiedCount) {
                    reset();
                    setDoctorsSuccess(true);
                }
            })
        // console.log(data)

    };
    return (
        <div className="makeAdmin-container">
            <h4 className="text-center makeAdmin">Make Doctor</h4>
            <div className="form-area mt-5">
                <div className="form-container container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("Email")}
                            onBlur={handleOnBlur}
                            placeholder="example@gmail.com"
                            className="text-center p-2 m-2 w-100 inputs-field"
                        />
                        {/*  */}
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input
                            type="submit"
                            value="Make as Doctor"
                            className="addBtn w-50 px-3 py-2"
                        />
                    </form>
                    {
                        doctorsSuccess && <Alert severity='success'>
                            Added You Doctor Successfully!
                        </Alert>
                    }
                </div>
            </div>
        </div>
    );
};

export default MakeDoctor;
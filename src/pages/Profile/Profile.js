import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";

// import { colourOptions } from '../data';

// axios import
import axios from 'axios';

import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

import useAuth from '../../hooks/useAuth';

import './Profile.css';
import Select from 'react-select';
import { Checkbox } from '@mui/material';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'


const Profile = () => {

    // const [info, setInfo] = useState({});

    const { user } = useAuth();


    const { register, handleSubmit, control, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:7000/user_info', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire(`${user?.displayName} successfully added your details`);
                    // alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <>
            <Header></Header>
            <div className='profile-container'>
                <h2 className='text-center fw-bold'>{user.displayName} <span className='heading-color'>!</span> Profile Information</h2>
                <div className='container'>
                    <div className='shadow p-3 profile-card'>
                        {/* Profile From */}
                        <form className='profile-form' onSubmit={handleSubmit(onSubmit)}>
                            <label className='text-white fw-bold'>Name</label>
                            <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
                            <label
                                className='text-white fw-bold pt-2'
                            >Email</label>
                            <input
                                type="email"
                                defaultValue={user.email}
                                {...register("email", { required: true })} />

                            {/* errors will return when field validation fails  */}
                            {errors.email && <span className='error'>This field is required</span>}

                            <label className='text-white fw-bold pt-2'>Address</label>
                            <input defaultValue="" {...register("address")} placeholder='Your Address' />

                            <div className='d-flex align-items-center'>
                                <label className='text-white fw-bold me-2 pt-2'>Age</label>
                                <input type="number" {...register("age", { min: 18, max: 99 })} />
                                <select {...register("gender")}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                            <label className='text-white fw-bold pt-2'>Fever</label>
                            <input type="number" {...register('fever', { required: true })} />

                            <label className='text-white fw-bold pt-2'>Syndrome</label>
                            <Controller
                                name="syndrome"
                                render={({ field }) => (
                                    <Select
                                        // defaultValue={[colourOptions[2], colourOptions[3]]}
                                        // isMulti
                                        // name="syndrome"
                                        // options={colourOptions}
                                        // className="basic-multi-select"
                                        // classNamePrefix="select"
                                        {...field}
                                        options={[
                                            { value: "Headache", label: "Headache" },
                                            { value: "Tiredness", label: "Tiredness" },
                                            { value: "Nausea", label: "Nausea" },
                                            { value: "ChestPain", label: "ChestPain" },
                                            { value: "Diarrhea", label: "Diarrhea" },
                                            { value: "Cough", label: "Cough" },
                                            { value: "Bloating", label: "Bloating" },
                                            { value: "Constipation", label: "Constipation" },
                                            { value: "Diabetes", label: "Diabetes" },
                                            { value: "Swelling", label: "Swelling" },
                                        ]}
                                    />
                                )}
                                control={control}
                                defaultValue=""
                            />
                            <Controller
                                name="Checkbox"
                                control={control}
                                render={({ field }) => <Checkbox {...field} />}
                            />
                            <br />
                            <label className='text-white fw-bold pt-2'>Water Intake</label>
                            <input defaultValue=""
                                type="number" {...register("waterIntake")} placeholder="Today's water intake" />

                            <label className='text-white fw-bold pt-2'>Oxygen Level</label>
                            <input defaultValue=""
                                type="number" {...register("oxygenLevel")} placeholder="Today's Oxygen level" />

                            <label className='text-white fw-bold pt-2'>Give your Contact number</label>
                            <input
                                defaultValue=""
                                type="number" {...register("phone")} placeholder="Your phone number" />
                            <textarea defaultValue="" {...register("message")} placeholder='Additional Symptom?' />
                            <input type="submit" className='submitBtn' />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Profile;
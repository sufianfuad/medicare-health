import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";

import axios from 'axios';

import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

import useAuth from '../../hooks/useAuth';

import './Profile.css';
import Select from 'react-select';
import { Checkbox } from '@mui/material';

const Profile = () => {

    const [info, setInfo] = useState({});

    const { user } = useAuth();


    const { register, handleSubmit, control, formState: { errors }, reset } = useForm();
    // const onSubmit = data => {
    //     console.log(data)
    // };

    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:7000/user_info', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <>
            <Header></Header>
            <div className='profile-container'>
                <h2 className='text-center fw-bold'>User Profile Information</h2>
                <div className='container'>
                    <form className='profile-form' onSubmit={handleSubmit(onSubmit)}>
                        <label className=''>Name</label>
                        <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
                        <label className='pt-2'>Email</label>
                        <input defaultValue={user.email} {...register("email", { required: true })} />

                        {/* errors will return when field validation fails  */}
                        {errors.email && <span className='error'>This field is required</span>}

                        {/* <input type="number" {...register("age", { min: 18, max: 99 })} /> */}
                        <label className='pt-2'>Address</label>
                        <input defaultValue="" {...register("address")} placeholder='your address' />

                        {/* <Select label="Age" {...register("Age")} /> */}
                        {/* <input defaultValue="syndrome" {...register("example")} /> */}
                        <div className='d-flex align-items-center'>
                            <label className='me-2 pt-2'>Age</label>
                            <input type="number" {...register("age", { min: 18, max: 99 })} />
                            <select {...register("gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                        <label className='pt-2'>Fever</label>
                        <input type="number" {...register('fever')} />

                        <label className='pt-2'>Syndrome</label>
                        <Controller
                            name="syndrome"
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={[
                                        { value: "Headeche", label: "Headeche" },
                                        { value: "Tiredness", label: "Tiredness" },
                                        { value: "nausea", label: "Nausea" },
                                        { value: "Backache", label: "Backache" },
                                        { value: "Fatigue", label: "Fatigue" },
                                        { value: "Bloating", label: "Bloating" },
                                        { value: "Insomnia", label: "Insomnia" },
                                        { value: "Constipation", label: "Constipation" },
                                        { value: "Diarrhea", label: "Diarrhea" },
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
                        <label className='pt-2'>Water Intake</label>
                        <input defaultValue=""
                            type="number" {...register("number")} placeholder="Today's water intake" />

                        <label className='pt-2'>Oxygen Level</label>
                        <input defaultValue=""
                            type="number" {...register("number")} placeholder="Today's Oxygen level" />

                        <label className='pt-2'>Give your Contact number</label>
                        <input
                            defaultValue=""
                            type="number" {...register("phone")} placeholder="Your phone number" />
                        <textarea defaultValue="" {...register("message")} placeholder='say something' />
                        <input type="submit" />
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Profile;
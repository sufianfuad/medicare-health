import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
// import { Alert } from '@mui/material';
//CSS
import './Reviews.css';
// import useAuth from '../../hooks/useAuth';

const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:7000/reviews', data)
            .then(res => {
                alert('Thanks a lot')
                reset();
                // <Alert severity="success">Thank You</Alert>
            })
    };
    // const { user } = useAuth();

    return (
        <div className='sanitizer-container'>
            <div className="feedback">
                <h2 className='text-center p-3'>Give your Feedback please</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('username')}
                        placeholder="Your Name"
                    />
                    <input {...register('email')}
                        placeholder="example@gmail.com"
                        type="email" />
                    <input {...register('pic')}
                        placeholder="GIve your Image url"
                    />
                    <textarea {...register("feedback", { maxWidth: 50 })} placeholder="Your Feedback" type="text" />
                    <input type="number"
                        placeholder='Rate Us'
                        {...register("rating", { min: 1, max: 5 })} />
                    <input type="submit" />
                </form>

            </div>
        </div>
    );
};

export default Reviews;
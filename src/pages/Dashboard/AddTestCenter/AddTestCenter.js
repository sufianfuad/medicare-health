import React from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddTestCenter.css';

const AddTestCenter = () => {
    //React Hook Form er property
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://damp-refuge-56099.herokuapp.com/test_center', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Added');
                    reset();
                }
                console.log(res)
            })
    }
    return (
        <>
            <div className='testCenter-container'>
                <Container className="form-container">
                    <h2 className='text-center'>Add a Test Center</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input {...register("name", { maxLength: 70 })} placeholder="Center Name" />

                        <input type="number" {...register("number", { required: true })} placeholder="Contact Number" />

                        <input type="number" {...register("cost")} placeholder="Cost" />

                        <input type="text" {...register("time")} placeholder="Test Time" />
                        <input type="text" {...register("address", { max: 5 })} placeholder="Address" />
                        <input {...register("image")} placeholder="image url" />

                        <button className="testBtn" type="submit">Submit</button>
                    </form>
                </Container>
            </div>
        </>
    );
};

export default AddTestCenter;
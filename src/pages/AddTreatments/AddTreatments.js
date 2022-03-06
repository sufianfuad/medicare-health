import React from 'react';
//import axios
import axios from 'axios';
import { useForm } from 'react-hook-form';

//css
import './AddTreatments.css';

const AddTreatments = () => {

    //from react hook useFrom
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:7000/treatments', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Added');
                    reset();
                }
            })
    };
    return (
        <>
            <div className="addTreatments-container">
                <h2 className="text-center pb-3 heading-title">Please Add a Treatment</h2>
                <div className="form-container container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />

                        <textarea {...register("description")} placeholder="description" />

                        <input type="text" {...register("deptHead")} placeholder="Dept Head Name" />

                        <input type="email" {...register("email", { required: true })} placeholder="department email" />

                        <input {...register("img")} placeholder="paste img url from image.js file" />

                        <input
                            className='addTreatBtn'
                            type="submit" />
                    </form>
                </div>

            </div>
        </>
    );
};

export default AddTreatments;


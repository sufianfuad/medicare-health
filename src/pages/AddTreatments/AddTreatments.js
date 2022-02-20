import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
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
    // const { register, handleSubmit, reset } = useForm();
    // const onSubmit = data => {
    //     console.log(data)
    //     axios.post('https://sleepy-basin-98132.herokuapp.com/tourOffers', data)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 alert('Successfully Added');
    //                 reset();
    //             }
    //         })
    // };
    return (
        <>
            <Header />
            <section className="addTreatments-container">
                <h1 className="mb-3 text-center heading-title">Please Add Treatments<span className="dot-color">.</span></h1>
                <div className="form-container container">
                    {/* <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-lg-6 col-sm-12"> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />

                        <textarea {...register("description")} placeholder="description" />

                        <input type="number" {...register("Fee")} placeholder="Fee" />
                        {/* <input type="text" {...register("rating")} placeholder="rating(1.2k+rating)" /> */}

                        <input {...register("image")} placeholder="paste img url from image.js file" />

                        <input type="submit" />
                    </form>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="add-img">
                        {/* <img src={addProduct} alt="" /> */}
                    </div>
                </div>
                {/* </div>
            </div> */}
            </section>
            <Footer />
        </>
    );
};

export default AddTreatments;

{/* <div className="">
                            <div className="form-container">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        {...register("name")}
                                        placeholder="Name"
                                        className="p-2 m-2 inputs-field"
                                    />

                                    <input
                                        {...register("description")}
                                        placeholder="Description"
                                        className="p-2 m-2  inputs-field"
                                    />

                                    <input
                                        {...register("image", { required: true })}
                                        placeholder="Image Link"
                                        className="p-2 m-2 inputs-field"
                                    />

                                    <input
                                        {...register("price", { required: true })}
                                        placeholder="Price"
                                        type="number"
                                        className="p-2 m-2 inputs-field"
                                    />
                                    
                                    {errors.exampleRequired && <span>This field is required</span>}

                                    <input
                                        type="submit"
                                        value="Add"
                                        className="btn add-btn w-50 px-3 py-2"
                                    />
                                </form>
                            </div>
                        </div> */}
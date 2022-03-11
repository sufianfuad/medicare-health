import React, { useState, useEffect } from 'react';

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


import SingleDoctor from '../SingleDoctor/SingleDoctor';
//CSS
import './Doctors.css';

//react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([EffectCoverflow, Pagination]);

const Doctors = () => {
    //Doctor State
    const [doctors, setDoctors] = useState([]);
    //loading er jonno
    const loader = <FontAwesomeIcon icon={faSpinner} />

    useEffect(() => {
        fetch('https://damp-refuge-56099.herokuapp.com/add_doctor')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <section className='doctors-container text-center '>
            <div className='services-title'>
                <h2> Our Doctors</h2>
            </div>

            <div className="container">
                <div className="row p-5">
                    {/* doctor er Card swiper js dia show korche */}
                    {
                        doctors.length === 0 ? (
                            <div className='text-center mt-5'>
                                <span className='spinner'>{loader}</span>
                            </div>
                        ) : (
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 50,
                                    },
                                }}
                                className="mySwiper"
                            >
                                {doctors.map((doctor) => (
                                    <SwiperSlide key={doctor._id}
                                    //   className="shadow-md  my-2 py-4"
                                    >
                                        <SingleDoctor doctor={doctor}></SingleDoctor>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )
                    }
                    {/* <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiper"

                    >
                        {doctors.map((doctor) => (
                            <SwiperSlide key={doctor._id}
                            //   className="shadow-md  my-2 py-4"
                            >
                                <SingleDoctor doctor={doctor}></SingleDoctor>
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
                    {/* {
                        doctors.map(doctor => <SingleDoctor
                            key={doctor._id}
                            doctor={doctor}
                        ></SingleDoctor>)
                    } */}
                </div>

            </div>
        </section>

    );
};

export default Doctors;
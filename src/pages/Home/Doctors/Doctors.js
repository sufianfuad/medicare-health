import React, { useState, useEffect } from 'react';

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


import SingleDoctor from '../SingleDoctor/SingleDoctor';
import './Doctors.css';

SwiperCore.use([EffectCoverflow, Pagination]);

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/add_doctor')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <section className='doctors-container text-center '>
            <div className='services-title'>
                <h2> Our Doctors {doctors.length}</h2>
            </div>
            {/* <Container>
                <Grid container spacing={2}>

                </Grid>
            </Container> */}
            <div className="container">
                <div className="row p-5">
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
                    // effect={"coverflow"}
                    // grabCursor={true}
                    // centeredSlides={true}
                    // slidesPerView={"auto"}
                    // coverflowEffect={{
                    //     rotate: 50,
                    //     stretch: 0,
                    //     depth: 100,
                    //     modifier: 1,
                    //     slideShadows: false,
                    // }}
                    // pagination={true}
                    // className="mySwiper"
                    >
                        {doctors.map((doctor) => (
                            <SwiperSlide key={doctor._id}
                            //   className="shadow-md  my-2 py-4"
                            >
                                <SingleDoctor doctor={doctor}></SingleDoctor>
                            </SwiperSlide>
                        ))}
                    </Swiper>
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
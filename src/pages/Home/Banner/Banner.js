import React from 'react';
import { Carousel } from 'react-bootstrap';
//image
import slide1 from '../../../images/satisfaction/doctor-patient.jpg';
import slide2 from '../../../images/satisfaction/doctor-patient2.jpg';
import slide3 from '../../../images/satisfaction/doctor-team.jpg';
//import css
import './Banner.css'
const Banner = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="slider-title">Entrust your health our doctors</h3>
                        <p className="slider-text">Medical Services That You Can Trust</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="slider-title">Entrust your health our doctors</h3>
                        <p className="slider-text">Be Happy now i so simple.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="slider-title">Entrust your health our doctors</h3>
                        <p className="slider-text">Be attentive to your health</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;
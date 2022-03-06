import React from 'react';
import { Carousel } from 'react-bootstrap';
//image
import slide1 from '../../../images/banner/b1.jpg';
import slide2 from '../../../images/banner/b2.jpg';
import slide3 from '../../../images/banner/b3.jpg';
//import css
import './Banner.css'
const Banner = () => {
    return (
        <>
            <div className="carousel-container">
                <Carousel fade>
                    <Carousel.Item>
                        <div className="carousel-img">
                            <img
                                className="d-block w-100"
                                src={slide1}
                                alt="First slide"
                            />
                        </div>
                        <Carousel.Caption>
                            <h3 className="slider-title">Entrust your health with our service</h3>
                            <p className="slider-text">Medical Services That You Can Trust</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-img">
                            <img
                                className="d-block w-100"
                                src={slide2}
                                alt="Second slide"
                            />

                        </div>
                        <Carousel.Caption>
                            <h3 className="slider-title">Entrust your health with our service</h3>
                            <p className="slider-text">Be Happy Be Healthy</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-img">
                            <img
                                className="d-block w-100"
                                src={slide3}
                                alt="Third slide"
                            />
                        </div>
                        <Carousel.Caption>
                            <h3 className="slider-title">Entrust your health with our service</h3>
                            <p className="slider-text">Be attentive to your health</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Banner;
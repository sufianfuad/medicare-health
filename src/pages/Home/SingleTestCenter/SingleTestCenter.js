import React from 'react';
import { Card } from 'react-bootstrap';

//react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhoneAlt, faSearchLocation } from '@fortawesome/free-solid-svg-icons';

//CSS
import './SingleTestCenter.css';

const SingleTestCenter = ({ center }) => {
    const { name, number, address, cost, time, image } = center;

    // react font awesome
    const contact = <FontAwesomeIcon icon={faPhoneAlt} />
    const timeIcon = <FontAwesomeIcon icon={faClock} />
    const addressIcon = <FontAwesomeIcon icon={faSearchLocation} />
    return (
        <>
            <div className="col-md-4 col-lg-4 col-12">
                <div className="">
                    <Card
                        className='shadow mb-3'
                        style={{ height: '28rem' }}>
                        <Card.Img
                            variant="top"
                            src={image}
                            style={{ width: '100%', height: '250px' }}
                        />
                        <Card.Body>
                            <Card.Title className='card-title'><span className='center-color'>{name}</span></Card.Title>
                            <Card.Text>
                                <hr />
                                <div className='my-2'>
                                    {" "}
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h6 className='headingColor'>Time - <span className='centerIconColors'>{timeIcon}</span></h6>
                                        <h6 className='headingColor'>Address - <span className='centerIconColors'>{addressIcon}</span></h6>
                                    </div>

                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p className='card-color'>{time}</p>
                                        <p className='card-color'>{address}</p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p>Call - <span className='centerIconColors'>{contact}</span> {number}</p>
                                        <p>Price - <span className='center-color fw-bold'>{cost}tk.</span></p>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default SingleTestCenter;
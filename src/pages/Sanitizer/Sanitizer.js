import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

//img
import singleImg from '../../images/banner/single02.png';
import handWash from '../../images/banner/hand wash.png';
import handRub from '../../images/banner/hand rub.png';
import surfaceDry from '../../images/banner/surface dry.png';

import './Sanitizer.css';

const Sanitizer = () => {
    return (
        <div >
            <Container className="sanitizer-container mt-5 p-3">
                <div className="text-center">
                    <div className="services-title">
                        <h1 className="sanitizeFont text-center">Use Sanitizer</h1>
                    </div>
                    <p className='p-3'>Hand washing is one of the best ways to protect yourself and your family from getting sick. Learn when and how you should wash your hands to stay healthy.</p>
                </div>
                <div className="mt-5">
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md={6} xs={12}>
                            <img src={singleImg} alt="" className="img-fluid" />
                        </Col>

                        <Col md={6} xs={12} className="m-auto">
                            <div className="process">
                                <img src={handWash} alt="" className="imgHand" />
                                <h5>Apply Alcohol Spray</h5>
                                <p>Alcohol-based hand sanitizers can rapidly decrease the number of microorganisms on hands in certain circumstances, yet sanitizers do not kill a wide range of germs. Soap and water are more powerful than hand sanitizers at expelling particular sorts of germs, such as Cryptosporidium, norovirus, and Clostridium difficile.</p>
                                <img src={handRub} alt="" className="imgHand mt-2" />
                                <h5>Rub Hands Together</h5>
                                <p>Apply the gel product to the palm of one hand (read the label to learn the correct amount). Rub your hands together. Rub the gel over all the surfaces of your hands and fingers until your hands are dry. This should take around 20 seconds.
                                </p>
                                <img src={surfaceDry} alt="" className="imgHand mt-2" />
                                <h5>Surface Unity Dry</h5>
                                <p>Sanitizers do not get rid of all types of germs.
                                    Hand sanitizers may not be as effective when hands are visibly dirty or greasy.Hand sanitizers might not remove harmful chemicals from hands like pesticides and heavy metals.</p>
                            </div>
                        </Col>

                    </Row>

                </div>
            </Container>
        </div>
    );
};

export default Sanitizer;
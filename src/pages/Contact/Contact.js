import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './Contact.css';
import contactImg from '../../images/contact-1.jpg';

const Contact = () => {
    const sendIcon = <FontAwesomeIcon icon={faPaperPlane} />

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('health_service_id207', 'template_5glxoyr', form.current, 'user_otPikrA9IVgTAaIXGEDNM')

            .then((result) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })

            }, (error) => {
                Swal.fire(error.message);
            });
        e.target.reset();
    };

    return (
        <section className="contact-container text-center">
            <div className='services-title'>
                <h2 className='text-white'>Get In Touch</h2>
            </div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7">
                        {/* <div className="row">
                            <div className="col-md-9"> */}
                        <div className="contact-formArea mb-2" data-aos="flip-left"
                            data-aos-duration="2000">
                            <h4>Let's Contact with us
                                <br />
                                We will try our <span className='contact-color'>best.</span>
                            </h4>
                            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                                <div className='input-group'>
                                    <input className='form-field js-field-name'
                                        type="text"
                                        name='first-Name'
                                        required
                                        placeholder='Your FirstName'
                                    />
                                </div>
                                <div className='input-group'>
                                    <input className='form-field js-field-name'
                                        type="text"
                                        name='last-Name'
                                        required
                                        placeholder='Your LastName' />
                                </div>

                                <div className='input-group'>
                                    <input className='form-field js-field-name'
                                        type="email"
                                        name='yourEmail'
                                        required
                                        placeholder='Your Email'
                                    />
                                </div>

                                <div className='input-group'>
                                    <textarea className='form-field js-field-name'
                                        type="text"
                                        name="message"
                                        placeholder='Give your information here' />
                                </div>
                                <div className=''>
                                    <button className='send-btn' type="submit" value='Send'>
                                        <span className='send-icon me-2'>{sendIcon}</span> Send
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* </div> */}
                        {/* <div className="col-md-3">

                            </div> */}
                        {/* </div> */}
                    </div>
                    <div className="col-md-5">
                        <div className='contact-img' data-aos="zoom-in"
                            data-aos-duration="4000">
                            <img className='img-fluid' src={contactImg} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import './Contact.css';
import contactImg from '../../images/contact-1.jpg';

const Contact = () => {

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
                <h2 className='text-white'>Contact Us </h2>
            </div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7">
                        {/* <div className="row">
                            <div className="col-md-9"> */}
                        <div className="contact-formArea" data-aos="flip-left"
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
                                        Send
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

{/* <section className='contact-container'>
            <div className='text-center text-white'>
                <h2>Contact Us</h2>
            </div>
            <div className="row">
                <div className="container">
                    <div className="col-lg-8">
                        <div className="contacts-form pb-3 container">
                            <h4 className='contacts-form-title text-white'>Let's Contacts with us </h4>
                            <form className='js-form'
                            // ref={form} onSubmit={sendEmail}
                            >
                                <div className='client-name text-center'>
                                    <div className='form-group'>
                                        <input className='form-field js-field-name'
                                            type="text"
                                            name='user-name'
                                            required
                                            placeholder='Your Name*'
                                            id='validationCustom01' />
                                    </div>
                                    <div className='form-group'>
                                        <input className='form-field js-field-name'
                                            type="text"
                                            name='user-name'
                                            required
                                            placeholder='Your Name*'
                                            id='validationCustom01' />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <input className='form-field js-field-name'
                                        type="text"
                                        name='email'
                                        required
                                        placeholder='Your Email*' />
                                </div>
                                <div className='form-group'>
                                    <textarea className='form-field js-field-name'
                                        type="text"
                                        name='message'
                                        required
                                        placeholder='Type your message here' />
                                </div>
                                <div className=''>
                                    <button className='send-btn' type="submit" value='Send'>
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section> */}
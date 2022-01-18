import React from 'react';

import './Contact.css';

const Contact = () => {
    return (
        <section className='contact-container'>
            <div className='text-center text-white'>
                <h2>Contact Us</h2>
            </div>
            <div className="contacts-form text-center pb-3">
                <h4 className='contacts-form-title text-white'>Let's Contacts with us </h4>
                <form className='js-form'
                // ref={form} onSubmit={sendEmail}
                >
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
        </section>
    );
};

export default Contact;
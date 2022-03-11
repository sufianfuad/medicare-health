import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './Payment.css';
//
import CheckoutForm from './CheckoutForm';
//From stripe and stripe public key
const stripePromise = loadStripe('pk_test_51JwAlyCTzT8XZQMxYIAtb1iL50U4zXD33X3g8rytZtNTyabQgVfVV6wITc092tkFnicY13G8Dh67Z6ndxsnOxcrM00NxMUPTOn');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(`https://damp-refuge-56099.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => {
                setAppointment(data)
                console.log(data);
            })
    }, [appointmentId])
    return (
        <section className='payment-container'>
            <h2 className='text-center'>Payment for {appointment.patientName}</h2>
            <p className='text-center'>For {appointment.serviceName}</p>
            <h4 className='text-center'>Pay: {appointment?.price}</h4>

            {appointment.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    // price={appointment.price}
                    appointment={appointment}
                />
            </Elements>}
        </section>
    );
};

export default Payment;
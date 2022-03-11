import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = ({ appointment }) => {
    //destructuring
    const { price, patientName, _id } = appointment;

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();

    //error er jonno state
    const [error, setError] = useState('');
    //success Message
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('https://damp-refuge-56099.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data =>
                // console.log(data)
                setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //========
        if (!stripe || !elements) {
            return;
        }
        //====
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        //error na khele processing start true hobe
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            //error khele error tekhe UI a Error dibe
            // console.log(error);
            setError(error.message);
            setSuccess('');
        }
        else {
            setError('');
            console.log(paymentMethod);
        }
        //Payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: user.email
                    },
                },
            },
        );
        if (intentError) {
            //error khele ai intentError tetkhe UI a Error dibe
            setError(intentError.message);
            setSuccess('');
        }
        else {
            setError('');
            setSuccess('Your payment process successfully')
            console.log(paymentIntent);
            setProcessing(false);

            //database a save korchi
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0],
            }
            const url = `https://damp-refuge-56099.herokuapp.com/appointments/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }
    return (
        <div className=''>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ?
                    <div className='text-center'>
                        <CircularProgress></CircularProgress>
                    </div>
                    :
                    <div className='text-center'>
                        <button
                            className='btn btn-secondary px-3 py-2'
                            type="submit"
                            disabled={!stripe || success}
                        >
                            Pay ${price}
                        </button>
                    </div>
                }
            </form>
            {
                error && <p className='text-center pt-3' style={{ color: 'red' }}>{error}</p>
            }
            {
                success && <p className='text-center pt-3' style={{ color: 'green' }}>{success}</p>
            }
        </div>
    );
};

export default CheckoutForm;
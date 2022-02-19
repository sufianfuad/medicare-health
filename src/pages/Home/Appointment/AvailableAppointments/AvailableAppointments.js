import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 101,
        name: 'Oral surgery',
        doctor: 'Dr Mr. Jahanghir',
        time: '05.00 PM - 08.00 PM',
        space: '15'
    },
    {
        id: 202,
        name: 'Teeth Cleaning',
        doctor: 'Dr Mrs. Adiba',
        time: '04.00 PM - 07.00 PM',
        space: '10'
    },
    {
        id: 303,
        name: 'Medicine',
        doctor: 'Dr Mr. Milad',
        time: '06.00 PM - 09.00 PM',
        space: '20'
    },
    {
        id: 404,
        name: 'Cardiology',
        doctor: 'Dr Mr. Khaled',
        time: '07.00 PM - 10.00 PM',
        space: '15'
    },
    {
        id: 505,
        name: 'Teeth orthodontic',
        doctor: 'Dr Mr. Solaiman',
        time: '04.00 PM - 09.00 PM',
        space: '10'
    },
    {
        id: 606,
        name: 'Oral surgery',
        doctor: 'Dr Mr. Karim',
        time: '05.00 PM - 08.00 PM',
        space: '15'
    },
]

const AvailableAppointments = ({ date }) => {
    return (
        <Container>
            <div className='m-3'>
                <h2 className='text-center fw-bold'>Available Appointments {date.toDateString()}</h2>
            </div>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;
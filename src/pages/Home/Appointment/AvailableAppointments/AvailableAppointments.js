import React, { useState } from 'react';
import { Alert, Container, Grid } from '@mui/material';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 101,
        name: 'Oral Surgery',
        doctor: 'Dr Mr. Jahanghir',
        time: '05.00 PM - 08.00 PM',
        price: 18,
        space: '15'
    },
    {
        id: 202,
        name: 'Teeth Cleaning',
        doctor: 'Dr Mrs. Adiba',
        time: '04.00 PM - 07.00 PM',
        price: 15,
        space: '10'
    },
    {
        id: 303,
        name: 'Medicine',
        doctor: 'Dr Mr. Milad',
        time: '06.00 PM - 09.00 PM',
        price: 20,
        space: '20'
    },
    {
        id: 404,
        name: 'Cardiology Specialist',
        doctor: 'Dr Mr. Khaled',
        time: '07.00 PM - 10.00 PM',
        price: 25,
        space: '15'
    },
    {
        id: 505,
        name: 'Orthopedic Specialist',
        doctor: 'Dr Mr. Solaiman',
        time: '04.00 PM - 09.00 PM',
        price: 23,
        space: '10'
    },
    {
        id: 606,
        name: 'Neurology Specialist',
        doctor: 'Dr Mr. Karim',
        time: '05.00 PM - 08.00 PM',
        price: 17,
        space: '15'
    },
]

const AvailableAppointments = ({ todayDates }) => {
    //Success Status state
    const [appointmentSuccess, setAppointmentSuccess] = useState(false);

    return (
        <Container>
            <div className='m-3'>
                <h2 className='text-center fw-bold'>Available Appointments {todayDates.toDateString()}</h2>
                {/* {appointmentSuccess && <Alert security='success'>Appointment Booked Successfully!</Alert>} */}
            </div>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        todayDates={todayDates}
                        appointmentSuccess={appointmentSuccess}
                        setAppointmentSuccess={setAppointmentSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;
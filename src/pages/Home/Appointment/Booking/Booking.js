import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../../Appointment/BookingModal/BookingModal';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
//CSS
import './Booking.css';
const Booking = ({ booking, todayDates, setAppointmentSuccess, appointmentSuccess }) => {
    //== destructuring hocche
    const { name, time, space, doctor, price } = booking;
    //==
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    //==Font AwesomeIcon
    const appointment = <FontAwesomeIcon icon={faHospitalUser} />
    return (
        <>
            {/* Aita material UI er Grid System */}
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5, textAlign: 'center', mt: 3 }} >
                    <Typography sx={{ color: '#1a237e', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>

                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>

                    <Typography sx={{ color: 'secondary.main', fontWeight: 600 }} variant="overline" display="block" gutterBottom>
                        {doctor}
                    </Typography>

                    <Typography sx={{ color: '#283593', fontWeight: 600 }} variant="caption" display="block" gutterBottom>
                        Price ${price}
                    </Typography>

                    <Typography sx={{ color: '#283593', fontWeight: 600 }} variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">
                        <span className='bookIcon me-2'>{appointment}</span> Book Appointment</Button>
                </Paper>
            </Grid >
            <BookingModal
                todayDates={todayDates}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                appointmentSuccess={appointmentSuccess}
                setAppointmentSuccess={setAppointmentSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;
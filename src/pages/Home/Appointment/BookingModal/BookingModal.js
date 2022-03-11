import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Fade, TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
//CSS
import './BookingModal.css';

import useAuth from '../../../../hooks/useAuth';
// sweet Alert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const BookingModal = ({ booking, openBooking, handleBookingClose, todayDates, setAppointmentSuccess, appointmentSuccess }) => {
    const { name, doctor, time, price } = booking;

    const { user } = useAuth();

    const initialInfo = { patientName: user?.displayName, email: user?.email, phone: '' }

    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        e.preventDefault();
        //data collect kore rakchi
        const appointment = {
            ...bookingInfo,
            time,
            price,
            serviceName: name,
            todayDates: todayDates.toDateString()
        }
        // console.log(appointment);

        // data Server a Send korchi
        fetch('https://damp-refuge-56099.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    { appointmentSuccess && Swal.fire(`${user?.displayName} Appointment Booked successfully`) }
                    setAppointmentSuccess(true);
                    handleBookingClose();

                }
            })
    }
    return (
        <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography
                        sx={{ textAlign: 'center', fontWeight: 500 }}
                        id="modal-modal-title" variant="h5" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            label="Time"
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                            sx={{ width: '90%', m: 2, p: 1 }}
                        />
                        <TextField
                            disabled
                            label="Date"
                            id="outlined-size-small"
                            defaultValue={todayDates.toDateString()}
                            size="small"
                            sx={{ width: '90%', m: 1, p: 1 }}
                        />
                        <TextField
                            disabled
                            label="Doctor"
                            id="outlined-size-small"
                            defaultValue={doctor}
                            size="small"
                            sx={{ width: '90%', m: 1, p: 1 }}
                        />
                        <TextField
                            label="Name"
                            id="outlined-size-small"
                            name="patientName"
                            onBlur={handleOnBlur}
                            defaultValue={user?.displayName}
                            size="small"
                            sx={{ width: '90%', m: 2, p: 1 }}
                        />
                        <TextField
                            label="Email"
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user?.email}
                            size="small"
                            sx={{ width: '90%', m: 1, p: 1 }}
                        />
                        <TextField
                            label="Phone"
                            id="outlined-size-small"
                            name='phone'
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                            sx={{ width: '90%', m: 1, p: 1 }}
                        />
                        <Button
                            sx={{ width: '90%', m: 1 }}
                            type='submit' variant="contained">submit</Button>
                    </form>
                </Box>
            </Fade>

        </Modal>
    );
};

export default BookingModal;
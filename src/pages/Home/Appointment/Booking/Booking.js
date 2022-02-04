import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';

import './Booking.css';
const Booking = ({ booking }) => {
    const { name, time, space, doctor } = booking;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ py: 5, textAlign: 'center', mt: 3 }} >
                <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography sx={{ color: 'secondary.main', fontWeight: 600 }} variant="overline" display="block" gutterBottom>
                    {doctor}
                </Typography>
                <Typography sx={{ color: 'warning.main', fontWeight: 600 }} variant="caption" display="block" gutterBottom>
                    {space} SPACES AVAILABLE
                </Typography>
                <Button variant="contained">Book Appointment</Button>
            </Paper>
        </Grid >
    );
};

export default Booking;
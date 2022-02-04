import { Box, Container, Grid } from '@mui/material';
import React from 'react';

import chair from '../../../../images/chair.png';
import Calendar from '../../../Shared/Calendar/Calendar';
import './AppointmentHeader.css';

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box className='calender__bg' sx={{ py: 5 }}>
                        <Calendar date={date} setDate={setDate}
                        ></Calendar>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className='py-5'>
                        <img style={{ width: "100%" }} src={chair} alt="chair" />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;
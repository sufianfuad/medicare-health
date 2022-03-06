import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    //calendar er jonno date state
    const [todayDates, setTodayDates] = useState(new Date());

    return (
        <div>
            <div className='mt-5'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={5}>
                        <Calendar
                            todayDates={todayDates}
                            setTodayDates={setTodayDates}
                        ></Calendar>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Appointments
                            todayDates={todayDates}
                        ></Appointments>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default DashboardHome;
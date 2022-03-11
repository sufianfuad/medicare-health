import React from 'react';
import './Appointment.css';

// //image
import headerPic from '../../../../images/meet-the-doctors.jpg'
import Footer from '../../../Shared/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';
import Header from '../../../Shared/Header/Header';

const Appointment = () => {
    //Date State
    const [todayDates, setTodayDates] = React.useState(new Date());
    return (
        <>
            <Header></Header>
            <div className='appointment-banner'>
                <img src={headerPic} alt="" />
            </div>
            <div className="appointment">
                <AppointmentHeader
                    todayDates={todayDates}
                    setTodayDates={setTodayDates}
                />
                <AvailableAppointments todayDates={todayDates} />
            </div>

            <Footer />
        </>
    );
};

export default Appointment;
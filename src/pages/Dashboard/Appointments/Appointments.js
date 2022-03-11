import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

//Material UI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Appointments = ({ todayDates }) => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const url = `https://damp-refuge-56099.herokuapp.com/appointments?email=${user.email}&todayDates=${todayDates}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAppointments(data);
                console.log(data);
            })

    }, [todayDates])
    return (
        <div>
            <h2>Appointments {appointments.length} </h2>
            <div className='m-2'>
                <TableContainer component={Paper}>
                    <Table sx={{}} aria-label="Appointments table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Time</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {appointments.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.patientName}
                                    </TableCell>
                                    <TableCell align="right">{row.time}</TableCell>
                                    <TableCell align="right">{row.serviceName}</TableCell>
                                    <TableCell align="right">{row.payment ?
                                        'paid'
                                        :
                                        <Link to={`/dashboard/payment/${row._id}`}><button className='btn btn-primary'>Pay</button> </Link>
                                    }</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default Appointments;
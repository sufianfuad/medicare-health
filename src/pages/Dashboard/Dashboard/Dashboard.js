import React, { useState } from 'react';
//react font awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Dashboard.css';

import AdminRoute from '../../Login/AdminRoute/AdminRoute';

// import Payment from '../../Payment/Payment';
import Reviews from '../../Reviews/Reviews';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddTreatments from '../../AddTreatments/AddTreatments';
// import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageTreatments from '../../ManageTreatments/ManageTreatments';
import MakeDoctor from '../MakeDoctor/MakeDoctor';
import AddTestCenter from '../AddTestCenter/AddTestCenter';
//======
import useAuth from '../../../hooks/useAuth';
// import
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';
import AddDoctor from '../AddDoctor/AddDoctor';
import MyInfo from '../MyInfo/MyInfo';
import ManageAllAppointment from '../ManageAllAppointment/ManageAllAppointment';
import ManageAllProfile from '../ManageAllProfile/ManageAllProfile';
import ManageAllDoctor from '../ManageAllDoctor/ManageAllDoctor';

import Appointment from '../../Home/Appointment/Appointment/Appointment';
import DashboardHome from '../DashboardHome/DashboardHome';
import Payment from '../Payment/Payment';



const Dashboard = () => {
    //For Nesting
    const { path, url } = useRouteMatch();

    const { user, doctor, admin, doctorRole, logOut } = useAuth();
    // react font awesome
    const dashIcon = <FontAwesomeIcon icon={faBars} />

    return (
        <>
            <div className="dashboard-container">
                <div className="row">
                    <div className="col-md-3 col-lg-3 col-sm-12">
                        <div className="dashboard">
                            <h4 className="pt-3 fw-bold"><span className="dashIcon me-2 px-1">{dashIcon}</span>Dashboard</h4>

                            <div className='pt-2'>
                                <span className="profile-img"><img src={user?.photoURL} alt="" /></span>
                            </div>
                            <div className="logged-user pt-2">
                                <p>Welcome! {user?.displayName}</p>
                            </div>

                            <div className="dash-btn-holder m-2">
                                <Link to="/">
                                    <button className="btn-visit-front">Visit Site</button>
                                </Link>
                            </div>
                            {
                                !admin && <div>
                                    <Link to="/appointment">
                                        <li className="dashboard-menu mt-3">Take Appointment</li>
                                    </Link>
                                    <Link to={`${url}/dashboardHome`}>
                                        <li className="dashboard-menu mt-3">My Appointment</li>
                                    </Link>

                                    <Link to={`${url}/myInfo`}>
                                        <li className="dashboard-menu mt-3">My Profile</li>
                                    </Link>

                                    {/* <Link to={`${url}/payment`}>
                                        <li className="dashboard-menu mt-3">Payment</li>
                                    </Link> */}


                                    {/* <Link to={`${url}/myOrders`}>
                                        <li className="dashboard-menu mt-3">My Sit Booking</li>
                                    </Link> */}

                                    <Link to={`${url}/review`}>
                                        <li className="dashboard-menu mt-3">Review</li>
                                    </Link>
                                </div>
                            }
                            {
                                admin && <div>
                                    <Link to={`${url}/makeAdmin`}>
                                        <li className="dashboard-menu mt-3">Make Admin</li>
                                    </Link>

                                    <Link to={`${url}/makeDoctor`}>
                                        <li className="dashboard-menu mt-3">Make Doctor</li>
                                    </Link>

                                    <Link to={`${url}/addDoctor`}>
                                        <li className="dashboard-menu mt-3">Add Doctor</li>
                                    </Link>

                                    <Link to={`${url}/addTreatments`}>
                                        <li className="dashboard-menu mt-3">Add a Treatment</li>
                                    </Link>

                                    <Link to={`${url}/addTestCenter`}>
                                        <li className="dashboard-menu mt-3">Add Test Center</li>
                                    </Link>

                                    <Link to={`${url}/manageTreatments`}>
                                        <li className="dashboard-menu mt-3">Manage Treatments</li>
                                    </Link>

                                    <Link to={`${url}/manageAppointments`}>
                                        <li className="dashboard-menu mt-3">Manage all Appointments</li>
                                    </Link>

                                    <Link to={`${url}/manageProfiles`}>
                                        <li className="dashboard-menu mt-3">Manage all Profile Info</li>
                                    </Link>
                                </div>
                            }

                            {doctor?.email && doctorRole ?
                                <div>
                                    <Link to="/">
                                        <button className="btn-visit-front">Visit Site</button>
                                    </Link>
                                </div>
                                : <div>
                                    <Link to={`${url}/manageDoctors`}>
                                        <li className="dashboard-menu mt-3">Manage all Doctors</li>
                                    </Link>
                                </div>
                            }
                            <Link to={`${url}/logout`}>
                                <li
                                    onClick={logOut}
                                    className="dashboard-menu mt-3">Logout</li>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12">
                        <div className="dashboard__right">
                            <Switch>
                                <Route exact path={`${path}/dashboardHome`}>
                                    <DashboardHome></DashboardHome>
                                </Route>
                                <Route exact path={`${path}/payment/:appointmentId`}>
                                    <Payment></Payment>
                                </Route>

                                <Route exact path={`${path}/myInfo`}>
                                    <MyInfo></MyInfo>
                                </Route>

                                {/* <Route exact path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route> */}

                                <Route exact path={`${path}/review`}>
                                    <Reviews></Reviews>
                                </Route>
                                <AdminRoute exact path={`${path}/makeAdmin`}>
                                    <MakeAdmin></MakeAdmin>
                                </AdminRoute>

                                <AdminRoute exact path={`${path}/makeDoctor`}>
                                    <MakeDoctor></MakeDoctor>
                                </AdminRoute>

                                <AdminRoute exact path={`${path}/addDoctor`}>
                                    <AddDoctor></AddDoctor>
                                </AdminRoute>
                                {/* //===// */}
                                <AdminRoute exact path={`${path}/addTestCenter`}>
                                    <AddTestCenter></AddTestCenter>
                                </AdminRoute>

                                <AdminRoute exact path={`${path}/addTreatments`}>
                                    <AddTreatments></AddTreatments>
                                </AdminRoute>

                                <AdminRoute exact path={`${path}/manageTreatments`}>
                                    <ManageTreatments></ManageTreatments>
                                </AdminRoute>

                                <AdminRoute exact path={`${path}/manageAppointments`}>
                                    <ManageAllAppointment></ManageAllAppointment>
                                </AdminRoute>

                                <AdminRoute exact path={`${path}/manageProfiles`}>
                                    <ManageAllProfile></ManageAllProfile>
                                </AdminRoute>

                                <AdminRoute exact path={`${path}/manageDoctors`}>
                                    <ManageAllDoctor></ManageAllDoctor>
                                </AdminRoute>

                            </Switch>

                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Dashboard;
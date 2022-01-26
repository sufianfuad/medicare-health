import React from 'react';
//react font awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Dashboard.css';

import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Appointments from '../Appointments/Appointments';
import Payment from '../../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';
import Reviews from '../../Reviews/Reviews';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddTreatments from '../../AddTreatments/AddTreatments';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageTreatments from '../../ManageTreatments/ManageTreatments';
import MakeDoctor from '../MakeDoctor/MakeDoctor';

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



const Dashboard = () => {
    //For Nesting
    const { path, url } = useRouteMatch();

    const { user, doctor, admin, doctorRole, logOut } = useAuth();
    // react font awesome
    const dashIcon = <FontAwesomeIcon icon={faBars} />
    return (
        <div>
            {/* <Header /> */}
            <div className="dashboard-container">
                <div className="row">
                    <div className="col-md-3 col-lg-3 col-sm-12">
                        <div className="dashboard">
                            <h4 className="pt-5 fw-bold"><span className="dashIcon me-2 px-1">{dashIcon}</span>Dashboard</h4>
                            <div className="dash-btn-holder">
                                <Link to="/">
                                    <button className="btn-visit-front">Visit Site</button>
                                </Link>
                            </div>
                            <div className="logged-user pt-2">
                                <p>Welcome! {user?.displayName}</p>
                            </div>
                            {
                                !admin && <div>
                                    {/* <Link to={`${url}/appointment`}>
                                        <li className="dashboard-menu mt-3">Appointment</li>
                                    </Link> */}

                                    {/* <Link to={`${url}/payment`}>
                                        <li className="dashboard-menu mt-3">Payment</li>
                                    </Link> */}

                                    <Link to={`${url}/addTreatments`}>
                                        <li className="dashboard-menu mt-3">Add a Treatment</li>
                                    </Link>

                                    {/* <Link to={`${url}/myOrders`}>
                                        <li className="dashboard-menu mt-3">My Sit Booking</li>
                                    </Link> */}

                                    <Link to={`${url}/myInfo`}>
                                        <li className="dashboard-menu mt-3">My Info</li>
                                    </Link>

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

                                    <Link to={`${url}/manageTreatments`}>
                                        <li className="dashboard-menu mt-3">Manage Treatments</li>
                                    </Link>

                                    <Link to={`${url}/manageOrders`}>
                                        <li className="dashboard-menu mt-3">Manage all Order</li>
                                    </Link>

                                    <Link to={`${url}/manageUsers`}>
                                        <li className="dashboard-menu mt-3">Manage all Users</li>
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
                        <Switch>
                            {/* <Route exact path={`${path}/appointment`}>
                                <Appointments></Appointments>
                            </Route> */}
                            {/* <Route exact path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route> */}

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

                            <Route exact path={`${path}/addTreatments`}>
                                <AddTreatments></AddTreatments>
                            </Route>

                            <AdminRoute exact path={`${path}/manageTreatments`}>
                                <ManageTreatments></ManageTreatments>
                            </AdminRoute>

                            <AdminRoute exact path={`${path}/manageOrders`}>
                                <ManageAllOrder></ManageAllOrder>
                            </AdminRoute>

                        </Switch>
                    </div>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Dashboard;
import { Box } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
//
import menuLogo from '../../../images/logo.jpg'
//
import './Header.css';



const Header = () => {
    const { user, doctorRole, logOut } = useAuth();

    return (
        <>
            <Navbar className="navigation" collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="menu-logo me-2">
                            <img src={menuLogo} className="" alt="" />
                        </div>
                        <Navbar.Brand href="#home" className="title text-white"><span className="title-color">Medi</span>Care</Navbar.Brand>
                    </div>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link
                            as={Link}
                            to="/home"
                            className="item"
                        >Home</Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/services"
                            className="item"
                        >Services</Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/profile"
                            className="item"
                        >Profile</Nav.Link>

                        {/* <Nav.Link
                            as={Link}
                            to="/appointment"
                            className="item"
                        >Appointment</Nav.Link> */}

                        {
                            user?.email &&
                            <Nav.Link
                                as={Link}
                                to="/dashboard"
                                className="item"
                            >Dashboard
                            </Nav.Link>

                        }
                        {
                            user?.email &&
                            <Nav.Link
                                as={Link}
                                to="/addTreatments"
                                className="item"
                            >AddTreatments
                            </Nav.Link>

                        }

                        <Nav.Link
                            as={Link}
                            to="/register"
                            className="item"
                        >Register</Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/about"
                            className="item"
                        >About</Nav.Link>

                        <Navbar.Text>
                            {/* {user?.email &&
                                <span className="user">Signed in as <a href="#login">{user?.displayName}</a></span>
                            } */}
                            {user?.email &&
                                <span className="profile-img"><img src={user?.photoURL} alt="" /></span>
                            }
                        </Navbar.Text>

                        {user?.email ?

                            <button
                                onClick={logOut}
                                className="btn btn-secondary ms-2">LogOut</button>

                            : <Nav.Link
                                as={Link}
                                to="/login"
                                className="item"
                            >Login</Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;


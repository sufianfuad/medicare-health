import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';

import './Header.css'


const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">MediCare</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link
                            as={Link}
                            to="/home#home"
                        >Home</Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/home#services"
                        >Services</Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/home#appointment"
                        >Appointment</Nav.Link>

                        {user?.email ?

                            <button
                                onClick={logOut}
                                className="btn btn-secondary">LogOut</button>

                            : <Nav.Link
                                as={Link}
                                to="/login"
                            >Login</Nav.Link>}

                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                            {/* <img src={user?.photoURL} className="profile" alt="" /> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;


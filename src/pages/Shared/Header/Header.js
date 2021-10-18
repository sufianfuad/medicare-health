import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">MediCare</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/home#appointment">Appointment</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Coming Soon</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;


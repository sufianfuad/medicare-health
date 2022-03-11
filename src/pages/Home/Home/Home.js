import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../Contact/Contact';
import Sanitizer from '../../Sanitizer/Sanitizer';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
// import Review from '../Review/Review';

// import Services from '../Services/Services';
import TestCenter from '../TestCenter/TestCenter';
import { Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Container } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';

//react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faSpinner } from '@fortawesome/free-solid-svg-icons';


//CSS
import './Home.css';

const Home = () => {

    const [homeService, setHomeService] = useState([]);
    const [homeReview, setHomeReview] = useState([]);

    // react font awesome
    const rightArow = <FontAwesomeIcon icon={faArrowCircleRight} />
    //loading er jonno
    const loader = <FontAwesomeIcon icon={faSpinner} />

    const labels = {
        1: 'Useless',
        2: 'Poor',
        3: 'Ok',
        4: 'Good',
        5: 'Excellent',
    };
    // Service er jonno
    useEffect(() => {
        fetch('https://damp-refuge-56099.herokuapp.com/treatments')
            .then(res => res.json())
            .then(data => setHomeService(data))
    }, []);
    //Review  er jonno
    useEffect(() => {
        fetch('https://damp-refuge-56099.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setHomeReview(data)
            })
    }, [])

    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <div className="home-container container">
                <div className="row ">
                    <div className="text-center pb-3">
                        <div className="services-title">
                            <h2>Our Services</h2>
                        </div>
                    </div>
                    {/* Home a server tekhe 3 ta services show er kaj */}
                    {
                        homeService.length === 0 ? (
                            <div className='text-center mt-5'>
                                <span className='spinner'>{loader}</span>
                            </div>
                        )
                            :
                            (
                                homeService.slice(0, 3).map(
                                    service =>
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="service-card">
                                                <div className="p-3">
                                                    <div className="service-img">
                                                        <img className='img-fluid' src={service?.img} alt="" />
                                                    </div>
                                                    <div className="service-info pt-3">
                                                        <h4><span className="service-title fw-bold">{service?.name}</span></h4>
                                                        <p>{service.deptHead}</p>
                                                        <p><span className="text"><strong>About <small>{service?.name}: </small></strong></span> {service?.description.slice(0, 130)}</p>
                                                    </div>
                                                    <Link to={`/sitbooking/${service?.id}`}>
                                                        <button className="btn px-3 py-2 details">Details</button>
                                                    </Link>
                                                    <div className="">

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                )
                            )
                    }

                    <div className='text-center mt-3'>
                        <Link to="/services">
                            <button className='view-btn'>View More <span>{rightArow}</span> </button>
                        </Link>
                    </div>

                </div>
            </div>
            {/* <Services></Services> */}
            <Sanitizer></Sanitizer>
            <TestCenter></TestCenter>
            <Doctors></Doctors>
            {/* Home a server tekhe 3 ta Review show er kaj */}
            <div className="reviews-container">
                <Container>
                    <Typography variant='h4' sx={{
                        color: '#212529', textAlign: 'center',
                        fontWeight: 'bold',
                        marginTop: '25px',
                    }} gutterBottom="div">
                        Testimonials
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {
                                homeReview.slice(0, 3).map(rw =>
                                    <Grid item xs={12} md={4}>
                                        <Card sx={{
                                            minWidth: 200,
                                            minHeight: 200,
                                            margin: '20px',
                                            backgroundColor: 'aliceblue'
                                        }}>
                                            <CardContent>

                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                        {" "}
                                                        <div className='profile-img'>
                                                            <img src={rw?.pic} alt="pic" />
                                                        </div>
                                                        {" "}
                                                        <Typography variant="h6" color="text.secondary" gutterBottom="div">
                                                            {rw?.username}
                                                        </Typography>

                                                        <Typography variant="caption" display="block" gutterBottom="div">
                                                            {rw?.email}
                                                        </Typography>
                                                    </Box>
                                                    <Box
                                                        sx={{ width: 200, display: "flex", alignItems: "center" }}>
                                                        <Rating
                                                            name="text-feedback"
                                                            value={rw.rating}
                                                            readOnly
                                                            precision={0.5}
                                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }}
                                                                fontSize="inherit" />} />
                                                        <Box sx={{ ml: 1 }}> {labels[rw.rating]}</Box>
                                                    </Box>
                                                </Box>
                                            </CardContent>
                                            <Box>
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{
                                                        textAlign: 'center',
                                                        color: 'darkslategray', mt: 3
                                                    }}
                                                    gutterBottom="div">
                                                    {rw.feedback}
                                                </Typography>
                                            </Box>

                                        </Card>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Box>
                </Container>
            </div>
            {/* <Review></Review> */}
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
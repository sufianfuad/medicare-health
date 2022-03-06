import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Container } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';
import './Review.css'

const Review = () => {
    const [rating, allRating] = useState();
    const labels = {
        1: 'Useless',
        2: 'Poor',
        3: 'Ok',
        4: 'Good',
        5: 'Excellent',
    };
    useEffect(() => {
        fetch('http://localhost:7000/reviews')
            .then(res => res.json())
            .then(data => {
                allRating(data);
            })
    }, [])

    return (
        <>
            {/* Review part */}
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
                                rating?.map(review =>
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
                                                            <img src={review?.pic} alt="pic" />
                                                        </div>
                                                        {" "}
                                                        <Typography variant="h6" color="text.secondary" gutterBottom="div">
                                                            {review?.username}
                                                        </Typography>

                                                        <Typography variant="caption" display="block" gutterBottom="div">
                                                            {review?.email}
                                                        </Typography>
                                                    </Box>
                                                    <Box
                                                        sx={{ width: 200, display: "flex", alignItems: "center" }}>
                                                        <Rating
                                                            name="text-feedback"
                                                            value={review.rating}
                                                            readOnly
                                                            precision={0.5}
                                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }}
                                                                fontSize="inherit" />} />
                                                        <Box sx={{ ml: 1 }}> {labels[review.rating]}</Box>
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
                                                    {review.feedback}
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

        </>
    );
};

export default Review;
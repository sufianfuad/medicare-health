import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './SitBooking.css';


const SitBooking = () => {
    const [details, setDetails] = useState({})

    const { bookingId } = useParams();

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            // .then(details => details.filter(detail => {
            //     return detail.id === bookingId;
            // }))
            .then(matched => setDetails(matched[0]))

    }, [])
    return (
        <div className="booking-container">
            <h1>{details?.name}</h1>
            <h2>Patient Sit Booking {bookingId}</h2>
        </div>
    );
};

export default SitBooking;

// useEffect(() => {
//     fetch("/src/data/data.json")
//       .then((res) => res.json())
//       .then((videos) => videos.filter((video) => {
//         return video.id === videoID;
//       }))
//       .then((matched) => setVideo(matched[0]));
//   }, []);

// fetch('services.json')
// .then(res => res.json())
// .then(service => service.filter(details=>{
//     return details?.id === bookingId;
// }))
// .then(matched => setDetails(matched[0]))

// fetch('services.json')
//             .then(res => res.json())
//             .then(details => details.filter(detail => {
//                 return detail.id === bookingId;
//             }))
//             .then(matched => setDetails(matched[0]))
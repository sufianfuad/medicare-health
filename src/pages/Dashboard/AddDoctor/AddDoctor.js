import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';


import './AddDoctor.css';

const AddDoctor = () => {

    const [doctorName, setDoctorName] = useState('');
    const [doctorEmail, setDoctorEmail] = useState('');
    const [doctorPic, setDoctorPic] = useState(null);

    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()

        if (!doctorPic) {
            return;
        }
        const formData = new FormData();
        formData.append('doctorName', doctorName);
        formData.append('doctorEmail', doctorEmail);
        formData.append('doctorPic', doctorPic);

        fetch('http://localhost:7000/add_doctor', {
            method: 'POST',
            // headers: {
            //     'content-type': 'application/json'
            // },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully')
                    console.log('doctor added successfully');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    return (
        <>
            <div className='addDoctor-container'>
                <h2 className='text-center'>Add A Doctor</h2>

                <div className='text-center'>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{ width: '50%' }}
                            label="Name"
                            required
                            onChange={e => setDoctorName(e.target.value)}
                            variant="standard"
                        />
                        <br />
                        <TextField
                            sx={{ width: '50%' }}
                            label="Email"
                            type='email'
                            required
                            onChange={e => setDoctorEmail(e.target.value)}
                            variant="standard"
                        />
                        <br />
                        <Input
                            accept="image/png, image/jpg, image/pdf"
                            multiple
                            type="file"
                            onChange={e => setDoctorPic(e.target.files[0])}
                        />
                        <br />
                        <br />
                        <Button variant="contained" type='submit'>
                            Add Doctor
                        </Button>
                    </form>
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                </div>
            </div>
        </>
    );
};

export default AddDoctor;
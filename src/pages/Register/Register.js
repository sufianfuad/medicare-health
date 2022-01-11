import React from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Header from '../Shared/Header/Header';
import { Container } from 'react-bootstrap';
//CSS
import './Register.css';

import Users from './Users/Users';
import Doctor from './Doctor/Doctor';
import Attendee from './Attendee/Attendee';
import Footer from '../Shared/Footer/Footer';
const Register = () => {
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Header></Header>
            <Container className="toogle">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                            <Tab label="Users" {...a11yProps(0)} />
                            <Tab label="Doctor" {...a11yProps(1)} />
                            <Tab label="Medical Attendee" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel className="tab_bg" value={value} index={0}>
                        {/* <User></User> */}
                        <Users></Users>
                    </TabPanel>
                    <TabPanel className="tab_bg text-white" value={value} index={1}>
                        <Doctor></Doctor>
                    </TabPanel>
                    <TabPanel className="tabbg" value={value} index={2}>
                        {/* <Medical></Medical> */}
                        {/* <Attendee></Attendee> */}
                    </TabPanel>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default Register;
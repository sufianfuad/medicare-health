
import React from 'react';
import { Spinner } from 'react-bootstrap';
//import from react router dom
import { Route, Redirect } from 'react-router-dom';
//import useAuth
import useAuth from '../../../hooks/useAuth';

import './PrivateRoute.css';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center spinner">
            <Spinner animation="border" />
        </div>
    }
    return (
        <Route
            {...rest}
            // rerender
            render={({ location }) =>
                user.email ? (
                    children
                ) : (<Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
                )
            }
        >
        </Route>
    );
};

export default PrivateRoute;
import React from 'react';
import { Spinner } from 'react-bootstrap';
//import from react router dom
import { Route, Redirect } from 'react-router-dom';
//import useAuth
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center">
            <Spinner animation="border" />
        </div>
    }
    return (
        <Route
            {...rest}
            // rerender
            render={({ location }) =>
                user?.email && admin ? (
                    children
                ) : (<Redirect
                    to={{
                        pathname: "/",
                        state: { from: location }
                    }}
                />
                )
            }
        >
        </Route>
    );
};

export default AdminRoute;
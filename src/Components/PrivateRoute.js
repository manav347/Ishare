import React from 'react';
import { Redirect, Route } from 'react-router';


const PrivateRoute = ({ children, ...rest }) => {
    const USER_ID = localStorage.getItem('userid');

    return (
        <Route
            {...rest}
            render={({ location }) =>
                USER_ID ?
                    (children)
                    :
                    (
                        <Redirect
                            to={{
                                pathname: "/main",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;
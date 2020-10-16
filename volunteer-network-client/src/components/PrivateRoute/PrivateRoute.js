import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

  const [signedInUser, setSignedInUser] = useContext(UserContext);
  console.log(signedInUser)
    return (
        <Route
        {...rest}
        render={({ location }) =>
          signedInUser && signedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;
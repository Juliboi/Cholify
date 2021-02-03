import React from 'react';
import { useAuthValue } from '../context/AuthContext';
import { Route, Redirect } from 'react-router-dom';
import { IntroPage } from '../pages/main';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuthValue();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <IntroPage {...props} />
        ) : (
          <Redirect to='/login' />
        );
      }}
    ></Route>
  );
};

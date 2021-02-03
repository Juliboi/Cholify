import React from 'react';
import { BottomNavigationAction, Button } from '@material-ui/core';
import { useLocation, Link } from 'react-router-dom';

export const BottomNavLink = ({ label, value, icon }) => {
  const location = useLocation();

  return (
    <Button
      component={Link}
      className='bottom-nav__link'
      to={`/${value}`}
      selected
    >
      <BottomNavigationAction
        className={
          location.pathname === `/${value}` ? 'Mui-selected' : undefined
        }
        showLabel={location.pathname === `/${value}`}
        label={label}
        value={value}
        icon={icon}
      />
    </Button>
  );
};

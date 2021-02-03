import React, { useState } from 'react';
import { BottomNavigation } from '@material-ui/core';
import { RoomService, Favorite, LocalDining } from '@material-ui/icons';
import { BottomNavLink } from '../BottomNavLink';

export const BottomNav = () => {
  const [activePage, setActivePage] = useState();

  const handleChange = (e, newValue) => {
    setActivePage(newValue);
  };

  return (
    <BottomNavigation
      className='bottom-nav'
      value={activePage}
      onChange={handleChange}
    >
      <BottomNavLink label='Profil' value='my-profile' icon={<Favorite />} />
      <BottomNavLink
        label='Recepty'
        value='create-recipe'
        icon={<RoomService />}
      />
      <BottomNavLink label='Menu' value='my-recipes' icon={<LocalDining />} />
    </BottomNavigation>
  );
};

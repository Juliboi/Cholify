import React, { useState } from 'react';
import { BottomNavigation } from '@material-ui/core';
import { AddBox, Favorite, LocalDining } from '@material-ui/icons';
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
      <BottomNavLink
        label='Můj Profil'
        value='my-profile'
        icon={<Favorite />}
      />
      <BottomNavLink
        label='Přidat Recept'
        value='create-recipe'
        icon={<AddBox />}
      />
      <BottomNavLink
        label='Moje Recepty'
        value='my-recipes'
        icon={<LocalDining />}
      />
    </BottomNavigation>
  );
};

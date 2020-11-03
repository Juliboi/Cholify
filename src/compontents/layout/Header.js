import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

import { Link } from 'react-router-dom';

import cholifyLogo from '../../img/cholify-inline-logo-dark.svg';

export const Header = () => {
  return (
    <AppBar className='header' position='absolute'>
      <Toolbar>
        <Link to='/my-profile'>
          <img className='header__logo' src={cholifyLogo} alt='' />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

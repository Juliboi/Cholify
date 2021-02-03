import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MenuBasket } from '../MenuBasket';
import cholifyLogo from '../../img/cholify-inline-logo-dark.svg';

export const Header = ({ passRef }) => {
  return (
    <AppBar ref={passRef} className='header' position='absolute'>
      <Toolbar className='header__toolbar'>
        <Link to='/my-profile'>
          <img
            className='header__logo'
            src={cholifyLogo}
            alt='Cholify header logo'
          />
        </Link>
        <MenuBasket />
      </Toolbar>
    </AppBar>
  );
};

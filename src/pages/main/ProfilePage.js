import React, { useState } from 'react';
import { Container, Button } from '@material-ui/core';
import { BadgeAvatar } from '../../compontents/BadgeAvatar';
import { ProfileChangeModal } from '../../compontents/ProfileChangeModal';
import { ProfileTableData } from '../../compontents/ProfileTableData';
import { useAuthValue } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';

export const ProfilePage = () => {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuthValue();
  const history = useHistory();

  const handleLogout = async (e) => {
    try {
      setError();
      await logout();
      history.push('/login');
    } catch (err) {
      console.log(err);
      setError({ message: err.message, type: 'error' });
    }
  };

  return (
    <Container className='my-profile'>
      {error && (
        <MuiAlert elevation={6} variant='filled' severity={error.type}>
          {error.message}
        </MuiAlert>
      )}

      <div className='my-profile__head'>
        <BadgeAvatar />

        <h1 className='my-profile__username'>{currentUser.email}</h1>
      </div>
      <div className='my-profile__body'>
        <ProfileTableData />
        <div className='my-profile__buttons'>
          <ProfileChangeModal />
          <Button
            className='my-profile__logout'
            variant='contained'
            color='secondary'
            onClick={handleLogout}
          >
            Odhlásit se
          </Button>
        </div>
      </div>
    </Container>
  );
};

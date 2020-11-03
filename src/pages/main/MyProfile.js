import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { BadgeAvatars } from '../../compontents/BadgeAvatar';
import { MyProfileChange } from '../../compontents/MyProfileChange';
import { MyProfileTable } from '../../compontents/MyProfileTable';

export const MyProfile = () => {
  return (
    <Container className='my-profile'>
      <div className='my-profile__head'>
        <BadgeAvatars />
        <h2>Sophia Jia</h2>
      </div>
      <div className='my-profile__body'>
        <MyProfileTable />
        <MyProfileChange />
      </div>
    </Container>
  );
};

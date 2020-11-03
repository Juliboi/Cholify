import React from 'react';
import { Typography } from '@material-ui/core';

export const FoodRow = ({ title, children }) => {
  return (
    <div className='create-recipe__row'>
      <Typography gutterBottom variant='h5' component='h2'>
        {title}
      </Typography>

      <div className='create-recipe__slider'>{children}</div>
    </div>
  );
};

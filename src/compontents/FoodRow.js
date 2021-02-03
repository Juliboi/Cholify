import React from 'react';
import { Typography } from '@material-ui/core';

export const FoodRow = ({ title, children }) => {
  return (
    <div className='create-recipe__row'>
      <h3 className='create-recipe__title'>{title}</h3>

      <div className='create-recipe__slider'>{children}</div>
    </div>
  );
};

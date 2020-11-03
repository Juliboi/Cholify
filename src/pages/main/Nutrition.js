import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { NutritionTable } from '../../compontents/NutritionTable';

export const Nutrition = () => {
  return (
    <Container className='my-profile'>
      <NutritionTable />
    </Container>
  );
};

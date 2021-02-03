import React from 'react';
import { Container } from '@material-ui/core';
import { NutritionTable } from '../compontents/NutritionTable';

export const Nutrition = () => {
  return (
    <Container className='nutrition'>
      <NutritionTable />
    </Container>
  );
};

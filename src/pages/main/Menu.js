import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { useFoodStateValue } from '../../context/food-state';
import { MenuCard } from '../../compontents/MenuCard';

export const Menu = () => {
  const { foodState, setFoodState } = useFoodStateValue();

  return (
    <Container className='my-profile'>
      {foodState.map(({ title, category, nutrition, imgSrc }) => {
        return (
          <MenuCard
            setFoodState={setFoodState}
            title={title}
            category={category}
            nutrition={nutrition}
            imgSrc={imgSrc}
          />
        );
      })}
    </Container>
  );
};
// const {
//   calories,
//   protein,
//   totalFat,
//   saturatedFat,
//   monosaturatedFat,
//   polysaturatedFat,
//   cholesterol,
//   sodium,
//   iron,
//   phe,
//   fiber,
// } = nutrition;

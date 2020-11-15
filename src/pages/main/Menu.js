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
      <MenuCard
        setFoodState={setFoodState}
        title='Kuřecí Prsa'
        category='Maso'
        nutrition={{
          calories: 165,
          protein: 31,
          carbohydrate: 0,
          sugar: 0,
          totalFat: 3.6,
          saturatedFat: 1,
          monosaturatedFat: 1.2,
          polysaturatedFat: 0.7,
          cholesterol: 85,
          fiber: 0,
          iron: 1,
          sodium: 74,
          calcium: 0,
          phe: 1.05,
        }}
        imgSrc='https://image.freepik.com/free-photo/delicious-roasted-chicken-breast-white-background_1112-6651.jpg'
      />
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

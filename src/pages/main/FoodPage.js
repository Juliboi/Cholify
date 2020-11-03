import React from 'react';
import { FoodCard } from '../../compontents/FoodCard';
import { FoodRow } from '../../compontents/FoodRow';
import { MOCK_FOOD_DB } from '../../constants/mock-food';

export const FoodPage = () => {
  return (
    <>
      {MOCK_FOOD_DB.map((foodType) => {
        return (
          <FoodRow title={foodType.title}>
            {foodType.foodList.map((food, index) => {
              return (
                <FoodCard
                  key={index}
                  title={food.title}
                  imgSrc={food.imgSrc}
                  nutrition={food.nutrition}
                ></FoodCard>
              );
            })}
          </FoodRow>
        );
      })}
    </>
  );
};

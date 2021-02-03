import React from 'react';
import { Container } from '@material-ui/core';
import { useFoodStateValue } from '../context/food-state';
import { useFoodStateHelpers } from '../hooks/useFoodStateHelpers';
import { MenuCard, LottieAnimation } from '../compontents';

export const Menu = () => {
  const { foodState, setFoodState } = useFoodStateValue();
  const { isFoodStateEmpty } = useFoodStateHelpers();

  const renderFoodItems = () => {
    const foodStateItems = foodState.map(
      ({ title, category, grammage, nutrition, imgSrc }) => {
        return (
          <MenuCard
            key={title}
            setFoodState={setFoodState}
            title={title}
            category={category}
            grammage={grammage}
            nutrition={nutrition}
            imgSrc={imgSrc}
          />
        );
      }
    );

    return foodStateItems;
  };

  return (
    <Container className='menu'>
      {isFoodStateEmpty ? (
        <div className='menu__default'>
          <LottieAnimation url='./images/animations/empty-bag.json' />
          <h3>PRÁZDNO</h3>
        </div>
      ) : (
        renderFoodItems()
      )}
    </Container>
  );
};

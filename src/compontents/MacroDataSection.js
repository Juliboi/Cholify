import React from 'react';
import { useFoodStateHelpers } from '../hooks/useFoodStateHelpers';

export const MacroDataSection = ({ title, name, subSection }) => {
  const { calculateFoodValue } = useFoodStateHelpers();

  return (
    <div className='data-section'>
      <h3 className='data-section__title'>{title}</h3>
      <div className='data-section__content'>
        <p className='data-section__data'>
          Celkem:
          <span className='data-section__value'>
            {calculateFoodValue(name, 'macro')} g
          </span>
        </p>
        {subSection.map(({ title, name }) => (
          <p key={title} className='data-section__data'>
            {title}:
            <span className='data-section__value'>
              {calculateFoodValue(name, 'macro')} g
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

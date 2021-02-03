import React from 'react';
import { useFoodStateHelpers } from '../hooks/useFoodStateHelpers';

export const MicroDataSection = ({
  sectionType,
  nutrientTitle,
  nutrientType,
}) => {
  const { calculateFoodValue } = useFoodStateHelpers();

  return (
    <div className='recipe-nutrition__micro'>
      <div className='data-section'>
        <h3 className='data-section__title'>{nutrientTitle}</h3>
        <div className='data-section__content'>
          {sectionType.map(({ title, name }) => (
            //! Vitamins and minerals => check the unit system
            <p key={title} className='data-section__data'>
              {title}
              <span className='data-section__value'>
                {calculateFoodValue(name, nutrientType)} mg
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

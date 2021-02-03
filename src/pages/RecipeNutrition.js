import React from 'react';
import { Container } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import { useFoodStateHelpers } from '../hooks/useFoodStateHelpers';
import { MacroDataSection } from '../compontents/MacroDataSection';
import { MicroDataSection } from '../compontents/MicroDataSection';
import {
  MACRO_SECTION_DATA,
  VITAMINS_SECTION_DATA,
  MINERALS_SECTION_DATA,
} from '../constants/nutrients';

export const RecipeNutrition = () => {
  const { calculateFoodValue } = useFoodStateHelpers();

  //! Fatty acids comparison, Vitamin and Mineral consumption comparison
  const data = {
    datasets: [
      {
        data: MACRO_SECTION_DATA.map(({ name, type }) =>
          calculateFoodValue(name, 'macro') == 0
            ? 0.1
            : calculateFoodValue(name, 'macro')
        ),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
        ],
      },
    ],

    labels: ['Bílkoviny', 'Sacharidy', 'Tuky'],
  };

  return (
    <Container className='recipe-nutrition'>
      <div className='recipe-nutrition__dougnut'>
        <Doughnut
          data={data}
          width={240}
          height={240}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <div className='recipe-nutrition__data'>
        <div className='data-section'>
          <h3 className='data-section__title '>Kalorie</h3>
          <div className='data-section__row'>
            <p className='data-section__data'>
              Celkem:
              <span className='data-section__value'>
                {calculateFoodValue('calories', null, false)} kcal
              </span>
            </p>
          </div>
        </div>
        {
          //! Macro
          MACRO_SECTION_DATA.map(({ title, name, subSection }) => (
            <MacroDataSection
              key={title}
              title={title}
              name={name}
              subSection={subSection}
            />
          ))
        }

        <MicroDataSection
          sectionType={VITAMINS_SECTION_DATA}
          sectionTitle='Vitamíny'
          nutrientType='vitamins'
        />

        <MicroDataSection
          sectionType={MINERALS_SECTION_DATA}
          sectionTitle='Minerály'
          nutrientType='minerals'
        />
      </div>
    </Container>
  );
};

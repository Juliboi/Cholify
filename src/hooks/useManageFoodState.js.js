import { useFoodStateValue } from '../context/food-state';
import { useFoodStateHelpers } from '../hooks/useFoodStateHelpers';

export const useManageFoodState = (title, imgSrc, nutrition) => {
  const { foodState, setFoodState } = useFoodStateValue();
  const { isFoodAvailable } = useFoodStateHelpers(title);

  const addFoodToState = () => {
    if (!isFoodAvailable()) {
      setFoodState([
        ...foodState,
        {
          title,
          nutrition,
          imgSrc,
          grammage: { value: 0, unit: 'g', default: '' },
        },
      ]);
      console.log(
        `%c No ${title} copy, I have added it!`,
        'font-size: 20px;font-weight: bold;color:red;'
      );
    } else {
      console.log(`${title} is already included!`);
    }
  };

  const removeFoodFromState = () => {
    if (isFoodAvailable()) {
      const newFoodState = foodState.filter((food) => food.title !== title);
      setFoodState(newFoodState);
      console.log(
        `%c ${title} is included, I have removed it!`,
        'font-size: 20px;font-weight: bold;color:red;'
      );
    } else {
      console.log(`${title} is not included!`);
    }
  };

  return {
    addFoodToState,
    removeFoodFromState,
  };
};

import { useFoodStateValue } from '../context/food-state';

export const useFoodStateHelpers = (title) => {
  const { foodState } = useFoodStateValue();

  const isFoodStateEmpty = foodState.length === 0;

  const isFoodAvailable = () => {
    return foodState.some((food) => food.title === title);
  };

  const getAvailableFood = () => {
    return foodState.find((food) => food.title === title);
  };

  const getAvailableFoodIndex = () => {
    return foodState.findIndex((food) => food.title === title);
  };

  const calculateFoodValue = (
    nutrientName,
    nutrientType,
    isNutrient = true
  ) => {
    let totalValue = 0;
    let currentValue = 0;

    if (foodState.length > 0) {
      foodState.forEach(({ grammage, nutrition }) => {
        const grammageMultiplier = grammage.value / 100;

        let nutrientValue = isNutrient
          ? nutrition[nutrientType][nutrientName]
          : nutrition[nutrientName];

        currentValue = nutrientValue * grammageMultiplier;
        totalValue = totalValue + currentValue;
      });
    }

    return totalValue % 1 !== 0 ? totalValue.toFixed(1) : totalValue;
  };

  return {
    isFoodStateEmpty,
    isFoodAvailable,
    getAvailableFood,
    getAvailableFoodIndex,
    calculateFoodValue,
  };
};

import React, { createContext, useContext, useState } from 'react';

export const FoodStateContext = createContext();

export const FoodStateProvider = ({ children }) => {
  const [foodState, setFoodState] = useState([]);

  return (
    <FoodStateContext.Provider value={{ foodState, setFoodState }}>
      {children}
    </FoodStateContext.Provider>
  );
};

export const useFoodStateValue = () => useContext(FoodStateContext);

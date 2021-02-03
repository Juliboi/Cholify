import React, { createContext, useContext, useState } from 'react';

export const MenuStateContext = createContext();

export const MenuStateProvider = ({ children }) => {
  const [menuState, setMenuState] = useState([]);

  return (
    <MenuStateContext.Provider value={{ menuState, setMenuState }}>
      {children}
    </MenuStateContext.Provider>
  );
};

export const useMenuStateValue = () => useContext(MenuStateContext);

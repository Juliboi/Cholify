import React from 'react';
import { MenuItemCard } from '../compontents/MenuItemCard';
import { Container } from '@material-ui/core';
import { useMenuStateValue } from '../context/menu-state';

export const MenuItemsPage = () => {
  const { menuState } = useMenuStateValue();

  return (
    <Container className='items-page'>
      {/* <div className='items-page__header'>
        <h3 className='create-recipe__title'>Moje Recepty</h3>
      </div> */}
      <div className='items-page__content'>
        {menuState.map(({ name, items }) => (
          <MenuItemCard name={name} items={items} />
        ))}
      </div>
    </Container>
  );
};

import React, { useState, useEffect } from 'react';
import { AppBar, Tabs, Tab, Container } from '@material-ui/core';
import { RecipeNutrition } from '../';
import { MenuItemsPage } from '../MenuItemsPage';
import { TabPanel } from '../../compontents';
import { a11yProps } from '../../helpers';
import { useFoodStateValue } from '../../context/food-state';
import { FABS } from '../../constants/fabs';

export function MenuPage({ header }) {
  const [value, setValue] = useState(0);
  const [isPassedHeader, setIsPassedHeader] = useState(false);
  const { foodState, setFoodState } = useFoodStateValue();

  const handleHeaderScroll = () => {
    const scrollDistance = window.scrollY;
    const headerHeight = header.current.offsetHeight;

    scrollDistance >= headerHeight
      ? setIsPassedHeader(true)
      : setIsPassedHeader(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleHeaderScroll);
    // console.log('foodState', foodState);
    return () => {
      window.removeEventListener('scroll', handleHeaderScroll);
    };
  }, [isPassedHeader]);

  return (
    <Container className='create-recipe'>
      <div className='create-recipe__header'>
        <AppBar position={isPassedHeader ? 'fixed' : 'static'} color='default'>
          <Tabs
            value={value}
            onChange={(e, index) => setValue(index)}
            indicatorColor='primary'
            textColor='primary'
            variant='fullWidth'
            aria-label='action tabs example'
          >
            <Tab label='Menu' {...a11yProps(0)} />
            <Tab label='Živiny' {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      </div>
      <div className='create-recipe__content' onScroll={handleHeaderScroll}>
        <TabPanel value={value} index={0}>
          <MenuItemsPage />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RecipeNutrition />
        </TabPanel>
      </div>
      {/* {FABS.map((fab, index) => (
        <CreateRecipeModal key={index} fab={fab} value={value} index={index} />
      ))} */}
    </Container>
  );
}

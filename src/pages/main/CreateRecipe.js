import React, { useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { AppBar, Tabs, Tab, Zoom, Fab, Container } from '@material-ui/core';
import { FoodPage } from './FoodPage';
import { Menu } from './Menu';
import { Nutrition } from './Nutrition';
import { TabPanel } from '../../compontents/TabPanel';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Fastfood } from '@material-ui/icons';
import { useFoodStateValue } from '../../context/food-state';

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(10),
    right: theme.spacing(4),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

export function CreateRecipe() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      className: classes.fab,
      icon: <Fastfood />,
      label: 'Nutrition',
    },
    {
      color: 'primary',
      className: classes.fab,
      icon: <Fastfood />,
      label: 'Nutrition',
    },
    {
      color: 'primary',
      className: classes.fab,
      icon: <Fastfood />,
      label: 'Nutrition',
    },
  ];

  const { foodState, setFoodState } = useFoodStateValue();

  useEffect(() => {
    console.log(foodState);
  }, [foodState]);

  return (
    <Container className='create-recipe'>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          aria-label='action tabs example'
        >
          <Tab label='Jídla' {...a11yProps(0)} />
          <Tab label='Menu' {...a11yProps(1)} />
          <Tab label='Živiny' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <FoodPage />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Menu />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Nutrition foodState={foodState} setFoodState={setFoodState} />
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (
        <Zoom
          key={index}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${
              value === index ? transitionDuration.exit : 0
            }ms`,
          }}
          unmountOnExit
        >
          <Fab
            aria-label={fab.label}
            className={fab.className}
            color={fab.color}
          >
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </Container>
  );
}

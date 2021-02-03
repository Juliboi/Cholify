import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Zoom, Fab } from '@material-ui/core';
import { useFoodStateHelpers } from '../hooks/useFoodStateHelpers';
// import { Fastfood } from '@material-ui/icons';

import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(13),
    right: theme.spacing(4),
  },
  icon: {
    width: '30px',
    height: '30px',
  },
}));

export const Fabs = ({ fab, value, index, setOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  const { isFoodStateEmpty } = useFoodStateHelpers();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Zoom
      key={index}
      in={value === index}
      timeout={transitionDuration}
      style={{
        transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
      }}
      unmountOnExit
    >
      <Fab
        disabled={isFoodStateEmpty}
        onClick={() => setOpen(true)}
        aria-label={fab.label}
        className={classes.fab}
        color={fab.color}
      >
        <AddIcon className={classes.icon} />
      </Fab>
    </Zoom>
  );
};

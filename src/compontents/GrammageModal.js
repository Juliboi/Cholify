import React, { useState, useEffect } from 'react';
import { useFoodStateValue } from '../context/food-state';
import { setInputFilter } from '../helpers/setInputFilter';
import { getGrammageUnit } from '../helpers/getGrammageUnit';
import { useFoodStateHelpers } from '../hooks/useFoodStateHelpers.js';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  Input,
  FormControl,
  TextField,
  Select,
  InputAdornment,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  marginTop: {
    marginTop: '2rem',
  },
  marginRight: {
    marginRight: '0.5rem',
  },
}));

export function GrammageModal({ title, content }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [grammage, setGrammage] = useState('');
  const [grammageUnit, setGrammageUnit] = useState('Gramy');

  const { setFoodState } = useFoodStateValue();
  const { getAvailableFood, getAvailableFoodIndex } = useFoodStateHelpers(
    title
  );

  const getGrammageStateValue = () => {
    return getAvailableFood().grammage.value;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setGrammageState = () => {
    setFoodState((prevState) => {
      return prevState.map((food, index) => {
        if (index === getAvailableFoodIndex()) {
          return {
            ...prevState[index],
            grammage: {
              ...prevState[index].grammage,
              value: Number(grammage),
              unit: getGrammageUnit(grammageUnit),
            },
          };
        } else {
          return food;
        }
      });
    });

    handleClose();
  };

  useEffect(() => {
    getGrammageStateValue() !== 0 && setGrammage(getGrammageStateValue());
  }, []);

  return (
    <div>
      <Button
        className={classes.marginRight}
        variant='contained'
        color='primary'
        onClick={() => setOpen(true)}
      >
        {content}
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor='demo-dialog-native'>Jednotka</InputLabel>
              <Select
                native
                value={grammageUnit}
                onChange={(e) => setGrammageUnit(e.target.value || '')}
                input={<Input id='demo-dialog-native' />}
              >
                <option value='Kilogramy'>Kilogramy</option>
                <option value='Gramy'>Gramy</option>
                <option value='Kus'>Kus</option>
              </Select>
            </FormControl>
            <TextField
              onClick={() =>
                setInputFilter(
                  document.getElementById('outlined-start-adornment'),
                  function (value) {
                    return /^-?\d*$/.test(value);
                  }
                )
              }
              onInput={(e) => {
                setGrammage(e.target.value);
              }}
              label='With normal TextField'
              id='outlined-start-adornment'
              className={clsx(classes.marginTop, classes.textField)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {getGrammageUnit(grammageUnit)}
                  </InputAdornment>
                ),
              }}
              value={grammage}
              variant='outlined'
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color='primary'>
            Cancel
          </Button>
          <Button onClick={setGrammageState} color='primary'>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

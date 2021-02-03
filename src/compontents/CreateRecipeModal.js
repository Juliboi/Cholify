import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { Fabs } from '../compontents/Fabs';
import { useFoodStateValue } from '../context/food-state';
import { useMenuStateValue } from '../context/menu-state';

const useStyles = makeStyles((theme) => ({
  width: {
    minWidth: '250px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export function CreateRecipeModal({ fab, value, index }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const { foodState } = useFoodStateValue();
  const { menuState, setMenuState } = useMenuStateValue();

  const createRecipe = () => {
    setOpen(false);

    setMenuState([...menuState, { name: inputText, items: foodState }]);
  };

  useEffect(() => {
    console.log('menuState', menuState);
  }, [menuState]);

  return (
    <div>
      <Fabs fab={fab} value={value} index={index} setOpen={setOpen} />
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>Vytvořit Recept</DialogTitle>
        <DialogContent className={classes.width}>
          <TextField
            onInput={(e) => setInputText(e.target.value)}
            autoFocus
            margin='dense'
            id='name'
            label='Název Receptu'
            type='email'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color='primary'>
            Cancel
          </Button>
          <Button
            disabled={inputText === ''}
            onClick={createRecipe}
            color='primary'
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
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
}));

export function GrammageModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [grammage, setGrammage] = useState('');
  const [grammageUnit, setGrammageUnit] = useState('Gramy');

  const inputValue = useRef();

  const handleChange = (event) => {
    setGrammageUnit(event.target.value || '');
    console.log(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getGrammageUnit = () => {
    return grammageUnit === 'Kilogramy'
      ? 'Kg'
      : grammageUnit === 'Gramy'
      ? 'g'
      : grammageUnit === 'Kus'
      ? 'ks'
      : '';
  };

  return (
    <div>
      <Button variant='contained' color='primary' onClick={handleClickOpen}>
        Upravit
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Gramáž</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor='demo-dialog-native'>Jednotka</InputLabel>
              <Select
                native
                value={grammageUnit}
                onChange={handleChange}
                input={<Input id='demo-dialog-native' />}
              >
                <option value='Kilogramy'>Kilogramy</option>
                <option value='Gramy'>Gramy</option>
                <option value='Kus'>Kus</option>
              </Select>
            </FormControl>
            <TextField
              onChange={(e) => setGrammage(e.target.value)}
              label='With normal TextField'
              id='outlined-start-adornment'
              className={clsx(classes.marginTop, classes.textField)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {getGrammageUnit()}
                  </InputAdornment>
                ),
              }}
              value={grammage}
              variant='outlined'
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

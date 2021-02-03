import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },

  textField: {
    width: '100%',
    margin: 0,
    marginBottom: '1.5rem',
  },
}));

export const PasswordInput = ({ text, setValue }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState();

  return (
    <FormControl
      className={clsx(classes.margin, classes.textField)}
      variant='outlined'
    >
      <InputLabel htmlFor='outlined-adornment-password'>{text}</InputLabel>
      <OutlinedInput
        id='outlined-adornment-password'
        type={showPassword ? 'text' : 'password'}
        onChange={(e) => setValue(e.target.value)}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={() => setShowPassword(!showPassword)}
              edge='end'
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
    </FormControl>
  );
};

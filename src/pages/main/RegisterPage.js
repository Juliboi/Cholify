import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, TextField } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useAuthValue } from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

import { LottieAnimation, PasswordInput } from '../../compontents';

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

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { signup } = useAuthValue();
  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log('error');
      return setError({ message: 'Hesla se neshodují', type: 'error' });
    }

    try {
      setError();
      setLoading(true);
      await signup(email, password);
      history.push('/');
    } catch (err) {
      console.log(err);
      setError({ message: err.message, type: 'error' });
    }

    setLoading(false);
  };

  return (
    <Container className='auth auth--login'>
      {error && (
        <MuiAlert elevation={6} variant='filled' severity={error.type}>
          {error.message}
        </MuiAlert>
      )}

      <div className='auth__header'>
        <LottieAnimation url='./images/animations/cooking.json' />
        <h1 className='auth__title'>Vytvořit účet</h1>
      </div>
      <div className='auth__body'>
        <form id='login' onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            className={classes.textField}
            id='outlined-basic'
            label='E-mail'
            variant='outlined'
          />
          <PasswordInput setValue={setPassword} text='Heslo' />
          <PasswordInput setValue={setConfirmPassword} text='Potvrdit heslo' />
          <Button
            disabled={loading}
            onClick={handleSubmit}
            type='submit'
            className='auth__login'
            variant='contained'
            color='primary'
          >
            Zaregistrovat se
          </Button>
        </form>
      </div>
      <div className='auth__footer'>
        <Link to='/login' disabled={loading} color='primary'>
          Přihlásit se
        </Link>
      </div>
    </Container>
  );
};

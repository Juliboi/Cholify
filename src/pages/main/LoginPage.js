import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import MuiAlert from '@material-ui/lab/Alert';

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

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { login } = useAuthValue();
  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError();
      setLoading(true);
      await login(email, password);
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
        <h1 className='auth__title'>Vítejte zpátky</h1>
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
          <Button
            disabled={loading}
            type='submit'
            className='auth__login'
            variant='contained'
            color='primary'
          >
            Přihlásit se
          </Button>
        </form>
      </div>
      <div className='auth__footer'>
        <Button disabled={loading} variant='outlined' color='primary'>
          Přihlásit se přes Google
        </Button>
        <Link disabled={loading} to='/register' color='primary'>
          Registrace
        </Link>
      </div>
    </Container>
  );
};

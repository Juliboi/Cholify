import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { LottieAnimation } from '../../compontents/LottieAnimation';
import { useHistory } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';

export const IntroPage = () => {
  const history = useHistory();
  const [hidden, setHidden] = useState(true);
  const { currentUser, logout } = useAuthValue();

  useEffect(() => {
    setTimeout(() => setHidden(false), 500);
  }, []);

  return (
    <div className={`intro-page ${hidden ? 'intro-page--hidden' : undefined}`}>
      <LottieAnimation url='./images/animations/carrot-rocket.json' />
      <h2 className='intro-page__title'>Vítej Na Cholify!</h2>
      <Button
        variant='contained'
        color='primary'
        onClick={() => history.push('/create-recipe')}
      >
        Vytvořit Recept
      </Button>
    </div>
  );
};

import './App.scss';
import React, { useRef } from 'react';
import { useAuthValue } from './context/AuthContext';
import { Switch, Route } from 'react-router-dom';
import {
  CreateRecipe,
  MenuPage,
  ProfilePage,
  IntroPage,
  LoginPage,
  RegisterPage,
} from './pages/main';
import { Header, BottomNav } from './compontents/layout';
import { PrivateRoute } from './compontents';

function App() {
  const header = useRef();
  const { currentUser } = useAuthValue();

  return (
    <Switch>
      <div className='app'>
        <Header passRef={header} />

        <div className='app__content'>
          <PrivateRoute exact path='/' component={IntroPage} />
          {currentUser && (
            <>
              <Route path='/my-profile'>
                <ProfilePage />
              </Route>
              <Route path='/create-recipe'>
                <CreateRecipe header={header} />
              </Route>
              <Route path='/my-recipes'>
                <MenuPage header={header} />
              </Route>
            </>
          )}
        </div>

        <BottomNav />

        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegisterPage />
        </Route>
      </div>
    </Switch>
  );
}

export default App;

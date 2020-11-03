import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { BottomNav } from './compontents/layout/BottomNav';
import { Header } from './compontents/layout/Header';
import { CreateRecipe, MyRecipes, MyProfile } from './pages/main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Container className='app__content'>
          <Switch>
            <Route path='/my-profile' exact>
              <MyProfile />
            </Route>
            <Route path='/create-recipe'>
              <CreateRecipe />
            </Route>
            <Route path='/my-recipes'>
              <MyRecipes />
            </Route>
          </Switch>
        </Container>

        <BottomNav />
      </Router>
    </div>
  );
}

export default App;

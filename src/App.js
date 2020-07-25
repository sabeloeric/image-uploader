import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Register from './components/Register'
import Home from './components/Home'
import Signin from './components/Signin'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import Logout from './components/Logout'
import Uploud from './components/Upload'

function App() {
  return (
    <main>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signout' component={Logout} />
        <Route exact path='/uploud' component={Uploud} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;

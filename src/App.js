import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Register from './components/Register'
import Home from './components/Home'
import Signin from './components/Signin'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'

function App() {
  return (
    <main>
      <Switch>
        <Navbar />
        <Route path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/signin' component={Signin} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Repositories from './pages/Repositories';

export default function Routes() {
  return (
    <BrowserRouter basename="/gama-git">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/repositories" component={ Repositories } />
      </Switch>
    </BrowserRouter>
  )
}

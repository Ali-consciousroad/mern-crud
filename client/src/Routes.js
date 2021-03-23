import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Create from './Create';


const Routes = () => {
  return (
    <BrowserRoute>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/create" exact component={Create} />
      </Switch>
    </BrowserRoute>
  );
};

export default Routes;

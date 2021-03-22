import React from 'react';
import { BrowsereRouter, Switch, Route } from 'react-router-dom';
import App from './App';

const Routes = () => {
  return (
    <BrowsereRoute>
      <switch>
        <Route path="/create" exact component={Create} />
      </switch>
    </BrowsereRoute>
  );
};

export default Routes; 

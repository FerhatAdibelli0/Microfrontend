import Landing from './components/Landing';
import Pricing from './components/Pricing';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';
import React from 'react';

const App = () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/pricing' component={Pricing} />
          <Route path='/' component={Landing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
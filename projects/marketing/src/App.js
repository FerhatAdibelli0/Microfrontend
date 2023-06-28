import Landing from './components/Landing';
import Pricing from './components/Pricing';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import React from 'react';

const generateClassname = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassname={generateClassname}>
        <Switch>
          <Route exact path='/pricing' component={Pricing} />
          <Route path='/' component={Landing} />
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;

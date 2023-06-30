import Landing from './components/Landing';
import Pricing from './components/Pricing';
import { Route, Switch, Router } from 'react-router-dom';
import React from 'react';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassname = createGenerateClassName({
  productionPrefix: 'market',
});

const App = ({ history }) => {
  console.log('author in marketing : Ferhat adibelli...');
  return (
    <div>
      <Router history={history}>
        <StylesProvider generateClassname={generateClassname}>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route path='/' component={Landing} />
          </Switch>
        </StylesProvider>
      </Router>
    </div>
  );
};

export default App;

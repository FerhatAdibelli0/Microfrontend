import { Switch, Router, Route } from 'react-router-dom';
import React from 'react';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

const generateClassname = createGenerateClassName({
  productionPrefix: 'auth',
});

const App = ({ history, onSignIn }) => {
  console.log('author : ferhat adibelli');
  return (
    <div>
      <Router history={history}>
        <StylesProvider generateClassname={generateClassname}>
          <Switch>
            <Route path='/auth/signin'>
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path='/auth/signup'>
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </StylesProvider>
      </Router>
    </div>
  );
};

export default App;

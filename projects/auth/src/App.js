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

const App = ({ history }) => {
  console.log('auth');
  return (
    <div>
      <Router history={history}>
        <StylesProvider generateClassname={generateClassname}>
          <Switch>
            <Route path='/auth/signin' component={Signin} />
            <Route path='/auth/signup' component={Signup} />
          </Switch>
        </StylesProvider>
      </Router>
    </div>
  );
};

export default App;

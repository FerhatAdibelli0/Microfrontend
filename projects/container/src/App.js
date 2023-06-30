import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import Header from './components/Header';
import { createBrowserHistory } from 'history';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Progress from './components/Progress';

const generateClassname = createGenerateClassName({
  productionPrefix: 'container',
});

const history = createBrowserHistory();

const LazyMarketingApp = lazy(() => import('./components/MarketingApp'));
const LazyAuthApp = lazy(() => import('./components/AuthApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  console.log('author in container : Ferhat adibelli...');

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassname}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth'>
                <LazyAuthApp onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path='/dashboard'>
                {!isSignedIn && <Redirect to='/' />}
                <DashboardApp />
              </Route>
              <Route path='/' component={LazyMarketingApp} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;

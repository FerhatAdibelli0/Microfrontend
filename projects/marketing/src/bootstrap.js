import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (element, { onNavigate, defaultRouter }) => {
  const history = defaultRouter || createMemoryHistory();

  const onParentNavigation = ({ pathname: nextPathname }) => {
    const { pathname } = history.location;
    if (pathname !== nextPathname) {
      history.push(nextPathname);
    }
  };

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, element);

  return { onParentNavigation };
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot, { defaultRouter: createBrowserHistory() });
  }
}

export { mount };

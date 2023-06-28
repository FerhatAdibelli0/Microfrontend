import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassname = createGenerateClassName({
  productionPrefix: 'container',
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassname}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;

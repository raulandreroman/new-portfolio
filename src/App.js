//App.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/main.css';
import Home from './pages/Home';
import { ThemeProvider } from './containers/ThemeContext';
import { LanguageProvider } from './containers/Language';

import Cursor from './components/Cursor';
import { isMobile } from 'react-device-detect';

function App() {
  return (
    <>
      {!isMobile && <Cursor />}
      <LanguageProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}

export default App;

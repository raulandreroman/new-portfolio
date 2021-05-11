//App.js
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/main.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './containers/ThemeContext';
import { LanguageProvider } from './containers/Language';

import Cursor from './components/Cursor';
import { isMobile } from 'react-device-detect';
import UnderConstruction from './pages/UnderConstruction';

function App() {
  return (
    <>
      {!isMobile && <Cursor />}
      <LanguageProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={UnderConstruction} />
              <Route
                path="/:locale(en|es)"
                exact
                component={UnderConstruction}
              />
              <Route path="/404" component={NotFound} />
              <Redirect to="/404" />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}

export default App;

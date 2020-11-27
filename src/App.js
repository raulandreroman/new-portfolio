//App.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/main.css';
// import Home from './pages/Home';
import { ThemeProvider } from './containers/ThemeContext';
import { LanguageProvider } from './containers/Language';

import Cursor from './components/Cursor';
import ComingSoon from './pages/ComingSoon';


function App() {
  return (
    <>
      <Cursor />
      <LanguageProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={ComingSoon} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}
export default App;

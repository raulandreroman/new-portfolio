//App.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/main.css';
import Home from './pages/Home';
import { ThemeProvider } from './containers/ThemeContext';
import { LanguageProvider } from './containers/Language';

function App() {
  return (
    <div>
      <LanguageProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}
export default App;

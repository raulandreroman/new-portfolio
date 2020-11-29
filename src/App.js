//App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/main.css';
import Home from './pages/Home';
import { ThemeProvider } from './containers/ThemeContext';
import { LanguageProvider } from './containers/Language';

import Cursor from './components/Cursor';
import ComingSoon from './pages/ComingSoon';
import { isMobile } from 'react-device-detect';

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick(e) {
    const isH2 =
      e.target ===
      document.querySelector(
        '.text-4xl.text-white.font-medium.text-center.z-20'
      );
    const isEnd = e.y > 419 && e.y < 440;
    if (isH2 && isEnd) {
      setCounter((c) => c + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('click', (e) => handleClick(e));

    return () => {
      window.removeEventListener('click', (e) => handleClick(e));
    };
  }, []);

  useEffect(() => {
    if (counter === 7) {
      window.location.href = '/home';
    }
  }, [counter]);
  return (
    <>
      {!isMobile && <Cursor />}
      <LanguageProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={ComingSoon} />

              <Route path="/home" exact component={Home} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}
export default App;

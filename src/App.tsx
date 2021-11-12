//App.js
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/main.css';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './containers/ThemeContext';
import { LanguageProvider } from './containers/Language';

import Cursor from './components/Cursor';
import { isMobile } from 'react-device-detect';

import Home from './pages/Home';

function App() {
    return (
        <>
            {!isMobile && <Cursor />}
            <LanguageProvider>
                <ThemeProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route
                                path="/:locale(en|es)"
                                exact
                                component={Home}
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

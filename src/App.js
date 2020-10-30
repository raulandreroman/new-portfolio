//App.js
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/main.css";
import Home from "./pages/Home";
import ThemeContext from './utilities/ThemeContext';


function App() {
return (
<div>
<ThemeContext>
 <BrowserRouter>
    <Switch>
       <Route path='/' exact component={Home} />
     </Switch>
 </BrowserRouter>
 </ThemeContext>
</div>
);
}
export default App;
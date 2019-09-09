import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {HashRouter as Router, Route} from "react-router-dom";
import Characters from "./Characters.js";
import Navbar from "./Navbar.js";
import Menu from "./Menu.js";
import Title from "./Title.js";
import Planets from "./Planets";
import Movies from "./Movies.js";
import Species from "./Species.js";
import Quotes from "./Quotes.js";
import Reddit from "./Reddit.js";

const routing = (
    <Router>
        <Route exact path="/" component={App} />
        <Route path="/characters" component={Characters} />
        <Route path="/planets" component={Planets} />
        <Route path="/movies" component={Movies} />
        <Route path="/Species" component={Species} />
        <Route path="/home" component={App} />
        <Route path="/quotes" component={Quotes} />
        <Route path="/Reddit" component={Reddit} />
    </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

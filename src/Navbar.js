import React from "react";
import "./Navbar.css";
import Characters from "./Characters";
import Planets from "./Planets.js";
import App from "./App.js";
import Title from "./Title.js";
import Reddit from "./Reddit.js";

function Navbar(){
    return(
    <div>
        <ul className="Navul">
            <li> <a href="#/Home">Home</a> </li> 
            <li> <a href="#/characters">Characters</a> </li> 
            <li> <a href="#/Species">Species</a> </li> 
            <li> <a href="#/planets">Planets</a> </li> 
            <li> <a href="#/movies">Movies</a> </li> 
            <li> <a href="#/quotes">Quotes</a> </li> 
            <li> <a href="#/reddit">Reddit</a> </li> 

        </ul>
    </div>
    );
}

export default Navbar;

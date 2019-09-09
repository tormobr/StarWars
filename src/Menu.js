import React, {Component} from "react";
import "./Menu.css";
import Characters from "./Characters";
import chars from "./chars.jpg";
import planets from "./planets.jpg";
import movies from "./movies.jpg";
import species from "./species.jpg";

class Menu extends Component{


    render(){
        return(
            <div className="MainMenu">
				<a className="MenuEntry" href="#/Characters">
                    <img src={chars} alt="Avatar" style={{width:"100%"}}/>
                    <h1> Characters </h1>
                    <p> description </p>
				</a>
				<a className="MenuEntry" href="#/planets">
                    <img src={planets} alt="Avatar" style={{width:"100%"}}/>
                    <h1> Planets </h1>
                    <p> description </p>
				</a>
				<a className="MenuEntry" href="#/movies">
                    <img src={movies} alt="Avatar" style={{width:"100%"}}/>
                    <h1> Movies </h1> 
                    <p> description </p>
				</a>
				<a className="MenuEntry" href="#/species">
                    <img src={species} alt="Avatar" style={{width:"100%"}}/>
                    <h1> Species </h1> 
                    <p> description </p>
				</a>
            </div>
        );
    }
}

export default Menu;

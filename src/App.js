import React, { Component } from 'react';
import Card from "./Card.js";
import "./App.css";
import Characters from "./Characters.js";
import Navbar from "./Navbar.js";
import Menu from "./Menu.js";
import Title from "./Title.js";
import Planets from "./Planets";

class App extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div className="App">
                <Navbar />
                <Title titleName="Star Wars Universe"/>
                <Menu/>
            </div>
        );
    }
}

export default App;

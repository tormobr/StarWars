
import React, { Component } from 'react';
import ReactLoading from "react-loading";
import "./Planets.css";
import Title from "./Title.js";
import Navbar from "./Navbar.js";
import Loading from "./Loading.js";

class Planets extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            loaded: false,
            next: "https://swapi.co/api/planets/",
        }
    }
    componentDidMount = async () => {
        var i = 1;
        do{
            await fetch(this.state.next)
                .then(response => response.json())
                .then((json)=>{
                    
                    this.setState({
                        items: this.state.items.concat(json.results),
                        OGItems: this.state.items,
                        next: json.next,
                    });
            });
            i += 1;
        }
        while(this.state.next != null)
        this.setState({
            loaded: true, 
        });
    }

    render() {
        var {loaded, items} = this.state;
        if(! loaded){
            return(
                <div className="All"> 
                    <Loading />
                </div>
            );

        }
        else{
            return (
                <div className="All">
                    <Navbar />
                    <Title titleName="Planets" />
                    <div className="PlanetList">
                        {items.map((item) => {
                            return(
                                <div className="PlanetContainer">
                                    <h1 id="Name" style={{color:"white"}}> {item.name} </h1>
                                    <div>
                                        <table>
                                        <tr>
                                            <td> Rotation Period: </td>
                                            <td> {item.rotation_period}</td>
                                        </tr>
                                        <tr>
                                            <td> Orbital Period: </td>
                                            <td> {item.orbital_period}</td>
                                        </tr>
                                        <tr>
                                            <td> Diameter: </td>
                                            <td> {item.diameter}</td>
                                        </tr>
                                        <tr>
                                            <td> Population: </td>
                                            <td> {item.population}</td>
                                        </tr>
                                        <tr>
                                            <td> Terrain: </td>
                                            <td> {item.terrain}</td>
                                        </tr>
                                        <tr>
                                            <td> Gravity: </td>
                                            <td> {item.gravity}</td>
                                        </tr>
                                        <tr>
                                            <td> Surface Water: </td>
                                            <td> {item.surface_water}</td>
                                        </tr>
                                        </table>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            );
        }
    }
}

export default Planets;

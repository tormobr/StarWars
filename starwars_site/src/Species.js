

import React, { Component } from 'react';
import ReactLoading from "react-loading";
import "./Species.css";
import Title from "./Title.js";
import Navbar from "./Navbar.js";
import Loading from "./Loading.js";

class Species extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            loaded: false,
            next: "https://swapi.co/api/species/",
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
                    <Title titleName="Species" />
                    <div className="PlanetList">
                        {items.map((item) => {
                            return(
                                <div className="PlanetContainer">
                                    <h1 id="Name" style={{color:"white"}}> {item.name} </h1>
                                    <div>
                                        <table>
                                        <tr>
                                            <td> Classification: </td>
                                            <td> {item.classification}</td>
                                        </tr>
                                        <tr>
                                            <td> Designation: </td>
                                            <td> {item.designation}</td>
                                        </tr>
                                        <tr>
                                            <td> Avg. Height: </td>
                                            <td> {item.average_height}</td>
                                        </tr>
                                        <tr>
                                            <td> Skin Colors: </td>
                                            <td> {item.skin_colors}</td>
                                        </tr>
                                        <tr>
                                            <td> Hair Colors: </td>
                                            <td> {item.hair_colors}</td>
                                        </tr>
                                        <tr>
                                            <td> Avg. Liifespan: </td>
                                            <td> {item.average_lifespan}</td>
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

export default Species;

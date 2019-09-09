
import React, { Component } from 'react';
import Card from "./Card.js";
import "./Characters.css";
import MovieCard from "./MovieCard.js";
import Title from "./Title.js";
import Navbar from "./Navbar";
import Loading from "./Loading";

class Movies extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            loaded: false,
        }
    }
    componentDidMount(){
        fetch("https://swapi.co/api/films/")
            .then(response => response.json())
            .then((json)=>{
                this.setState({
                    loaded: true,
                    items: json,
                });
        });
    }

    render() {
        var {loaded, items} = this.state;
        if(! loaded){
            return( <Loading />);
        }
        else{
            return (
                <div className="All">
                    <Navbar />
                    <Title titleName="Movies"/>
                    <div className="Characters">
                    {items.results.map(item  => (
                        <MovieCard name={item.title} key={item.name }/>
                    ))}

                    </div>
                </div>
            );
        }
    }
}

export default Movies;

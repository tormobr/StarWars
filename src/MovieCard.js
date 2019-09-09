import React, {Component}from "react";
import "./Card.css";
import MoviePop from "./MoviePop.js";

class Card extends Component {

    constructor(props){
        super(props);
        this.state = {
            image: "",
            loaded: false,
            title: props.name,
        }
    }
    componentDidMount(){
        fetch("https://www.omdbapi.com/?s=".concat(this.state.title, "&apikey=4a3b711b"))
            .then(response => response.json())
            .then((json)=>{
                return fetch("http://www.omdbapi.com/?i=".concat(json.Search[0].imdbID,"&apikey=4a3b711b"));
        })
        .then(response => response.json())
        .then((json) => {
            this.setState({
                loaded: "true",
                items: json,
                image: json.Poster,
            });
        });
    }

    togglePopup(){
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        var {loaded, items, image, title} = this.state;
        if(! loaded){
            return( <div> Lodaing... </div>);
        }
        else{
            return (
                <div className="Container" onClick={this.togglePopup.bind(this)}>
                    
                    <img src={image} alt="Avatar" style={{width:"100%"}}/>
                    <h2> {title} </h2>
                    {this.state.show?
                    <MoviePop
                        item={items}
                        image={image}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null}
                </div>
            );
        }
    }
}

export default Card;

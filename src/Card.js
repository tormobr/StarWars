import React, {Component}from "react";
import "./Card.css";
import luke from "./luke.png";
import Popup from "./CharPopup.js";


class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: props.item,
            image: "",
            loaded: false,
            show: false,
        }
    }

    componentDidMount(){
        fetch("https://akabab.github.io/starwars-api/api/all.json")
        .then(response => response.json())
        .then((json) => {
            for(var i = 0; i < json.length; i++){
                if(json[i].name.toLowerCase() == this.state.item.name.toLowerCase()){
                    this.setState({
                        image: json[i].image,
                        loaded: true,
                    });
                }
            }
        });
    }

    togglePopup(){
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        var {loaded, image, item} = this.state;
        if(!loaded){
            return (<div> ... </div>);
        }
        else{
            return (
                <div className="Container" onClick={this.togglePopup.bind(this)}>
                    <h4 id="Name"><b>{this.state.item.name}</b></h4> 
                    <img src={this.state.image} alt="Avatar" style={{width:"50%"}}/>
                    {this.state.show?
                    <Popup
                        item={item}
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

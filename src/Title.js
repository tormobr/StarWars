import React, {Component} from "react";
import "./Title.css";

class Title extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.titleName,
        }
    }
    render(){
        return (
            <div className="MainTitle">
                <h1> {this.state.name}</h1>
            </div>
        );
    }
}

export default Title;

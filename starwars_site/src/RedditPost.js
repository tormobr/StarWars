
import React, {Component}from "react";
import "./Card.css";
import luke from "./luke.png";
import Popup from "./RedditPop.js";
import placeholderImage from "./placeholder.png";

class RedditPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: props.items,
            show: false,
        }
    }

    togglePopup(){
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        var {items} = this.state;
        return (
            <div className="Container" onClick={this.togglePopup.bind(this)}>
                <h4 id="Name"><b>{items.data.title}</b></h4> 
                {items.data.url != "default"?
                <img src={items.data.url} alt="image Missing" style={{width:"80%"}}/>
                :
                <img src={placeholderImage} alt="Image missing" style={{width:"80%"}}/>
                }
                <h3> upvotes: {items.data.ups} </h3>
                {this.state.show?
                <Popup
                    item={items.data}
                    image={items.data.url}
                    closePopup={this.togglePopup.bind(this)}
                />
                : null}
            </div>
        );
    }
}

export default RedditPost;

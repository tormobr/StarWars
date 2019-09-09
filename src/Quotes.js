import React, {Component} from "react";
import Title from "./Title.js";
import "./Characters.css";
import Navbar from "./Navbar.js";

class Quote extends Component{
    constructor(props){
        super(props);
        this.getQuote = this.getQuote.bind(this);
    }
    getQuote(){

        var quotes = [
            "'I hate you' - Anakin skywalker",
            "'If you are not wih me you are agains me' - Anakin skywalker",
            "'You were suppose to destroy the sith, not join them' - Obi-Wan Kenobi",
            "'You were my brother Anakin, i loved you' - Obi-Wan Kenobi",
            "'It over Anakin, i have the high ground' - Obi-Wan Kenobi",
            "'Dont try it' - Obi-Wan Kenobi",
            "'You underestimate my powers' - Anakin Skywalker",
            "'It's treson then' - The Senate",
            "'I am the senate' - The Senate",
            "'The senate will decide you fate' - Mace Windu",
            "'I love democracy' - The Senate",
            "'I have a bad feeling about this' - Obi-Wan Kenobi"
        ]
        var random = Math.floor(Math.random() * (+quotes.length)); 
        this.refs.QuoteText.childNodes[0].nodeValue = quotes[random];
    }
    render(){
        return(
            <div>
                <Navbar />
                <div className="All">
                    <Title titleName="Quotes" />
                    <div>
                    <h1 style={{color: "white"}}>
                        press the button to get a nice quote
                    </h1>
                    </div>

                    <div>
                    <button id="SortButton" type="button" onClick={this.getQuote}>
                        Get quote
                    </button> 
                    <h1 style={{color: "yellow"}} ref="QuoteText"> "" </h1>
                    </div>
                </div>
            </div>

        );
    }
}



export default Quote;

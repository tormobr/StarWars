import React, {Component} from "react";
import Loading from "./Loading";
import Title from "./Title";
import Navbar from "./Navbar";
import "./Planets.css";
import RedditPost from "./RedditPost.js";

class Reddit extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            items: [],
            loaded: false,
        }
    }


    componentDidMount(){
        fetch("https://www.reddit.com/r/PrequelMemes.json")
            .then(response => response.json())
            .then((json)=>{
                
                this.setState({
                    loaded: true,
                    items: json.data.children,
                });
        });
    }

    render(){
        var {loaded, items} = this.state;
        if(!loaded){
            return (
                <div>
                    <Loading />
                </div>
            );
        }
        return(
            <div className="All">
                <Navbar />
                <Title titleName="Reddit feed" />

                <div className="PlanetList">
                    {items.map(item => (
                        <RedditPost items={item} />
                    ))}
                </div>

            </div>
        );
    }
}


export default Reddit;

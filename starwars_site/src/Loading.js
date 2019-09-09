import React, { Component } from 'react';
import ReactLoading from "react-loading";
import Navbar from "./Navbar";
import Title from "./Title";

class Planets extends Component {
    render() {
        return(
            <div className="All"> 
                <Navbar />
                <Title titleName="Loading..."/>
                <span style={{paddingLeft:"45%"}}>
                <ReactLoading 
                    type={"spokes"} 
                    color={"yellow"}
                    height={"100px"}
                    width={"100px"}
                />
                </span>
            </div>
        );

    }
}

export default Planets;

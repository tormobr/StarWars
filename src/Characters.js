import React, { Component } from 'react';
import Card from "./Card.js";
import "./Characters.css";
import Title from "./Title.js";
import Navbar from "./Navbar.js";
import Loading from "./Loading.js";



class Characters extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            OGItems: [],
            loaded: false,
            done: false,
            cards: [],
            next: "https://swapi.co/api/people/",
        }
        this.search = this.search.bind(this);
        this.sort = this.sort.bind(this);
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

	search(SW){
        console.log(SW);
		// gets the table and items from table
        this.setState(()=>{
            const newItems = this.state.OGItems.filter(item => item.name.toLowerCase().indexOf(SW.toLowerCase()) == 0);
            return {items: newItems}
        });
	}
    
    sort(sortingParam){
        const index = parseInt(sortingParam);
        var itemstmp = this.state.items;
        for(var i = 0; i < itemstmp.length; i++){
            for(var j = 0; j < itemstmp.length-1; j++){
				var vals =[
					[parseInt(itemstmp[j].height), parseInt(itemstmp[j+1].height)],
					[parseInt(itemstmp[j].films.length), parseInt(itemstmp[j+1].films.length)],
					[parseInt(itemstmp[j].mass), parseInt(itemstmp[j+1].mass)],
					[itemstmp[j].name, itemstmp[j+1].name]
                ];
                if(Number.isNaN(vals[index][0]) && index != 3){
                    vals[index][0] = 0;
                }
                if(Number.isNaN(vals[index][1]) && index != 3){
                    vals[index][1] = 0;
                }

                if(vals[index][1] > vals[index][0]){
                    var tmp = itemstmp[j];
                    itemstmp[j] = itemstmp[j+1];
                    itemstmp[j+1] = tmp;
                }
            }
        }
        this.setState({
            items: itemstmp,
        });
    }

    render() {
        var {loaded, items, cards} = this.state;

        if(! loaded){
            return( 
                <div className="All"> 
                    <Loading />
                </div>);
        }
        else{
            return (
                <div>
                    <Navbar />
                    <div className="All">
                        <Title titleName="Characters" />
                        <div>
                            <h2 style={{color: "white"}}> Search </h2>
                            <input id="SearchBar"  onChange={(e)=>{return this.search(e.target.value)}}/>
                        </div>
                        <div>
                            <select id="SelectSort" name="cars" ref="SelectSort">
                                <option value="0">Height</option>
                                <option value="1">Movies</option>
                                <option value="2">Mass SLK</option>
                                <option value="3">Name</option>
                            </select>
                        </div>
                        <div>
                            <button type="button" id="SortButton" onClick={(e)=>{return this.sort(this.refs.SelectSort.value)}}>Sort</button> 
                        </div>

                        <div className="Characters">
                            {items.map(item  => (
                                <Card item={item} key={item.name }/>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Characters;

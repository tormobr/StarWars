
import React from 'react';  
import "./CharPopup.css";
class MoviePop extends React.Component {  

    constructor(props){
        super(props);
        this.state = {
            image: props.image,
            name: props.item.name,
            items: props.item,
        }
    }
    


    render() {  
        var {name, image, items} = this.state;
        return (  
            <div className='popup'>  
                <h1>{name}</h1>  
                <div className='hax'>  
                    <img src={image} alt="Avatar" style={{width:"20%"}}/>
                    <ul>
                        <li> Title: {items.Title} </li>
                        <li> Year: {items.Year} </li>
                        <li> Rated: {items.Rated} </li>
                        <li> Genre: {items.Genre} </li>
                        <li> Ratings: <br/>
                            <ul>
                                {items.Ratings.map(rating  => (
                                    <li> Source: {rating.Source}, Value: {rating.Value} </li>
                                ))} 
                            </ul>
                        </li>
                        <li> Runtime: {items.Runtime} </li>
                        <li> Director: {items.Director} </li>
                        <li> Writer: {items.Writer} </li>
                        <li> Language: {items.Language} </li>
                        <li> Country: {items.Country} </li>
                        <li> Awards: {items.Awards} </li>
                        <li> Actors: {items.Actors} </li>
                        <li> <button type="button" onClick={()=> {alert(items.Plot)}}> Plot </button> </li>
                       
                         
                    </ul>
                </div>  
            </div>  
        );  
    }  
}  

export default MoviePop;

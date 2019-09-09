import React from 'react';  
import "./CharPopup.css";
class Popup extends React.Component {  

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
                    <table>
                        <tr>
                            <td> Name: </td>
                            <td> {items.name} </td>
                        </tr>
                        <tr>
                            <td> Height: </td>
                            <td> {items.height} </td>
                        </tr>
                        <tr>
                            <td> Mass: </td>
                            <td> {items.mass} </td>
                        </tr>
                        <tr>
                            <td> Hair: </td>
                            <td> {items.hair_color} </td>
                        </tr>
                        <tr>
                            <td> Skin: </td>
                            <td> {items.skin_color} </td>
                        </tr>
                        <tr>
                            <td> Eyes: </td>
                            <td> {items.eye_color} </td>
                        </tr>
                        <tr>
                            <td> Gender: </td>
                            <td> {items.gender} </td>
                        </tr>
                        <tr>
                            <td> Birth Year: </td>
                            <td> {items.birth_year} </td>
                        </tr>
                        <tr>
                            <td> Num Movies: </td>
                            <td> {items.films.length} </td>
                        </tr>
                        <tr>
                            <td> <a href="/movies" style={{color:"yellow"}}> Movies </a> </td>
                            </tr>
                    </table>
                </div>  
            </div>  
        );  
    }  
}  

export default Popup;

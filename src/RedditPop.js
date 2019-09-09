
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
                    <img src={image} alt="Image missing" style={{width:"40%"}}/>
                </div>  
            </div>  
        );  
    }  
}  

export default Popup;

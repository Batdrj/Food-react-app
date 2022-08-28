import React from 'react';
import "./style.css"


function Food(props) {
    return ( 
        <div className='main-food-container'>
            <div className='food-container'>  
                <div className="food" onClick={() => props.AddFood(props.id, props.price)}>
                    <div className="food-text">
                        <h4 className='name'>{props.ner}</h4> 
                        <p className='weight'>{props.weight}</p> 
                        <h4 className='price'>{props.price}</h4>
                    </div>
                    <img className='img' src={props.img} alt="Images"  />
                </div>                   
            </div>
        </div>
     );
}

export default Food;
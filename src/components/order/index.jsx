import React from 'react';

function Order(props) {
    
    
    return ( 
        <div className='order-container'>
            <img className='order-img' src="{props.img}" alt="" />
            <p className='order-name'>{props.ner}</p>
            <button onClick={()=> props.FoodHasah(props.id, props.price)}>-</button>
            <p>{props.unit}</p>
            <button onClick={()=> props.FoodNemeh(props.id, props.price)}>+</button>
            <p>${props.price}</p>
        </div>
        
     );

     }


export default Order;
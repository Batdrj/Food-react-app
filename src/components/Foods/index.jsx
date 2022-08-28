import React from 'react';
import Food from '../food';
import "./style.css"

function Foods(props) {
    const test = []
    props.foods.map((el, i) => {
        test.push( <Food key={i} id={el.id} ner={el.foodName} weight={el.weight} price={el.price}  img={el.ImgUrl} AddFood={props.AddFood}/> )
    })
    return ( 
        <div className='foods'>{test}</div>
     );
}

export default Foods;
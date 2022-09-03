import React from 'react';
import './style.css'
import Order from '../order';
import Test from '../test';

function Orders(props) {
    let test = []
    props.foods.map((el, i) => {
        if(props.unit[el.id] > 0){
            test.push(<Order key={i} ner={el.foodName} img={el.ImgUrl} unit={props.unit[el.id]} price={el.price} FoodNemeh={props.FoodNemeh} id={el.id} FoodHasah={props.FoodHasah}  />)
        }


    })
    return ( 

        <div className='main-orders'>
            
            <div className='orders-container'>
                <div >
                    <div className='orders'>{test}</div>
                </div>

                <div>
                    <p className='total-price'>${props.TotalPrice}</p>
                </div>
                <button onClick={props.showModal}>Zahialah</button>
            </div>

        </div>

        

     );   
     

}

export default Orders;
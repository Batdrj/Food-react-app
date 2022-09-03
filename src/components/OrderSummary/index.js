import React from 'react';

function OrderSummary(props) {
    return (<div>{
        props.foods.map((el, i) => {
            return <div key={i}>{el.foodName}</div>
        })
        }</div>);
}

export default OrderSummary;
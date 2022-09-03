import React from 'react';
import style from './style.module.css'
function Test(props) {
    const a = [];
    props.foods.map((el, i)=>{
        a.push(<div>
            <p>{el.foodName}</p>

        </div>)
    })
    return (
        <div>
            <div className={style.test}>{a}</div> 
            <button>vbcnfdcgbcbn</button>
        </div>
    );
}

export default Test;
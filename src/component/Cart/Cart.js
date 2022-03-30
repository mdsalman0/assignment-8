import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const {crat} = props;
    const [random, setRandom] = useState([])

    let name ='';
    for(const product of crat){
        name = name + ' ' +product.name;
    }

    const randomNum = ()=>{
        const newNum = Math.floor(Math.random()* crat.length)
        alert(crat[newNum].name);
        
    }
     
    const removeCartName = (crat)=>{
       console.log(crat);
      
    }

    return (
        <div className='cart'>
            <h3>Selected Mobile</h3>
            <div className='style'>
            <h5 className='name-style'>{name}</h5>
            {/* <p> {random}</p> */}
            </div>
            <button onClick={randomNum} className='choose'>CHOOSE 1 FOr ME</button>
            <button onClick={()=>removeCartName(crat)} className='choose'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;
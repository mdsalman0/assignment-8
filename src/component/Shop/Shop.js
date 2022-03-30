import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [mobiles,setMobiles] = useState([]);
    const [crat,setCart] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setMobiles(data))
    },[])
    
    const handlarAddCart=(mobile)=>{
        const newCart = [...crat, mobile];
        setCart(newCart)
    }

    return (
        <div className='mobile-container'>
            <div className='product-container'>
            {
                mobiles.map(mobile=> <Product 
                    mobile={mobile}
                    handlarAddCart={handlarAddCart}
                    key={mobile.id}
                    ></Product>)
            }
            </div>
             <div className='cart-container'>
                <Cart crat={crat}></Cart>
            </div>
        </div>
    );
};

export default Shop;
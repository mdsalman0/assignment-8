import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [mobiles,setMobiles] = useState([]);
    
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setMobiles(data))
    },[])

    return (
        <div className='mobile-container'>
            <div className='product-container'>
            {
                mobiles.map(mobile=> <Product 
                    mobile={mobile}
                    key={mobile.id}
                    ></Product>)
            }
            </div>
             <div className='cart-container'>
                <h4>this is name</h4>
            </div>
        </div>
    );
};

export default Shop;
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [mobiles,setMobiles] = useState([]);
    
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setMobiles(data))
    },[])

    return (
        <div>
            {
                mobiles.map(mobile=> <Product 
                    mobile={mobile}
                    key={mobile.id}
                    ></Product>)
            }
        </div>
    );
};

export default Shop;
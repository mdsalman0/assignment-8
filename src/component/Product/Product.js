import React from 'react';

const Product = (props) => {
    const {name,img} = props.mobile;
    return (
        <div>
            <img src={img} alt="" />
            <h2>name: {name}</h2>
        </div>
    );
};

export default Product;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {name,img,price} = props.mobile;

    return (
        <div className='product'>
            <div className=''>
            <img src={img} alt="" />
            <div className='name-price'>
            <h5 className='text'>Name: {name}</h5>
             <h5 className='text2'>Price: {price}</h5>
            </div>
            </div>
            <button onClick={()=>props.handlarAddCart(props.mobile)} className='add-cart mt-4 py-2'>Add To Cart <FontAwesomeIcon icon={faCartPlus} color='orange'></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;
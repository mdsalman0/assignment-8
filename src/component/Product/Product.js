import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {name,img} = props.mobile;

    return (
        <div className='product'>
            <div className=''>
            <img src={img} alt="" />
            <h5 className='text'>name: {name}</h5>
            </div>
            <button onClick={()=>props.handlarAddCart(props.mobile)} className='add-cart mt-4 py-2'>Add To Cart <FontAwesomeIcon icon={faCartPlus} color='orange'></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
    const {crat} = props;
    let name ='';
    for(const product of crat){
        name = name + ' ' +product.name;
    }

    return (
        <div className='cart'>
            <h3>Selected Mobile</h3>
            <div className='style'>
            <h5 className='name-style'>{name}</h5>
            </div>
            <button className='choose'>CHOOSE 1 FOr ME</button>
            <button className='choose'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;
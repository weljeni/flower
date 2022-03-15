import React from 'react';
import './ProductCart.css'

const ProductCart = (props) => {
    let {flower} = props;
    return (
        <div className='flower-card'>
            <img src={flower.image} />
            <h4 className='selary'>{flower.selary}</h4>
            <h4 className='selary'>{flower.name}</h4>
            
        </div>
    );
};

export default ProductCart;
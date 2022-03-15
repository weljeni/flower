import React from 'react';
import ProductCart from '../SectionCart/ProductCart';

const ProducsList = (props) => {
    let{flower} = props;
    console.log(flower)
    return (
        <div className='flower-list'>
            {flower.map((item)=>
            <ProductCart key={item.id}flower={item}/>
        
            )}

          
            
        </div>
    );
};

export default ProducsList;
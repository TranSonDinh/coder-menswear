import React from 'react';

import './styles.css';

export default function ProductItem(props){
    return(
        <div className='wrap-product-item'>{props.item}</div>
    );
}
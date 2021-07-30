import React from 'react';

import './styles.css';

import ProductItem from '../../frontend/Product-item';

export default function ShowProducts(){
    const test = [1,2,3,4,5,6];
    return(
        <div className='wrap-show-product'>
            <div className='text-cont'>
                <h4>Danh mục sản phẩm</h4>
                <div></div>
            </div>
            
            <div className='show-products'>
                {
                    test.map((item,index) => {
                        return(
                            <ProductItem item={item} key={index}></ProductItem>
                        );
                    })
                }
            </div>
           
        </div>
    );
}
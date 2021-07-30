import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../../redux/actions';


import './styles.css';

import ProductBestSeller from '../Product_Best_Seller';
import { productState$ } from '../../../redux/selectors';
import { useState } from 'react';

export default function BestSeller(props){
    const dispatch = useDispatch();
    const productSell = useSelector(productState$);

    React.useEffect(() => {
        dispatch(actions.getProducts.getProductsRequest());
    },[dispatch]);
    
    return(
        <div className='best-sell-wrap'>
            <div className='best-sell-title'><p>SẢN PHẨM NỔI BẬT</p></div>
            <div className='list-best-sell'>
                {
                    productSell.map((item,index) => {
                        return(
                            item.sell.status ? <ProductBestSeller item={item} key={index} cart={props.cart} setCart={props.setCart}/> : ''
                        );
                    })
                }
            </div>
        </div>
    );
}
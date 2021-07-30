import React from 'react';
import {Link} from 'react-router-dom';
import AddToCart from '../../AddToCart';

import './styles.css';

export default function ProductNewItem(props){
    const src = require(`../../../../Assets/uploads/${props.item.image}`);

    function add(pro){
        const t = [{item:pro, count : 1}];
        if(props.cart.length!==0){
            let th = props.cart.slice();
            let check = null;
            th.map((item,index)=>{
                if(pro===item.item) check = index;
            });
            if(check === null) {th = th.concat(t);}
            else th[check].count++;
            props.setCart(th);
        }else {
            let th = props.cart.concat(t);
            props.setCart(th);
        }
    }

    return(
        <Link to='/'>
            <div className='product-new-item'>
                <div className='product-new-image'>
                    <img src={src.default} alt={props.item.title}/>
                </div>
                <div className='product-new-content'>
                    <div><p>{props.item.title}</p></div>
                    <div><p>{`$${props.item.price}`}</p></div>
                </div>
            </div>
            <AddToCart add={add} item={props.item}/>
        </Link>
    );
}
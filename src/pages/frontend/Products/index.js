import React from 'react';

import './styles.css';

import Header from '../../../components/frontend/Header';
import ButtonSearch from '../../../components/frontend/ButtonSearch';
import ShowProducts from '../../../components/frontend/ShowProducts';

export default function Products(){
    const cartFromLocalStorega = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart,setCart] = React.useState(cartFromLocalStorega);console.log('cartSell',cart);
    const set = (item) => {
        setCart(item);
    }
    
    React.useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cart));
    },[cart]);

    return(
        <div>
            <Header total={cart}/>
            <div className='body-products'>
                <ButtonSearch></ButtonSearch>
                <div className='content-product'>
                    <div className='product-left'>lọc</div>
                    <ShowProducts></ShowProducts>
                </div>
            </div>
        </div>
    );
}
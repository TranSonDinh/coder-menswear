import React, {useState} from 'react';
import classNames from 'classnames';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

import { useSelector} from 'react-redux';
import {productState$} from '../../../redux/selectors'

import './styles.css';

import ProductNewItem from './Product_New_Item';

export default function ProductsNew(props){
    const products = useSelector(productState$);

    const lengProduct = products.length;
    const [current,setCurrent] = useState(4);
    
    function next(){
        if(current >= 12 || current >= lengProduct)
            setCurrent(4);
        else setCurrent(current+4);
    }
    function prev(){
        if(current <= 4){
            if((lengProduct%4) !== 0)
                setCurrent(parseInt(lengProduct/4)*4 + 4);
            if((lengProduct%4) === 0)
                setCurrent(parseInt(lengProduct/4)*4);
        }  
        else setCurrent(current-4);
    }

    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        if (runRef.current) {
            clearTimeout(runRef.current);
        }
    }
    React.useEffect(() => {
        resetTimeout();
        let leng = null;
        if((lengProduct%4) !== 0)
            leng = parseInt(lengProduct/4)*4 + 4;
        if((lengProduct%4) === 0)
            leng = parseInt(lengProduct/4)*4;
        timeoutRef.current = setTimeout(
            () =>
            setCurrent((prevIndex) =>
              prevIndex >= leng ? 4 : prevIndex + 4
        ),6000);
            
        return () => {
          resetTimeout();
        };
    }, [current,lengProduct]);
    const runRef = React.useRef(null);
    
    const running = () => {
        runRef.current = setTimeout(next,4000);
    }
    

    return(
        <div className='products-new-wrap'>
            <div className="title-new-product"><h4>SẢN PHẨM MỚI</h4></div>
            <div className='list-products-new' onMouseMove={resetTimeout} onMouseLeave={running}>
                {
                    products.map((item,index) => {
                        return (
                            <div 
                                key={index} 
                                className={classNames('product-new-item-wrap',{'hide' : (index < current && index >= current-4) ? false : true})}
                                
                                >
                                <ProductNewItem item={item} cart={props.cart} setCart={props.setCart}/>
                            </div>
                        );
                    })
                }
            </div>
            <IoIosArrowForward className='arrow arrow-right' onClick={next}/>
            <IoIosArrowBack className='arrow arrow-left' onClick={prev}/>
            <div className='carousel-indicators'>
            </div>
        </div>
    );
}
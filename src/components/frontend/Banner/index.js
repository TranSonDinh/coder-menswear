import React, {useState} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import './styles.css';

import banner1 from '../../../Assets/img/banner-1.webp';
import banner2 from '../../../Assets/img/banner-2.webp';
import banner3 from '../../../Assets/img/banner-3.webp';

export default function Banner(){
    const items = [banner1,banner2,banner3];
    const [current,setCurrent] = useState(0);
    const timeoutRef = React.useRef(null);
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }
    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => 
            setCurrent((prevIndex) =>
              prevIndex === items.length - 1 ? 0 : prevIndex + 1
            ),3000);
    
        return () => {
          resetTimeout();
        };
      }, [current,items.length]);
    return(
        <div className='banner-wrap'>
            {
                items.map((item,index) => {
                    return(
                        <div key={index} className={classNames('banner-img',{"hide" : (index === current) ? false : true})}>
                            <img src={item} alt={`banner ${index}`}/>
                        </div>
                    );
                })
            }           
            <div className='banner-content'>
                <div className="text-content"><h4>New Outerwear Collection</h4></div>
                <div className="shop-now"><Link to="/products">Shop Now</Link></div>
            </div>
        </div>
    );
}
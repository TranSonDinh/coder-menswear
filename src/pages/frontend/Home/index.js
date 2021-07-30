import React, {useState} from 'react';

import './styles.css';

import Header from '../../../components/frontend/Header';
import Banner from '../../../components/frontend/Banner';
import BlogStory from '../../../components/frontend/Blog_Story';
import BestSeller from '../../../components/frontend/BestSeller';
import ProductsNew from '../../../components/frontend/Products_New';

import Story from '../../../Assets/img/story.webp';
import Blog from '../../../Assets/img/blog.webp';


const story_blog = [
    {src : Story, text : "Our Story",url: "contact"},
    {src : Blog, text : "Our Blog", url: "blog"}
]
export default function HomePage(){
    const cartFromLocalStorega = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart,setCart] = useState(cartFromLocalStorega);console.log('cartSell',cart);
    const set = (item) => {
        setCart(item);
    }
    
    React.useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cart));
    },[cart]);
    return(
        <div>
            <Header total={cart}/>
            <Banner />
            <BlogStory sb={story_blog}/>
            <BestSeller cart={cart} setCart={set}/>
            <ProductsNew cart={cart} setCart={set}/>
        </div>
    );
}
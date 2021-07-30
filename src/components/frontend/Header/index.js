import React from 'react';
import { Link } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import classnames from 'classnames';

import './styles.css';
import logo from '../../../Assets/img/codermenswear.png';

export default function Header(props){
    let total = 0;
    props.total.map((item) => {
        total += item.count;
    })
    return(
        <div className="header flex-row">
            <div className="logo-wrap">
                <Link to='/'>
                    <img src={logo} alt='logo'/>
                </Link>
            </div>
            <div className='menu-login flex-row'>
                <div className="menu-wrap">
                    <ul className="flex-row">
                        <li><Link to="/">Trang chủ</Link></li>
                        <li><Link to="/products">Sản phẩm</Link></li>
                        <li><Link to="/contact">Về chúng tôi</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/">Khuyến mãi</Link></li>
                    </ul>
                </div>
                <div className="login-and-cart flex-row">
                    <div className=" name-login hover-a">
                        <Link to="/">Đăng nhập</Link>
                    </div>
                    <div className='icon-cart hover-a'>
                        <Link to="/"><FaShoppingCart/></Link>
                        <div className={classnames('total-cart-header',(total!==0) ? "" : "hide")}>{total}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
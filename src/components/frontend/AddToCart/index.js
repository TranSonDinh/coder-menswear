import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FaInfo, FaCartPlus} from 'react-icons/fa';
import swal from 'sweetalert';

import './styles.css';

export default function AddToCart(props){
    const click = () => {
        props.add(props.item._id);
        swal("Thành công!", "Thêm sản phẩm thành công!", "success");
    }
    return(
        <div className='iconAddToCart'>
            <Link to='/' onClick={click}><FaCartPlus /></Link>
            <Link to='/'><FaInfo /></Link>
        </div>
    );
}
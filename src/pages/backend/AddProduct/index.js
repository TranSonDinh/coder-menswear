import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {createProduct} from '../../../redux/actions';


export default function AddProduct(){
    const [data, setData] = useState({
        title : "",
        category : "",
        price : 0,
        priceSell: 0,
        detail : "",
        image : "",
    });
    const dispatch = useDispatch();

    const onSubmit = React.useCallback((e) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("category", data.category);
        formData.append("price", data.price);
        formData.append("priceSell", data.priceSell);
        formData.append("detail", data.detail);
        formData.append("admin-add-productNew", data.image);
        formData.append("image", data.image.name);

        dispatch(createProduct.createProductRequest(formData) );
        
    },[dispatch, data]);
    

    return(
        <form method='POST' enctype="multipart/form-data">
            <div className='add'>
            <div>
                <b>Tên sản phẩm</b>
                <input type="text" value={data.title} onChange={(e) => setData({...data, title : e.target.value})}/>
            </div>
            <div>
                <b>Danh sách sản phẩm</b>
                <input type="text" value={data.category} onChange={(e) => setData({...data, category : e.target.value})}/>
            </div>
            <div>
                <b>Giá</b>
                <input type='number' min='0' value={data.price} onChange={(e) => setData({...data, price : e.target.value})}/>
            </div>
            <div>
                <b>Giảm giá</b>
                <input type='number' min='0' max='100' value={data.priceSell} onChange={(e) => setData({...data, priceSell : e.target.value})}/>
            </div>
            <div>
                <b>Mô tả</b>
                <textarea rows="4" cols="50" onChange={(e) => setData({...data, detail : e.target.value})}>{data.detail}</textarea>
            </div>
            <div>
                <b>Ảnh</b>
                <input type='file' onChange={(e) => setData({...data, image : e.target.files[0]})} name='admin-add-productNew'/>
            </div>
            <div>
                <input type='button' value='SUBMIT' onClick={onSubmit}/>
            </div>
            </div>
        </form>
    );
}
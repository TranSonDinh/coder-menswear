import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

import './styles.css';

export default function ButtonSearch(){
    return(
        <div className='wrap-search'>
            <div></div>
            <div className='search'>
                <div className='input-search'><input type='text' placeholder='Type to search...'/></div>
                <div className='icon-search'><SearchOutlined /></div>
            </div>
        </div>
    );
}
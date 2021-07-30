import React from 'react';

import {Link} from 'react-router-dom';

import './styles.css';

export default function Blog_Story(props){
    return(
        <div className="container-story-blog">
            {
                props.sb.map((item,index) => {
                    return(
                            <div className="content-story-blog-wrap" key={index}>
                                <div className="image-story-blog"><img src={item.src} alt=''/></div>
                                <div className="text-story-blog"><Link to={item.url}><h4>{item.text}</h4></Link></div>
                            </div>
                        
                    );
                })
            }
            
        </div>
    );
}
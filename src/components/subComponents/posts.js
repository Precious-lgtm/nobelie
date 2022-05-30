import React from 'react';
import { Link } from 'react-router-dom';
import { BsBookmarks } from 'react-icons/bs';
import './subStyles/posts.css';
import image from '../../assets/stock1.jpg';

function posts (props) {
    return(
        <Link to = '/' className = 'postContent'>
            <div className = 'postMeta'>
                <div className = 'ownerData'>
                    <img src = {image} width = {20} height = {20} alt = 'name' />
                    <label> Olabisi Sarah in Fashion and Style </label>
                </div>
                <div className = 'postDetails'>
                    <h3 className = 'postTitle'> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce et turpis arcu. Vestibulum ac dui at libero tempus 
                        auctor ac vitae velit.  
                    </h3>
                    <p className = 'postExtra'>
                        <label> May 29, 2022 </label>
                        <label> 4:30 pm </label>
                        <Link to = '/'><BsBookmarks color = 'white' fill = 'black' size = {16} /></Link>
                    </p>
                </div>
            </div>
            <div className = 'postHeader'>
                <img src = {image} alt = 'Thumbnail' className = 'post-thumbnail' />
            </div>
        </Link>
    )
}

export default posts;
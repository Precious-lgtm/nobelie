import React from 'react';
//import { Link } from 'react-router-dom';
import './subStyles/topics.css';
//import image from '../../assets/heroImage.jpg';

function topics (props) {
    return(
        <div className = 'topics'>
            <h4 className = 'topic-1'> Marriage and Divorce </h4>
            {/**<h6 className = 'topicBrief'> 
                    Faith, according to Apostle Paul of 
                    the Bible, is defined as the substance of things hoped 
                    for, the...
            </h6>
            <div className = 'articleMeta'>
                <Link to = '/' className = 'authorName'>
                    <img src = {image} alt = 'author' className = 'authorImage' />
                    <label> Olayinka Gbada </label>
                </Link>
                <h6 className = 'time'>556 Reads</h6>
            </div>**/}
        </div>
    )
}

export default topics;
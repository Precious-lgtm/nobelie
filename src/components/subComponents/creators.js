import React from 'react';
import { Link } from 'react-router-dom';
import './subStyles/creators.css';
import avatar from './../../assets/avatar.jpg';

function Creators(props) {
    return(
        <div className = 'creatorCard'>
            <div className = 'creatorAvatar'>
                <img src = {avatar} width = {40} height = {45} alt = 'avatar' />
            </div>
            <div className = 'creatorBio'>
                <h3 className = 'creatorName'>Joel Leon</h3>
                <h4 className = 'creatorDetails'>He/Him. @ted-talks giver. @EBONY-mag. @medium</h4>
            </div> 
            <div className = 'creatorLink'>
                <Link to = '/' className = 'followLink'> Follow </Link>
            </div>
        </div>
    )
}

export default Creators;
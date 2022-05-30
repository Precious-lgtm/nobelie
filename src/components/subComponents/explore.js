import React from 'react';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { FaUserGraduate } from 'react-icons/fa';
import marriage from '../../assets/marrdiv.jpg';
import './subStyles/explore.css';

function Explore(props) {
    return(
        <div className = 'explore'>
            <div className = 'exploreDetails'>
                <p className = 'exploreTopic'>
                    Marriage and Divorce   
                </p>
                <div className = 'exploreAudience'>
                    <label><BsFillJournalBookmarkFill /> 5000 articles </label>
                    <label><FaUserGraduate /> 1550 Creators </label>
                </div>
            </div>
            <div className = 'thumbnail'>
                <img src = {marriage} alt = 'thumbnail' className = 'expThumbnail' />
            </div>
        </div>
    )
}

export default Explore;
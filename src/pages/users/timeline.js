import React from 'react';
//import { Link } from 'react-router-dom';
import '../styles/timeline.css';
import Navbar from '../../components/subComponents/users/navbar';
import Body from '../../components/body';

function Timeline(props) {
    return(
        <div className = 'timeline'>
            <Navbar />
            <div className = 'timeline-body'>
                <Body />
            </div>
        </div>
    )
}

export default Timeline;
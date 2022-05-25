import React from 'react';
import BodyList from './subComponents/bodyList';
import Sidebar from './subComponents/sidebar';
import Topics from './subComponents/topics';
import './styles/body.css';


function Body(props) {
    return (
        <div className = 'bodyClass'>
            <div className = 'hero2'>
                <h1 className = 'hero2-header'> Explore Topics </h1>
                <div className = 'explorer'>
                    <Topics />
                    <Topics />
                    <Topics />
                    <Topics />
                    <Topics />
                    <Topics />
                    <Topics />
                </div>
            </div>
            <div className = 'bodyContent'>
                <BodyList />
                <Sidebar />
            </div>
        </div>
    )
}

export default Body;
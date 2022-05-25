import React from 'react';
import './subStyles/bodyList.css';
import Posts from './posts';

function bodyList (props) {
    return(
        <div className = 'bodyIntro'>
           {/**<h3 className = 'bodyHeader'> Posts </h3>-->*/}
            <div className = 'postList'>
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
            </div>
        </div>
    )
}

export default bodyList;
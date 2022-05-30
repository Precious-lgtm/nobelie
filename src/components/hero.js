import React from 'react';
import { Link } from 'react-router-dom';
import './styles/hero.css';
//import collage from '../assets/collage.png';

function Hero (props) {
    return (
        <div className = 'hero-intro'>
            <div className = 'intro-message'>
                <p className = 'message-1'>
                    Nobelie is a Christian Writing 
                    Platform for creators, writers, 
                    bloggers and authors.
                </p>
                <p className = 'message-2'>
                    Nobelie is an all-in-one Christian 
                    platform where you can share your stories,
                    build an audience and earn money.
                </p>
                <Link to = '/auth/signup' className = 'invite'> Get Started </Link>
                <p className = 'message-3'> If you are just here to read articles, <Link className = 'link' to = '/'> Click Here </Link></p>
            </div>
            {/*<div className = 'intro-image'>
               {/**<img src = {collage} alt = 'hero' width = {440} height = {330} />}
            </div> */}
        </div>
    )
}

export default Hero;
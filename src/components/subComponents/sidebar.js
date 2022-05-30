import React from 'react';
//import Topics from './topics';
import Footer from './footer';
import Creators from './creators';
import Menu from './users/menu';
import Explore from './explore';
import { FiSearch } from 'react-icons/fi';
import './subStyles/sidebar.css';
import { Link } from 'react-router-dom';

function sidebar (props) {
    return(
        <div className = 'trendIntro'>
            <Menu className = "menu"/>
            <form className = 'search'>
                <input type = 'text' placeholder = 'Search Nobelie' />
                <button type = 'submit'><FiSearch size = {18} color = 'darkgrey' /></button>
            </form>
            <div className = 'trendList trending'>
                <h3> Trending Topics </h3>
                <Explore />
                <Explore />
                <Explore />
                <Explore />
                <Explore />
                <Explore />
                <div className='mobile'>
                    <Explore />
                    <Explore />
                </div>
             </div>
            <div className = 'trendList creators'>
                <h3>Discover Creators</h3>
                <Creators />
                <Creators />
                <Creators />
                <Creators />
                <Creators />
                <Creators />
                <div className='mobile'>
                    <Creators />
                    <Creators />
                </div>
                <Link className = 'seeMore' to = '/'> See More </Link>
            </div>
            <Footer className = "sidefooter" />
        </div>
    )
}

export default sidebar;
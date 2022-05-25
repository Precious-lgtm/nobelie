import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../subStyles/users/menu.css';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

import Avatar from '../../../assets/avatar.jpg';


function Menu (props) {
    const [clicked, setClicked] = useState(false);

    function handleClicked() {
        setClicked(!clicked);
    }

    return(
        <div className = 'menu'>
            <div className = 'menu-profile' onClick = {handleClicked}>
                <img src = {Avatar} alt = 'profile-tag' className = 'profileTag' />
                <div className = 'profile-name-div'>
                    <h3 className = 'profile-name'>
                        Olabisi Sarah
                    </h3>
                    <h5 className = 'profile-username'>
                        @olabisiSarah
                    </h5>
                </div>
                <div className = 'profile-linkup'><HiOutlineDotsHorizontal /></div>
            </div>
            {clicked ? 
            <div className = 'menu-dashboard'>
                <Link to = '/' className = 'menu-dashboard-link'> View Profile </Link>
                <Link to = '/users/timeline' className = 'menu-dashboard-link'> Timeline </Link>
                <Link to = '/users/dashboard' className = 'menu-dashboard-link'> My Dashboard </Link>
                <Link to = '/users/dashboard/newarticle' className = 'menu-dashboard-link'> New Article </Link>
                <Link to = '/users/statistics' className = 'menu-dashboard-link'> Statistics </Link>
                <Link to = '/' className = 'menu-dashboard-link'> Messages </Link>
                <Link to = '/auth/signup' className = 'menu-dashboard-link'> Logout </Link>
            </div> : '' }
        </div>
    )
}

export default Menu;
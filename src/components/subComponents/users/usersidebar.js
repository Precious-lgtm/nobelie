import React from "react";
import { Link } from "react-router-dom";
import { RiAccountBoxLine, RiBarChart2Line, RiDashboardFill, RiErrorWarningFill, RiLogoutBoxFill, RiProfileLine, RiRegisteredFill, RiSubscript, RiWallet2Fill } from 'react-icons/ri';
import '../subStyles/users/usersidebar.css';

function Usersidebar(props) {
    return(
        <div className = 'userbar'>
            <Link to = '/users/dashboard' className = 'dashboard-menu-item'>
                 <RiDashboardFill size = {25} />
                 Dashboard
            </Link>
            <Link to = 'users/profile' className = 'dashboard-menu-item'> 
                <RiBarChart2Line size = {25} />
                My Stats 
            </Link>
            <Link to = 'users/subscriptions' className = 'dashboard-menu-item'>
                <RiProfileLine size = {25} />
                My Timeline
            </Link>
            <Link to = '/users/wallet' className = 'dashboard-menu-item'> 
                <RiWallet2Fill size = {25} />
                My Wallet 
            </Link>
            <Link to = '/users/report' className = 'dashboard-menu-item'>
                <RiErrorWarningFill size = {25} /> 
                Complaints 
            </Link>
            <Link to = '/users/logout' className = 'dashboard-menu-item'>
                <RiLogoutBoxFill size = {25} /> 
                Logout 
            </Link>
        </div>
    )
}

export default Usersidebar;
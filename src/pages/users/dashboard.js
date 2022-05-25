import React from 'react';
import '../styles/dashboard.css';
import Navbar from '../../components/subComponents/users/navbar';
import Usersidebar from '../../components/subComponents/users/usersidebar';
import Explore from '../../components/subComponents/explore';
import Creators from '../../components/subComponents/creators';
import DashboardContent from '../../components/subComponents/users/dashboardcontent';
import { Link } from 'react-router-dom';
import Footer from '../../components/subComponents/footer';

function Dashboard(props) {
    return(
        <div className = 'dashboard'>
            <Navbar />
            <div className = 'contents'>
                <Usersidebar />
                <DashboardContent />
                <div className='sidebar'>
                    <div className='trendList-2'>
                        <h3> Trending Topics </h3>
                        <Explore />
                        <Explore />
                        <Explore />
                        <Explore />
                        <Explore />
                        <Explore />
                    </div>
                    <div className='trendList-2'>
                        <h3>Discover Creators</h3>
                        <Creators />
                        <Creators />
                        <Creators />
                        <Creators />
                        <Creators />
                        <Link className = 'seeMore' to = '/'> See More </Link>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
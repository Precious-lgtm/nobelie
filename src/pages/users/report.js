import React from 'react';
import '../styles/dashboard.css';
import '../styles/extra.css';
import Navbar from '../../components/subComponents/users/navbar';
import Usersidebar from '../../components/subComponents/users/usersidebar';
import Explore from '../../components/subComponents/explore';
import Creators from '../../components/subComponents/creators';
import DashboardContent from '../../components/subComponents/users/dashboardcontent';
import { Link } from 'react-router-dom';
import Footer from '../../components/subComponents/footer';

function Report(props) {
    return(
        <div className = 'dashboard'>
            <Navbar />
            <div className = 'contents'>
                <Usersidebar />
                <div className='dashboardcontent'>
                    <h3 className='stats-title'> Make a Report </h3>
                    <form className='report' encType='multipart/form-data' method = 'POST' action = ''>
                        <div className = 'report-div'>
                            <input type = 'text' value = '@username' contentEditable = 'false' />
                        </div>
                        <div className = 'report-div'>
                            <input type = 'text' value = 'username@email.com' contentEditable = 'false' />
                        </div>
                        <div className = 'report-div'>
                            <textarea cols = '50' rows = '20'></textarea>
                        </div>
                        <div className = 'report-div'>
                            <input type = 'submit' value = 'Submit Report' />
                        </div>
                    </form>
                </div>
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

export default Report;
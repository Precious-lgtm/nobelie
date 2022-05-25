import React from 'react';
import '../subStyles/users/dashboardcontent.css';
import Avatar from '../../../assets/avatar.jpg';
import { Link } from 'react-router-dom';
import Posts from '../posts';
import { RiEdit2Fill, RiGenderlessFill }from 'react-icons/ri';
import { MdCalendarToday, MdDateRange, MdLocationOn, MdTimeline, MdTimer } from 'react-icons/md';


function DashboardContent (props) {
    return (
        <div className = 'dashboardcontent'>
            <div className = 'profileTab'>
                <div className='avatarTab'>
                    <img src = {Avatar} alt = 'Avatar Image' className='avatar' />
                    <Link to = '/' title='Change Profile Picture' className='changeAvatar'><RiEdit2Fill className='editmark'/></Link>
                </div>
                <div className='profileDetailsTab'>
                    <div className='profileName'> 
                        <h4>Olabisi Sarah</h4>
                        <Link to = '/'> Edit Profile </Link>
                    </div>
                    <div className='profileExtras'>
                        <label className='profileDataInput'>@olabisisarah</label>
                        <div className='profileExtras-1'>
                            <label className='profileDataInput'><MdTimer size = {20} /> Joined September 2021 </label>
                            <label className='profileDataInput'><MdDateRange size = {20} /> Born 8 December 2002</label>
                            <label className='profileDataInput'><MdLocationOn size = {20} /> Nigeria </label>
                        </div>
                        <div className='profileExtras-1'>
                            <label className='profileDataInput'><h3>30</h3> Articles </label>
                            <label className='profileDataInput'><h3>155</h3> Followers </label>
                            <label className='profileDataInput'><h3>163</h3> Following </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='postsTab'>
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

export default DashboardContent;
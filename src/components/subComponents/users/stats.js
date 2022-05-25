import React from 'react';
import '../subStyles/users/stats.css';
import {
    MdOutlinePostAdd, 
    MdAreaChart,
    MdQuickreply 
} from 'react-icons/md';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { RiLoginBoxFill } from 'react-icons/ri';
import { FaCommentAlt, FaLocationArrow } from 'react-icons/fa';
import { VscVmActive } from 'react-icons/vsc';
import { GiRead } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { HiDocumentReport } from 'react-icons/hi';

function Stats (props) {
   
    return (
        <div className='dashboardcontent'>
            <h3 className='stats-title'> Your Statistics </h3>
            <div className='basic-data'>
                <div className='data-links' style = {{backgroundColor: 'green', opacity: 0.8, color: 'white'}}>
                    <h4> 
                        <label>13050</label> 
                        <MdAreaChart />
                    </h4>
                    <label> Impressions </label>
                </div>
                <div className = 'data-links' style = {{backgroundColor: 'blue', opacity: 0.8, color: 'white'}}>
                    <h4> 
                        <label> 12 </label>
                        <MdOutlinePostAdd />
                    </h4>
                    <label> Posts </label>
                </div>
                <div className = 'data-links' style = {{backgroundColor: 'red', opacity: 0.8, color: 'white'}}>
                    <h4> 
                        <label>2000</label>  
                        <CgProfile />
                    </h4>
                    <label> Profile Clicks </label>
                </div>
                <div className = 'data-links' style = {{backgroundColor: 'orange', opacity: 0.8, color: 'white'}}>
                    <h4> 
                        <label>8110</label>
                        <GiRead />
                    </h4>
                    <label> Article Expansions </label>
                </div>
                <div className = 'data-links' style = {{backgroundColor: 'indigo', opacity: 0.8, color: 'white'}}>
                    <h4> 
                        <label>140</label>
                        <AiFillLike />
                    </h4>
                    <label> Likes </label>
                </div>
                <div className = 'data-links' style = {{backgroundColor: 'brown', opacity: 0.8, color: 'white'}}>
                    <h4> 
                        <label>80</label>
                        <AiFillDislike />
                    </h4>
                    <label> Dislikes </label>
                </div>
                <div className = 'data-links' style = {{backgroundColor: 'chocolate', opacity: 0.8, color: 'white'}}>
                    <h4>
                        <label>55</label>
                        <FaCommentAlt />
                    </h4>
                    <label> Comments Sent </label>
                </div>
                <div className = 'data-links' style = {{backgroundColor: 'purple', opacity: 0.8, color: 'white'}}>
                    <h4> 
                        <label>65</label>
                        <MdQuickreply />
                    </h4>
                    <label> Comments Received </label>
                </div>
                <div className = 'data-links' style = {{backgroundColor: 'green', opacity: 0.8, color: 'white'}}>
                    <h4> 
                        <label>80</label>
                        <VscVmActive />
                    </h4>
                    <label> Active Hours </label>
                </div>
                <div className = 'data-links' style = {{backgroundColor: 'darkgrey', opacity: 0.8, color: 'white'}}>
                    <h4>
                        <label>5</label>
                        <RiLoginBoxFill />
                    </h4>
                    <label> Logins </label>
                </div>
                <div className = 'data-links' style = {{backgroundColor: 'magenta', opacity: 0.8, color: 'white'}}>
                    <h4>
                        <label>4</label>
                        <FaLocationArrow /> 
                    </h4>
                    <label> Locations </label>
                </div>
                <div className = 'data-links' style = {{backgroundColor: 'darkcyan', opacity: 0.8, color: 'white'}}>
                    <h4>
                        <label>2</label>
                        <HiDocumentReport />
                    </h4>
                    <label> Complaints </label>
                </div>
            </div>
        </div>
    )
}

export default Stats;
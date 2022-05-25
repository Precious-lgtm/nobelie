import React from 'react';
import '../subStyles/users/stats.css';
import { FaWallet, FaMoneyCheck,  } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Userwallet (props) {
   
    return (
        <div className='dashboardcontent'>
            <h3 className='stats-title'> My Wallet </h3>
            <div className='basic-data'>
                <div className = 'data-links' style = {{backgroundColor: 'green', opacity: 0.8, color: 'white'}}>
                    <h4> 
                        <label>N1,505.65</label>
                        <FaWallet />
                    </h4>
                    <label> Wallet Balance </label>
                </div>
                <div className = 'data-links' style = {{backgroundColor: 'brown', opacity: 0.8, color: 'white'}}>
                    <h4> 
                        <label>N8,609.95</label>
                        <FaMoneyCheck />
                    </h4>
                    <label> Total Earnings </label>
                </div>
                <div className = 'data-links' style = {{backgroundColor: 'blue', opacity: 0.8, color: 'white'}}>
                    <h4> 
                        <label>N7,104.30</label>
                        <GiMoneyStack />
                    </h4>
                    <label> Total Withdrawals </label>
                </div>
            </div>
            <div className='basic-data'>
                <div className='wallet-options'>
                    <Link to = '/' className='w-option'> Fund my Wallet </Link>
                    <Link to = '/' className='w-option'> Initiate a Withdrawal </Link>
                </div>
                <div className = 'tr-history'>
                    <h4> Transaction History </h4>
                    <div className='tr-history-data'>
                        <div className='history-data'>
                            <div className='data-amount'>
                                <label className= 'amt-1'> N4,500.00 </label>
                                <label className= 'amt-2'> Withdrawal - Completed </label>
                            </div>
                            <div className='data-timestamp'>
                                <label className= 'time-1'> 28-Dec-2021 </label>
                                <label className= 'time-2'> 11:55:12 AM </label>
                            </div>
                        </div>
                        <div className='history-data'>
                            <div className='data-amount'>
                                <label className= 'amt-1'> N4,500.00 </label>
                                <label className= 'amt-2'> Withdrawal - Completed </label>
                            </div>
                            <div className='data-timestamp'>
                                <label className= 'time-1'> 28-Dec-2021 </label>
                                <label className= 'time-2'> 11:55:12 AM </label>
                            </div>
                        </div>
                        <div className='history-data'>
                            <div className='data-amount'>
                                <label className='amt-1'> N4,500.00 </label>
                                <label className='amt-2'> Withdrawal - Completed </label>
                            </div>
                            <div className='data-timestamp'>
                                <label className='time-1'> 28-Dec-2021 </label>
                                <label className='time-2'> 11:55:12 AM </label>
                            </div>
                        </div>
                        <div className='history-data'>
                            <div className='data-amount'>
                                <label className='amt-1'> N4,500.00 </label>
                                <label className='amt-2'> Withdrawal - Completed </label>
                            </div>
                            <div className='data-timestamp'>
                                <label className='time-1'> 28-Dec-2021 </label>
                                <label className='time-2'> 11:55:12 AM </label>
                            </div>
                        </div>
                        <div className='history-data'>
                            <div className='data-amount'>
                                <label className='amt-1'> N4,500.00 </label>
                                <label className='amt-2'> Withdrawal - Completed </label>
                            </div>
                            <div className='data-timestamp'>
                                <label className='time-1'> 28-Dec-2021 </label>
                                <label className='time-2'> 11:55:12 AM </label>
                            </div>
                        </div>
                        <div className='history-data'>
                            <div className='data-amount'>
                                <label className='amt-1'> N4,500.00 </label>
                                <label className='amt-2'> Withdrawal - Completed </label>
                            </div>
                            <div className='data-timestamp'>
                                <label className='time-1'> 28-Dec-2021 </label>
                                <label className='time-2'> 11:55:12 AM </label>
                            </div>
                        </div>
                        <div className='history-data'>
                            <div className='data-amount'>
                                <label className='amt-1'> N4,500.00 </label>
                                <label className='amt-2'> Withdrawal - Completed </label>
                            </div>
                            <div className='data-timestamp'>
                                <label className='time-1'> 28-Dec-2021 </label>
                                <label className='time-2'> 11:55:12 AM </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userwallet;
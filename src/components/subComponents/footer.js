import React from 'react';
import { Link } from 'react-router-dom';
import './subStyles/footer.css';

function Footer(props) {
    return (
        <div className = 'footer1'>
            <Link to = '/' className = 'links'> Help </Link>
            <Link to = '/' className = 'links'> Careers </Link>
            <Link to = '/' className = 'links'> Terms </Link>
            <Link to = '/' className = 'links'> Privacy </Link>
            <Link to = '/' className = 'links'> Creator Portal </Link>
            <Link to = '/' className = 'links'> About </Link>
            <Link to = '/' className = 'links-c' style = {{width: '10vw', textDecoration: 'none', fontSize: '0.875rem', color: 'black', marginTop: '1vh'}}> © 2021 Nobelie, Inc. </Link>
        </div>
    )
}

export default Footer;
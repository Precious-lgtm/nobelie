import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './styles/header.css';

function Header() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return(
        <nav className = 'navbar'>
            <Link to="/" className="nav-logo">
                Nobelie
            </Link>
            <div onClick={handleClick} className="nav-icon">
                {open ? <FiX className='burger' /> : <FiMenu className='burger' />}
            </div>
            <ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link" onClick={closeMenu}>
						Nobelie PRO
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
						Creator Portal
					</Link>
				</li>
                <li className="nav-item">
					<Link to="/explore" className="nav-link" onClick={closeMenu}>
						Explore
					</Link>
				</li>
                <li className="nav-item">
					<Link to="/explore" className="nav-link" onClick={closeMenu}>
						Contact Us
					</Link>
				</li>
                <li className = 'nav-item'>
                    <Link to = '/auth/signup' className = "nav-link signup" onClick = {closeMenu}>
                        Login / Register
                    </Link>
                </li>
			</ul>
        </nav>
    )
}

export default Header;
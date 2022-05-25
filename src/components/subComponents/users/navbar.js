import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import '../subStyles/users/navbar.css';
//import DropdownItem from '@restart/ui/esm/DropdownItem';
//import { DropdownButton } from 'react-bootstrap';
//import avatar from '../../../assets/avatar.jpg';
function Navbar() {
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
                {open ? <FiX /> : <FiMenu />}
            </div>
            <ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link profile" onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link" onClick={closeMenu}>
						About Nobelie
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
						Nobelie PRO
					</Link>
				</li>
                <li className="nav-item">
					<Link to="/explore" className="nav-link" onClick={closeMenu}>
						Bookmarks
					</Link>
				</li>
                <li className="nav-item">
					<Link to="/explore" className="nav-link" onClick={closeMenu}>
						Search History
					</Link>
				</li>
                <li className="nav-item">
					<Link to="/explore" className="nav-link" onClick={closeMenu}>
						Explore
					</Link>
				</li>
                <li className = 'nav-item'>
                    <Link to = '/' className = "nav-link signup" onClick = {closeMenu}>
                        New Post
                    </Link>
                </li>
			</ul>
        </nav>
    )
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import { RiLeafFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css'
const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    const style = {  fontSize: "1em"}
    //Dhekho if there is an click then styling of nav-menu active will be there else the styling of nav-menu will be there
    return ( 
            <nav className='navbar'>
            <div className='navbar-container'>
                
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <RiLeafFill />Living 

            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                
            <li className='nav-item'>
                <Link
                    to='/'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                    Home
                </Link>
                </li>

                <li className='nav-item'>
                <Link to='/Category' className='nav-links' onClick={closeMobileMenu}>
                    Category
                </Link>
                </li>

                <li className='nav-item'>
                <Link
                    to='/dashboard'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                    All blogs
                </Link>
                </li>
                

               
            </ul>
            
            <Link to='/create'>{button && <Button buttonStyle='btn--outline'>New BLog</Button>}</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
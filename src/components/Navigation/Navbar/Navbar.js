import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Navbar.css';

const navbar = () => {
    return (
        <header className='Navbar'>
            <Logo />
            <nav>
                <NavigationItems className='Navbar-DesktopOnly'/>
            </nav>
        </header>
    );
};

export default navbar;
import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Navbar.css';

const navbar = () => {
    return (
        <header className={classes.Navbar}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default navbar;
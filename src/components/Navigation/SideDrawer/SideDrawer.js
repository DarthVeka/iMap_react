import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {

    let classesArray = [classes.SideDrawer, classes.Closed];
    if(props.isOpen) {
        classesArray = [classes.SideDrawer, classes.Open]
    }

    return (
        <div className={classesArray.join(' ')} onClick={props.close}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;
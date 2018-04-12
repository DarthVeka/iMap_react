import React, { Fragment } from 'react';

import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {

    let classesArray = [classes.SideDrawer, classes.Closed];
    if (props.isOpen) {
        classesArray = [classes.SideDrawer, classes.Open]
    }

    return (
        <Fragment>
            <Backdrop
                clicked={props.close}
                show={props.isOpen}
            />
            <div className={classesArray.join(' ')} onClick={props.close}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </Fragment>
        
    );
};

export default sideDrawer;
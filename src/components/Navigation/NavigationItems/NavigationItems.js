import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/'>Region</NavigationItem>
            <NavigationItem link='/comparison'>Comparison</NavigationItem>
        </ul>
    );
};

export default navigationItems;
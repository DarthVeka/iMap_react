import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/'>Regions</NavigationItem>
            <NavigationItem link='/comparison'>Comparison</NavigationItem>
            {
                props.isAuthenticated ? 
                    <NavigationItem link='/logout'>
                        Logout
                    </NavigationItem>
                    :
                    <NavigationItem link='/auth'>
                        <i className="material-icons">perm_identity</i>
                    </NavigationItem>
            }
        </ul>
    );
};

export default navigationItems;
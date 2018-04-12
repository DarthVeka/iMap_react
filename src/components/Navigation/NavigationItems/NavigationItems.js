import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => {

    const style = {
        paddingTop: '12px',
        paddingBottom: '12px'
    }

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/'>Regions</NavigationItem>
            <NavigationItem link='/comparison'>Comparison</NavigationItem>
            {
                props.isAuthenticated ? 
                    <NavigationItem style={style} link='/logout'>
                        Logout
                    </NavigationItem>
                    :
                    <NavigationItem style={style} link='/auth'>
                        <i className="material-icons">perm_identity</i>
                    </NavigationItem>
            }
        </ul>
    );
};

export default navigationItems;
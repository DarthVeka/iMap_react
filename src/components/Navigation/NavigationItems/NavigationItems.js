import React, { Fragment } from 'react';

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
                    <Fragment>
                        <NavigationItem link='/admin'>
                            Admin Panel
                        </NavigationItem>
                        <NavigationItem link='/logout'>
                            Logout
                        </NavigationItem>
                    </Fragment>
                    :
                    <NavigationItem style={style} link='/auth'>
                        <i className="material-icons">perm_identity</i>
                    </NavigationItem>
            }
        </ul>
    );
};

export default navigationItems;
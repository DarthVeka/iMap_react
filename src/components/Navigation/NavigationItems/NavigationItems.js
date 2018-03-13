import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = () => {
    return (
        <ul className='NavigationItems'>
            <NavigationItem link='/'>Region</NavigationItem>
            <NavigationItem link='/comparison'>Comparison</NavigationItem>
        </ul>
    );
};

export default navigationItems;
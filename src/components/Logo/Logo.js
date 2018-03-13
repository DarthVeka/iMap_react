import React from 'react';

import logoImg from '../../assets/Images/Logo/logo.bmp';
import classes from './Logo.css';

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logoImg} alt='logo' />
        </div>
    );
};

export default logo;
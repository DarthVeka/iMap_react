import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/Images/Logo/logo.bmp';
import classes from './Logo.css';

const logo = () => {
    return (
        <div className={classes.Logo}>
            <Link to='/'>
                <img src={logoImg} alt='logo' />
            </Link>
        </div>
    );
};

export default logo;
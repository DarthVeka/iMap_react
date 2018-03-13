import React from 'react';

import logoImg from '../../assets/Images/Logo/logo.bmp';
import './Logo.css';

const logo = () => {
    return (
        <div className='Logo'>
            <img src={logoImg} alt='logo' />
        </div>
    );
};

export default logo;
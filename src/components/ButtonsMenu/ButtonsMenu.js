import React from 'react';

import classes from './ButtonsMenu.css';

const ButtonsMenu = (props) => {
    const mobileClasses = ['material-icons', classes.Mobile];

    return (
        <div className={classes.ButtonsMenu}>
            <button 
                className={classes.ButtonsMenuItem} 
                onClick={props.centerMap}>
                <i className={mobileClasses.join(' ')}>pin_drop</i>
                <p className={classes.Desktop}>Center</p>
            </button>
            <button 
                className={classes.ButtonsMenuItem} 
                onClick={props.getMyLocation}>
                <i className={mobileClasses.join(' ')}>my_location</i>
                <p className={classes.Desktop}>My Location</p>
            </button>
            <button 
                className={classes.ButtonsMenuItem} 
                onClick={props.exitStreetView}>
                <i className={mobileClasses.join(' ')}>satellite</i>
                <p className={classes.Desktop}>Exit Street View</p>
            </button>
        </div>
    );
};

export default ButtonsMenu;
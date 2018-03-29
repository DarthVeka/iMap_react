import React from 'react';

import classes from './Tooltip.css';

const Tooltip = (props) => {
    
    const style = {
        top: props.top,
        left: props.left
    }

    let cls = [classes.Tooltip, classes.DesktopOnly]

    if(props.show) {
        cls = [ classes.Tooltip, classes.DesktopOnly, classes.Show ];
    }

    return (
        <div className={cls.join(' ')} style={style} >
            {props.children}
        </div>
    );
};

export default Tooltip;
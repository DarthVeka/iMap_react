import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => {
    return (
        <li>
            <NavLink
                exact
                to={props.link}
                activeClassName='navItem-active'
            >
                {props.children}
            </NavLink>
        </li>
    );
};

export default navigationItem;
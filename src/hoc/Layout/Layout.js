import React, { Component, Fragment } from 'react';

import classes from './Layout.css';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        drawerOpen: false 
    }

    ToggleDrawerHandler = () => {
        this.setState((prevState) => {
            return { drawerOpen: !prevState.drawerOpen };
          });
    }

    CloseDrawerHandler = () => {
        this.setState({
            drawerOpen: false
        });
    }

    render() {
        return (
            <Fragment>
                <SideDrawer
                    close={this.CloseDrawerHandler}
                    isOpen={this.state.drawerOpen}
                />
                <Navbar 
                    toggleDrawer={this.ToggleDrawerHandler}
                    closeDrawer={this.CloseDrawerHandler}
                />
                <main className={classes.Main}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;
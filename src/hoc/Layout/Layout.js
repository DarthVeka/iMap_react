import React, { Component, Fragment } from 'react';

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
        console.log(this.state);
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
                <main className='main-container'>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;
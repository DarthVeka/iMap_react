import React, { Component, Fragment } from 'react';

import Navbar from '../../components/Navigation/Navbar/Navbar';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <main className='main-container'>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;
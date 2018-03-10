import React, { Component, Fragment } from 'react';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                layout
                <main className='main-container'>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;
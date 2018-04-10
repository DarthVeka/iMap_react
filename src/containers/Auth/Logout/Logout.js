import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Spinner from '../../../components/UI/Spinner/Spinner';

class Logout extends Component {

    componentDidMount() {
        // Call dispatch function to log off
    }
    
    render() {
        return (
            <Fragment>
                <Spinner />
                <Redirect to='/' />
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
}

export default connect(null, mapDispatchToProps)(Logout);
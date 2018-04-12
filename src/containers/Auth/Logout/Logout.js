import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../../store/actions/index';
import Spinner from '../../../components/UI/Spinner/Spinner';

class Logout extends Component {

    componentDidMount() {
        this.props.logout();
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
        logout: () => dispatch(actions.logout())
    };
}

export default connect(null, mapDispatchToProps)(Logout);
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import classes from './Details.css';
import GoogleMap from '../Map/GoogleMapContainer/GoogleMap';

class Details extends Component {

    render() {

        let content = <Redirect to='/' />

        if (this.props.selectedRegion) {
            content = (
                <div className={classes.Details}>
                    <h1 className={classes.Heading}>{this.props.selectedRegion.regionTitle}</h1>
                    <GoogleMap selectedRegion={this.props.selectedRegion}/>
                </div>
            )
        }

        return (
            <Fragment>
                {content}
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedRegion: state.map.selectedRegion
    };
}

export default connect(mapStateToProps)(Details);
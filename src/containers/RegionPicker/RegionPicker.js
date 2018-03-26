import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './RegionPicker.css';
import Map from '../Map/Map';
import croMap from '../../assets/Maps/croatiaHigh.svg';

class RegionPicker extends Component {
    render() {
        return (
            <div className={classes.RegionPicker}>
                <Map map={croMap} width="620px" height="620px" />
                <p>{this.props.hoveringOver}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        hoveringOver: state.hoveringOver
    }
}

export default connect(mapStateToProps)(RegionPicker);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './RegionPicker.css';
import MapContainer from '../Map/MapContainer';
import BasicDetails from '../../components/BasicDetails/BasicDetails';

class RegionPicker extends Component {
    render() {
        return (
            <div className={classes.RegionPicker}>
                <MapContainer  width="620px" height="620px" />
                <div className={classes.InfoCont}>
                    <BasicDetails selectedRegion={this.props.selectedRegion} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedRegion: state.selectedRegion
    }
}

export default connect(mapStateToProps)(RegionPicker);
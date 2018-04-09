import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../../components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions';
import classes from './GoogleMap.css';

export class GoogleMap extends Component {
    
    state = {
        map: null
    }

    componentWillMount() {
        this.props.startFetchingData(this.props.selectedRegion.id);
    }
    componentDidUpdate() {
        if (!this.props.loading && this.props.mapPoiData !== null && this.state.map === null) {
            this.setMap();
        }
    }

        setMap = () => {
            // SET MAP
             const map = new window.google.maps.Map(this.refs.map, {
                zoom: 9,
                center: this.props.mapPoiData.center,
                gestureHandling: 'cooperative',
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: true,
                streetViewControlOptions: {
                    position: window.google.maps.ControlPosition.BOTTOM_CENTER
                },
                rotateControl: false,
                fullscreenControl: false
            });

            // SET ALL POIS
            this.props.mapPoiData.pois.map(poi => {
                 const marker = new window.google.maps.Marker({
                    position: poi.coordinates,
                    animation: window.google.maps.Animation.BOUNCE,
                    map: map
                });
                return marker;
            })

            // DISABLE UI ON STREET VIEW
            map.getStreetView().setOptions({
                disableDefaultUI: true,
                enableCloseButton: false
            })

            this.setState({
                map: map
            });       
        }

    centerMap = () => {
        this.state.map.panTo(this.props.mapPoiData.center);
    }

    exitStreetView = () => {
        this.state.map.getStreetView().setVisible(false);
    }

    render() {

        let spinner = <Spinner />

        if (!this.props.loading && this.props.mapPoiData !== null) {
            spinner = null;
        }

        return (
            <Fragment>
                {spinner}
                <div className={classes.GoogleMap} ref="map" />
                <button onClick={this.centerMap}>Center</button>
                <button onClick={this.exitStreetView}>Exit street view</button>
            </Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        mapPoiData: state.poiData.mapPoiData,
        loading: state.poiData.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startFetchingData: (id) => dispatch(actions.startFetchingPoiData(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap);
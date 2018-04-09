import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../../components/UI/Spinner/Spinner';
import ButtonsMenu from '../../../components/ButtonsMenu/ButtonsMenu';
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

    getMyLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {

                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                var infowindow = new window.google.maps.InfoWindow({
                    content: 'Your location'
                });

                var marker = new window.google.maps.Marker({
                    position: pos,
                    map: this.state.map,
                    icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
                });

                marker.addListener('click', () => {
                    infowindow.open(this.state.map, marker);
                });

                this.state.map.panTo(pos);

            });

        } else {
            var infowindow = new window.google.maps.InfoWindow({
                content: 'Not supported'
            });
            infowindow.open(this.state.map);
        }

    }

    render() {

        let spinner = <Spinner />
        let menu = null;

        if (!this.props.loading && this.props.mapPoiData !== null) {
            spinner = null;
            menu = <ButtonsMenu
                centerMap={this.centerMap}
                exitStreetView={this.exitStreetView}
                getMyLocation={this.getMyLocation}
            />;
        }

        return (
            <Fragment>
                {spinner}
                <div className={classes.GoogleMap} ref="map" />
                {menu}
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
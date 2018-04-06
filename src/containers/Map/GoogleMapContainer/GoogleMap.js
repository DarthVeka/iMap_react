import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../../components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions';
import classes from './GoogleMap.css';

export class GoogleMap extends Component {

    componentWillMount() {
        this.props.startFetchingData(this.props.selectedRegion.id);
    }
    // componentDidUpdate() {
    //     if (!this.props.loading && this.props.mapPoiData !== null) {
    //         this.setMap();
    //     }
    // }

    //     setMap = () => {
    //         // SET MAP
    //         const map = new window.google.maps.Map(this.refs.map, {
    //             zoom: 9,
    //             center: this.props.mapPoiData.center,
    //             gestureHandling: 'cooperative',
    //             zoomControl: false,
    //             mapTypeControl: false,
    //             scaleControl: false,
    //             streetViewControl: true,
    //             streetViewControlOptions: {
    //                 position: window.google.maps.ControlPosition.BOTTOM_CENTER
    //             },
    //             rotateControl: false,
    //             fullscreenControl: false
    //         });

    //         // SET ALL POIS
    //         this.props.mapPoiData.pois.map(poi => {
    //              const marker = new window.google.maps.Marker({
    //                 position: poi.coordinates,
    //                 animation: window.google.maps.Animation.BOUNCE,
    //                 map: map
    //             });
    //             return marker;
    //         })

    //         // DISABLE UI ON STREET VIEW
    //         map.getStreetView().setOptions({
    //             disableDefaultUI: true,
    //             enableCloseButton: false
    //         })

    //         const centerMap = (map) => {
    //             map.panTo(this.props.mapPoiData.center);
    //         }

    // ////////////////////////////////////////////////////
    //         // map.addListener('center_changed', () => {
    //         //     window.setTimeout(() => {
    //         //         map.panTo(this.props.mapPoiData.center);
    //         //     }, 5000);
    //         // });


    //         // window.google.maps.event.addListener(map.getStreetView(),'pov_changed',() => {
    //         //     setTimeout(() => {
    //         //         map.getStreetView().setVisible(false)
    //         //     }, 10000) 
    //         //  });
    //     }

    centerMap = (map) => {
        map.panTo(this.props.mapPoiData.center);
    }


    render() {

        let map = null;

        if (!this.props.loading && this.props.mapPoiData !== null) {
            map = new window.google.maps.Map(this.refs.map, {
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
        }





        let spinner = <Spinner />

        if (!this.props.loading && this.props.mapPoiData !== null) {
            spinner = null;
        }

        return (
            <Fragment>
                {spinner}
                <div className={classes.GoogleMap} ref="map" />
                <button onClick={() => this.centerMap(map)}>Center</button>
                <button>Exit street view</button>
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